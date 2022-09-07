import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import css from './Signup.module.scss';
import logo from '../../assets/images/logo2.png';

function Signup() {
  //닉네임, 이메일,비밀번호, 비밀번호 확인 현재값
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  // 유효성 검사
  const [mismatchError, setMismatchError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nickError, setNickError] = useState(false);

  //이메일 주소에 @가 포함되는지 확인하고 없으면 경고메세지
  const onChangeEmail = e => {
    setEmail(e.target.value);
    setEmailError(!e.target.value.includes('@'));
  };

  //비밀번호 칸이랑 비밀번호 확인칸이랑 맞는지 확인하고 틀리면 아래 경고 메세지
  const onChangePassword = useCallback(
    e => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck]
  );
  //닉네임에 하나 이상 들어가는지 확인
  const onChangeNick = useCallback(e => {
    setNickName(e.target.value);
    setNickError(e.target.value.length >= 1);
  }, []);

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );
  //이메일 중복확인
  const repetConfirm = () => {
    const body = {
      email: email,
    };
    fetch('http://localhost:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => {
        if (res.status === 201) {
          alert('사용가능한 이메일 입니다.');
        }
        if (res.status === 400) {
          alert('이미 사용중인 이메일 입니다.');
        }
      })
      .then(res => {});
  };
  //로그인으로 이동
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  const onSignupBtnClick = () => {
    const body = {
      email: email,
      nickname: nickName,
      password: password,
    };

    fetch('http://localhost:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => {
        if (res.status === 201) {
          alert('회원가입이 완료되었습니다. 로그인 해주세요.');
          navigate('/login');
        }
        if (res.status === 400) {
          alert('이미 사용중인 이메일 입니다. 다른 이메일을 사용해주세요.');
        }
        // res.json();
      })
      .then(res => {});
  };
  return (
    <div className={css.background}>
      <div className={css.container}>
        <div>
          <img className={css.textLogo} alt="로고" src={logo} />
          <h1>회원가입</h1>
          <div>
            <input
              onChange={onChangeNick}
              className={css.textInput}
              placeholder="닉네임"
            />
          </div>
          <div>
            <input
              onChange={onChangeEmail}
              className={css.loginText}
              placeholder="Email 주소 입력 (@ 포함)"
            />
            <button onClick={repetConfirm} className={css.repetition}>
              중복확인
            </button>

            {emailError && (
              <div style={{ color: 'red', textAlign: 'center' }}>
                이메일 양식을 확인하세요
              </div>
            )}
          </div>
          <div>
            <input
              onChange={onChangePassword}
              type="password"
              className={css.textInput}
              placeholder="비밀번호 (6자리 이상)"
            />
          </div>
          <div>
            <input
              onChange={onChangePasswordCheck}
              type="password"
              className={css.textInput}
              placeholder="비밀번호 확인"
            />
            {mismatchError && (
              <div style={{ color: 'red', textAlign: 'center' }}>
                비밀번호가 일치하지 않습니다.
              </div>
            )}
          </div>
          <div className={css.ask}>
            <span>이미 계정이 있다면? </span> &nbsp;
            <span className={css.click} onClick={goToLogin}>
              로그인
            </span>
            &nbsp;하기
          </div>
          <button
            disabled={!nickName}
            onClick={onSignupBtnClick}
            className={css.signupButton}
            style={{
              backgroundColor:
                !emailError && !mismatchError && nickError
                  ? 'black'
                  : 'rgb(201, 204, 206)',
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
