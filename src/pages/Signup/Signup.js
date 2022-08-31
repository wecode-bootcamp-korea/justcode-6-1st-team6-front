import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import css from './Signup.module.scss';

function Signup() {
  //닉네임, 이메일,비밀번호, 비밀번호 확인 현재값
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);

  // 유효성 검사
  const [mismatchError, setMismatchError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [termError, setTermError] = useState(false);

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

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  // 1. 비밀번호랑 비밀번호확인이랑 다르면 아래에 에러메세지-done
  // 2 . 이메일에 @ 포함 안되어있으면 에러메시지
  // 3. 이메일, 비밀번호, 약관 체크 다 되어있으면 회원가입 버튼 활성화

  return (
    <div className={css.background}>
      <div className={css.container}>
        <div>
          <img className={css.textLogo} src="logo2.png" />
          <h2>회원가입</h2>
          <div>
            <input className={css.textInput} placeholder="닉네임"></input>
          </div>
          <div>
            <input
              onChange={onChangeEmail}
              className={css.textInput}
              placeholder="Email 주소 입력 (@ 포함)"
            ></input>
            {emailError && (
              <div style={{ color: 'red' }}>이메일 양식을 확인하세요</div>
            )}
          </div>
          <div>
            <input
              onChange={onChangePassword}
              type="password"
              className={css.textInput}
              placeholder="비밀번호 (6자리 이상)"
            ></input>
          </div>
          <div>
            <input
              onChange={onChangePasswordCheck}
              type="password"
              className={css.textInput}
              placeholder="비밀번호 확인"
            ></input>
            {mismatchError && (
              <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>
          <div className={css.checkBox}>
            <input type="checkbox" />
            &nbsp;
            <span className={css.click}>이용약관</span>에 동의하겠습니까?
          </div>

          <div className={css.ask}>
            <span>이미 계정이 있다면? </span> &nbsp;
            <span className={css.click} onClick={goToLogin}>
              로그인
            </span>
            &nbsp;하기
          </div>
          <button className={css.signupButton}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
