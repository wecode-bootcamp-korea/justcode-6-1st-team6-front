import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import css from './Login.module.scss';

function Login() {
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/signup');
  };
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [valid, setValid] = useState(false);

  const handleIdInput = e => {
    const idValue = e.target.value;
    setId(idValue);
    idValue.includes('@') && pw.length >= 6 ? setValid(true) : setValid(false);
  };
  const handlePwInput = e => {
    const pwValue = e.target.value;
    setPw(pwValue);
    id.includes('@') && pwValue.length >= 6 ? setValid(true) : setValid(false);
  };

  return (
    <div className={css.background}>
      <div className={css.container}>
        <div>
          <h1 className={css.flexCenter}>로고</h1>
          <h2 className={css.flexCenter}>Login</h2>
          <div>
            <input
              className={css.emailInput}
              placeholder="Email address"
              onChange={handleIdInput}
            ></input>
          </div>
          <div>
            <input
              onChange={handlePwInput}
              className={css.passwordInput}
              placeholder="Password"
            ></input>
          </div>
          <div className={css.ask}>
            <span className={css.click} onClick={goToSignup}>
              회원가입
            </span>
            &nbsp; 하시겠습니까?
          </div>
          <button
            style={{ backgroundColor: valid ? '#9a4aeb' : '#d5b7f4' }}
            className={`${css.loginButton} ${css.button}`}
          >
            로그인하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
