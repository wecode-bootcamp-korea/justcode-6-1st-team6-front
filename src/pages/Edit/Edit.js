import React, { useState } from 'react';
import './Edit.scss';

function Edit({ userInfo, stack, userStacks }) {
  const defaultValue = userInfo;
  const [selectStack, setSelect] = useState(null);
  const [nickName, setNickName] = useState();

  console.log('위', selectStack);
  console.log('위2', userStacks[1]);

  const selectChange = e => {
    setSelect(e.target.value);
  };
  const getValue = e => {
    setNickName(e.target.value);
  };
  const editSubmit = () => {
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
      .then(res => res.json())
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
              <select onChange={selectChange} defaultValue={userStacks[2]}>
                {stack.map(data => {
                  return (
                    <option
                      key={data.id}
                      value={data.id}
                      selected={data.id === userStacks[0] && 'selected'}
                    >
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
