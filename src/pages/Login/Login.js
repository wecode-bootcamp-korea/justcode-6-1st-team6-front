import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import css from './Login.module.scss';
import logo from '../../assets/images/logo2.png';

function Login() {
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

  // const onLoginBtnClick = () => {
  //   fetch('/mock/main/users.json')
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result.data);
  //     });
  const onLoginBtnClick = () => {
    const body = {
      email: email,
      password: pw,
    };

    fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        if (result.token) {
          localStorage.setItem('login-token', result.token);
          goToMain();
        } else {
          alert('로그인 정보를 확인해 주시기 바랍니다.');
        }
      });
  };
  return (
    <div className={css.background}>
      <div className={css.container}>
        <div>
          <img className={css.textLogo} alt="로고" src={logo} />
          <h1>로그인</h1>
          <div>
            <input
              className={css.textInput}
              placeholder="아이디 (이메일 주소)"
              onChange={handleEmailInput}
            />
          </div>
          <div>
            <input
              type="password"
              onChange={handlePwInput}
              className={css.textInput}
              placeholder="비밀번호"
            />
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
            onClick={onLoginBtnClick}
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
