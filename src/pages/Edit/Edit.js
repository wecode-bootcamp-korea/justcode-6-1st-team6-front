import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Edit.scss';

function Edit({ userInfo, stack, userStack }) {
  const defaultValue = userInfo;
  const [selectStack, setSelect] = useState(null);
  const [nickName, setNickName] = useState();
  const navigate = useNavigate();
  const selectChange = e => {
    setSelect(e.target.value);
  };
  const getValue = e => {
    setNickName(e.target.value);
  };
  const editSubmit = event => {
    event.preventDefault();
    const body = {
      nickname: nickName,
      stacks: selectStack,
      profile_image: null,
    };
    fetch('http://localhost:8000/users', {
      method: 'PATCH',
      headers: {
        token: localStorage.getItem('login-token'),
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => {
        if (res.status === 200) {
          alert('수정이 완료되었습니다.');
          navigate('/edit');
        } else {
          alert('내용을 다시 작성해주세요.');
        }
      })
      .then(res => {});
  };

  return (
    <div className="editContainer">
      <div className="width70">
        <form onSubmit={editSubmit}>
          <h1 className="title">내 정보 수정</h1>
          <div className="profileImg">
            <span />
          </div>
          <div className="nickName borderBottom">
            <div className="inputGroup">
              <h3>닉네임</h3>
              <input
                type="text"
                defaultValue={defaultValue}
                onChange={getValue}
              />
            </div>
            <span>HALLO에서 사용되는 이름입니다.</span>
          </div>
          <div className="interestTag borderBottom">
            <div className="inputGroup">
              <h3>관심 기술 태그</h3>
              <select onChange={selectChange} defaultValue={userStack}>
                {stack.map(data => {
                  return (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <span>관심 있는 기술 태그를 등록해주세요.</span>
          </div>
          <div className="buttonArea">
            <button className="bkButton" type="submit">
              완료
            </button>
            <button className="rdButton">회원탈퇴</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
