import React from 'react';
import styles from './Modal.module.scss';
import ModalDeleteComment from './ModalDeleteComment';

function Modal({ id, modal, setModal, deleteComment }) {
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.6)',
        }}
      />
      <div className={styles.modal}>
        <div className={styles.modalWrap}>
          <ModalDeleteComment
            id={id}
            modal={modal}
            setModal={setModal}
            deleteComment={deleteComment}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
