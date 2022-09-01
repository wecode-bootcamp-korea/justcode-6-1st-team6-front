import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import css from './Login.module.scss';

function Login() {
  const goToSignup = () => {
    navigate('/agreement');
  };
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [valid, setValid] = useState(false);
  const [token, setToken] = useState('');
  const [disabled, setDisabled] = useState(false);

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
  // 로그인버튼 누르면 조건 만족시에 main창으로 넘어감
  const navigate = useNavigate();
  const goToMain = () => {
    if (email.includes('@') && pw.length >= 6) {
      navigate('/');
      alert('로그인 되었습니다. HALLO에 오신 것을 환영합니다.');
      setValid(true);
    } else {
      setValid(false);
    }
  };
  // const goToMain = () => {
  //   if (email.length < 1 || pw.length < 1) {
  //     setValid(true);
  //   } else {
  //     setValid(false);
  //   }
  // };

  const onLoginBtnClick = () => {
    const body = {
      email: email,
      password: pw,
    };
    fetch('http://localhost:3000/users/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(json => {
        setToken(json.access_token);
        localStorage.setItem('token', json.access_token);
      });
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
              className={css.textInput}
              placeholder="아이디 (이메일 주소)"
              onChange={handleEmailInput}
            ></input>
          </div>
          <div>
            <input
              type="password"
              onChange={handlePwInput}
              className={css.textInput}
              placeholder="비밀번호"
            ></input>
          </div>
          {!valid && (
            <div
              style={{
                color: 'red',
                textAlign: 'center',
                verticalAlign: 'center',
              }}
            >
              로그인 정보를 확인해 주시기 바랍니다.
            </div>
          )}
          <button
            onClick={goToMain}
            style={{ backgroundColor: valid ? 'black' : 'rgb(201, 204, 206)' }}
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
// 백엔드에서 아이디 패스워드 가져와서 올바른 값인지 확인하고
// 맞으면 로그인 버튼 눌렀을 때 alert창 뜨면서 로그인되었습니다 뜨고 메인페이지로 이동
