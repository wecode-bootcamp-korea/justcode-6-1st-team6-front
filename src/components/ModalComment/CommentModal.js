import React from 'react';
import styles from './CommentModal.module.scss';
import ModalDeleteComment from './ModalDeleteComment';

function CommentModal({
  id,
  user,
  commentModal,
  setCommentModal,
  deleteComment,
}) {
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
      <div className={styles.commentModal}>
        <div className={styles.modalWrap}>
          <ModalDeleteComment
            id={id}
            user={user}
            commentModal={commentModal}
            setCommentModal={setCommentModal}
            deleteComment={deleteComment}
          />
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
