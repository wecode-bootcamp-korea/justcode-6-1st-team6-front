import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import css from './Signup.module.scss';

function Signup() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <div className={css.background}>
      <div className={css.container}>
        <div>
          <h1>로고</h1>
          <h2>Sign up</h2>
          <div>
            <input className={css.textInput} placeholder="닉네임"></input>
          </div>
          <div>
            <input
              className={css.textInput}
              placeholder="Email address 입력"
            ></input>
          </div>
          <div>
            <input
              className={css.textInput}
              placeholder="Password (6자리 이상)"
            ></input>
          </div>
          <div>
            <input
              className={css.textInput}
              placeholder="Password 확인"
            ></input>
          </div>
          <div>
            <input type="checkbox" /> &nbsp;
            <span className={css.click}>이용약관</span>에 동의하겠습니까?
          </div>
          <div className={css.ask}>
            <span className={css.click} onClick={goToLogin}>
              로그인
            </span>
            &nbsp;하시겠습니까?
          </div>
          <button className={css.signupButton}>회원가입하기</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
