import React from 'react';
import './Edit.scss';

function Edit() {
  return (
    <div className="editContainer">
      <div className="width70">
        <h1 className="title">내 정보 수정</h1>
        <div className="profileImg">
          <span />
        </div>
        <div className="nickName borderBottom">
          <div className="inputGroup">
            <h3>닉네임</h3>
            <input type="text" />
          </div>
          <span>HALLO에서 사용되는 이름입니다.</span>
        </div>
        <div className="interestTag borderBottom">
          <div className="inputGroup">
            <h3>관심 기술 태그</h3>
            <select>
              <option>1</option>
              <option>2</option>
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
      </div>
    </div>
  );
}

export default Edit;
