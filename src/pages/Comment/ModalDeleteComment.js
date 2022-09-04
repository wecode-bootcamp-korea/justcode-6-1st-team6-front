import React from 'react';
import styles from './ModalDeleteComment.module.scss';

function ModalDeleteComment({ id, modal, setModal, deleteComment }) {
  return (
    <>
      <div className={styles.modalWrap}>
        <div className={styles.modalDeleteComment}>
          <p>댓글을 삭제 하시겠어요?</p>
          <div className={styles.modalButton}>
            <button
              className={styles.cancelButton}
              onClick={() => {
                setModal(!modal);
              }}
            >
              아니요
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => {
                deleteComment(id);
              }}
            >
              네, 삭제할래요
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDeleteComment;
