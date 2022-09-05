import React from 'react';
import css from './Modal.module.scss';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';

function Modal({ title, setModal, children }) {
  const modalClose = () => {
    setModal(false);
  };
  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <button className={css.modalButton} onClick={modalClose}>
          X
        </button>
        {/* <ModalHeader value={title}>
          {title.map((idx) => {
            key={idx} 
          }}
        </ModalHeader> */}
        {/* <ModalContent className={css.law}>{children}</ModalContent> */}
        <content>{children}</content>
      </div>
    </div>
  );
}
export default Modal;
