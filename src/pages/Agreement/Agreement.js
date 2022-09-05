import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import css from './Agreement.module.scss';
import logo from '../../assets/images/logo2.png';
import nexticon from '../../assets/images/nexticon.png';
import Modal from './Modal';

function Agreement() {
  const navigate = useNavigate();

  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [serviceCheck, setServiceCheck] = useState(false);
  const [personalCheck, SetPersonalCheck] = useState(false);

  const [agreementError, setAgreementError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [modal, setModal] = useState(false);
  const modalShow = () => {
    setModal(true);
  };

  // 다음단계 버튼 눌렀을 때 전체 선택되어있지 않으면 에러메세지 흐음..... 여기에 버튼 눌러서 담에 가는건 어카지

  const onCheckClick = e => {
    e.preventDefault();
    if (!allCheck) {
      setAgreementError(true);
    } else {
      setAgreementError(false);
      setDisabled(false);
      navigate('/signup');
    }
  };

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

          <img className={css.textLogo} alt="로고" src={logo} />

          <h1>서비스 이용약관에 동의</h1>
          <div className={css.agreementBox}>
            <div className={`${css.allCheck} ${css.padding_10}`}>
              <input
                type="checkbox"
                checked={allCheck}
                onChange={allBtnCheck}
              />{' '}
              네, 모두 동의합니다.
              <span>
                <button className={css.detail} onClick={modalShow}>
                  {' '}
                  약관 자세히 보기
                  <img className={css.nextIcon} alt="화살표" src={nexticon} />
                </button>
                {modal && (
                  <Modal setModal={setModal} allBtn={allBtnCheck}>
                    {' '}
                  </Modal>
                )}
              </span>
            </div>
            <div className={css.agreeList}>
              <input
                type="checkbox"
                checked={ageCheck}
                onChange={ageBtnCheck}
              />
              &nbsp;만 14세 이상
              <span className={css.must}>&nbsp;(필수)</span>
              <button className={css.nextButton} onClick={modalShow}>
                <img className={css.nextIcon} src={nexticon} />
              </button>
              {modal && <Modal setModal={setModal}></Modal>}
            </div>
            <div className={css.agreeList}>
              <input
                type="checkbox"
                checked={serviceCheck}
                onChange={serviceBtnCheck}
              />
              &nbsp;서비스 이용약관에 동의
              <span className={css.must}>&nbsp;(필수)</span>
            </div>
            <div className={css.agreeList}>
              <input
                type="checkbox"
                checked={personalCheck}
                onChange={personalBtnCheck}
              />
              &nbsp;개인정보 수집, 이용에 동의
              <span className={css.must}>&nbsp;(필수)</span>
            </div>
          </div>
          {agreementError && (
            <div style={{ color: 'red', textAlign: 'center' }}>
              이용약관에 동의해 주시기 바랍니다.
            </div>
          )}
          <button
            disabled={disabled}
            onClick={onCheckClick}
            style={{
              backgroundColor: allCheck ? 'black' : 'rgb(201, 204, 206)',
            }}
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
