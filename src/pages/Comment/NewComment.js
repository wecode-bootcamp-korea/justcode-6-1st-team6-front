import React, { useState } from 'react';
import styles from './NewComment.module.scss';
// import Modal from "./Modal";

function NewComment({ id, profile, user, date, content }) {
  const [modal, setModal] = useState(false);

  const Modify = () => {
    console.log('mod');
  };

  return (
    <>
      <div className={styles.newComment}>
        <div className={styles.commentHeader}>
          <div className={styles.commentInfoWrapper}>
            <span className={styles.commentProfile}>{profile}</span>
            <div className={styles.commentInfo}>
              <span className={styles.commentUser}>{user}</span>
              <span className={styles.commentDate}>{date}</span>
            </div>
          </div>
          <div className={styles.commentChangeBtn}>
            <button className={styles.commentModify} onClick={Modify}>
              수정
            </button>
            <button
              className={styles.commentDelete}
              onClick={() => {
                setModal(!modal);
              }}
            >
              삭제
            </button>
          </div>
        </div>
        <div className={styles.commentContent}>{content}</div>
      </div>
      {modal == true ? <Modal modal={modal} /> : null}
    </>
  );
}

function Modal(props) {
  return (
    <div className={styles.modal}>
      <p>댓글을 삭제 하시겠어요?</p>
      <div className={styles.modalButton}>
        <button
          className={styles.cancelButton}
          onClick={() => {
            console.log('모달창 끄기');
            // setModal(null);
          }}
        >
          아니요
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => {
            console.log('댓글 삭제');
          }}
        >
          네, 삭제할래요
        </button>
      </div>
    </div>
  );
}

export default NewComment;
