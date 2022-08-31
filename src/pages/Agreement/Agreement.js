import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import css from './Agreement.module.scss';

function Agreement() {
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [serviceCheck, setServiceCheck] = useState(false);
  const [personalCheck, SetPersonalCheck] = useState(false);

  //이용약관 버튼 구현 (전체버튼 누르면 전체 눌림)
  //전체동의 체크시 나머지 3개 전부 체크, 전체동의 해제시 나머지 3개 전부 해제,
  // 3개 전부 체크시 자동으로 전체동의 체크
  // 다 체크된 상태에서 3개중에 하나 체크해제하면 전체 동의도 자동 체크 해제

  //1. 전체버튼
  const allBtnCheck = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setServiceCheck(true);
      SetPersonalCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setServiceCheck(false);
      SetPersonalCheck(false);
    }
  };
  //2. 14세 버튼
  const ageBtnCheck = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };
  // 3. 서비스 버튼
  const serviceBtnCheck = () => {
    if (serviceCheck === false) {
      setServiceCheck(true);
    } else {
      setServiceCheck(false);
    }
  };
  //4. 개인정보 버튼
  const personalBtnCheck = () => {
    if (personalCheck === false) {
      SetPersonalCheck(true);
    } else {
      SetPersonalCheck(false);
    }
  };

  // 3개를 전부다 선택했을 때 전체선택이 자동으로 체크될 수 있게 구현
  //useEffect 사용해 체크된 때를 랜더링해 전체 체크로 변경

  useEffect(() => {
    if (ageCheck === true && serviceCheck === true && personalCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, serviceCheck, personalCheck]);

  return (
    <div className={css.background}>
      <div className={css.container}>
        <div>
          <img className={css.textLogo} src="logo2.png" />
          <h3>서비스 이용약관에 동의</h3>
          <div className={css.agreementBox}>
            <div className={`${css.allCheck} ${css.padding_10}`}>
              <input
                type="checkbox"
                checked={allCheck}
                onChange={allBtnCheck}
              />{' '}
              네, 모두 동의합니다.
            </div>
            <div className={css.forteen}>
              <input
                type="checkbox"
                checked={ageCheck}
                onChange={ageBtnCheck}
              />{' '}
              필수, 만 14세 이상
            </div>
            <div className={css.service}>
              <input
                type="checkbox"
                checked={serviceCheck}
                onChange={serviceBtnCheck}
              />{' '}
              필수, 서비스 이용약관에 동의
            </div>
            <div className={css.personal}>
              <input
                type="checkbox"
                checked={personalCheck}
                onChange={personalBtnCheck}
              />{' '}
              필수, 개인정보 수집, 이용에 동의
            </div>
          </div>

          <button
            // style={{ backgroundColor: valid ? '#d5b7f4' : 'black' }}
            className={`${css.signupButton} ${css.button}`}
          >
            다음단계 진행
          </button>
        </div>
      </div>
    </div>
  );
}
export default Agreement;
