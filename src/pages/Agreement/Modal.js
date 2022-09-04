import React from 'react';

import css from './Modal.module.scss';

function Modal({ setModal }) {
  const modalClose = () => {
    setModal(false);
  };
  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <button className={css.modalButton} onClick={modalClose}>
          X
        </button>
        <p className={css.law}>
          개인정보 보호법 제 22조, 제 39조의 3항에 의해 만 14세 미만 아동의 개인
          정보를 처리하기 위해 동의를 받아야 할 때는 그 법정대리인의 동의가
          필요합니다.
        </p>
      </div>
    </div>
  );
}

export default Modal;
