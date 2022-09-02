import React, { useState } from 'react';
import styles from './NewComment.module.scss';
import Modal from './Modal';

function NewComment({ id, profile, user, created_at, comment, deleteComment }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={styles.newComment}>
        <div className={styles.commentHeader}>
          <div className={styles.commentInfoWrapper}>
            <span className={styles.commentProfile}>
              <img src={profile} width={'100%'} />
            </span>
            <div className={styles.commentInfo}>
              <span className={styles.commentUser}>{user}</span>
              <span className={styles.commentDate}>{created_at}</span>
            </div>
          </div>
          <div className={styles.commentChangeBtn}>
            <button className={styles.commentModify}>수정</button>
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
        <div className={styles.commentContent}>{comment}</div>
      </div>
      {modal == true ? (
        <Modal
          id={id}
          modal={modal}
          setModal={setModal}
          deleteComment={deleteComment}
        />
      ) : null}
    </>
  );
}

export default NewComment;
