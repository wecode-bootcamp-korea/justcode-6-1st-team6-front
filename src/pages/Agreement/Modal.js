import React from 'react';
import { useEffect } from 'react';
import css from './Modal.module.scss';

function Modal({ setModal, allBtn }) {
  const modalClose = () => {
    setModal(false);
  };
  const clickkBtn = () => {
    allBtn(false);
    setModal(false);
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <button className={css.modalButton} onClick={modalClose}>
          X
        </button>
        <div>
          <div>
            <p className={css.title}>만 14세 이용약관</p>
            <content className={css.content}>
              {' '}
              개인정보 보호법 제 22조, 제 39조의 3에 의해 만 14세 미만 아동의
              개인 정보를 처리하기 위해 동의를 받아야 할 때는 그 법정대리인의
              동의가 필요합니다. 만 14세 미만 어린이의 가입을 받지 않으려면 만
              14세 이상 동의를 사용하는 것을 권장하여, 설정에 따라 이용약관 또는
              개인정보 처리방침 내용에 수정이 필요할 수 있습니다.
            </content>
          </div>
          <div>
            <p className={css.title}>서비스 이용 약관</p>
            <content className={css.content}>
              이 약관은 이거사조 회사가 운영하는 HALLO에서 제공하는 인터넷 관련
              서비스(이하'서비스'라한다)를 이용함에 있어 사이버몰과 이용자의
              권리 의무 및 책임사항을 규정함을 목적으로 합니다.{' '}
            </content>
          </div>
          <div>
            <p className={css.title}> 개인정보 이용 약관</p>
            <content className={css.content}>
              정보통신법 규정에 따라 이거사조에 회원가입을 신청하시는 분께
              수집하는 개인 정보의 항목, 개인정보의 수집 및 이용 목적,
              개인정보의 보유 및 이용기간을 안내드리오니 자세히 읽은 후에 동의해
              주시기 바랍니다. 수집하는 개인정보 1. 이메일 2. 닉네임 3. 패스워드{' '}
            </content>
          </div>
          <button onClick={clickkBtn} className={css.agreeButton}>
            모두 동의합니다
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
