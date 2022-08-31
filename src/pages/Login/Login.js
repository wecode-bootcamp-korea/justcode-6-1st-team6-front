import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import css from './Login.module.scss';

function Login() {
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/agreement');
  };
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [valid, setValid] = useState(false);

  const handleEmailInput = e => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    emailValue.includes('@') && pw.length >= 6
      ? setValid(true)
      : setValid(false);
  };
  const handlePwInput = e => {
    const pwValue = e.target.value;
    setPw(pwValue);
    email.includes('@') && pwValue.length >= 6
      ? setValid(true)
      : setValid(false);
  };

  return (
    <div className={css.background}>
      <div className={css.container}>
        <div>
          <img className={css.textLogo} src="logo2.png" />
          <h1 className={css.flexCenter}></h1>
          <h2>로그인</h2>
          <div>
            <input
              className={css.emailInput}
              placeholder="아이디 (이메일 주소)"
              onChange={handleEmailInput}
            ></input>
          </div>
          <div>
            <input
              type="password"
              onChange={handlePwInput}
              className={css.passwordInput}
              placeholder="비밀번호"
            ></input>
          </div>
          <button
            style={{ backgroundColor: valid ? '#d5b7f4' : 'black' }}
            className={`${css.loginButton} ${css.button}`}
          >
            로그인
          </button>
          <button className={css.ask} onClick={goToSignup}>
            이메일로 신규 회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
