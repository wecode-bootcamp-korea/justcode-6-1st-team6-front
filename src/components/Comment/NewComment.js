import React, { useState } from 'react';
import styles from './NewComment.module.scss';
import CommentModal from '../ModalComment/CommentModal';

function NewComment({
  id,
  profile,
  user,
  created_at,
  comment,
  deleteComment,
  modifyComment,
}) {
  const [commentModal, setCommentModal] = useState(false);
  const [modify, setModify] = useState(false);
  const [text, setText] = useState('');

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
          //사용자 정보 비교 후 노출되게 하기
          <div className={styles.commentChangeBtn}>
            <button
              className={styles.commentModify}
              onClick={() => {
                if (modify) {
                  setModify(false);
                  setText('');
                  modifyComment(id, { comment: text, user: user });
                  return;
                }
                setText(comment);
                setModify(true);
              }}
            >
              {modify ? '저장' : '수정'}
            </button>
            <button
              className={styles.commentDelete}
              onClick={() => {
                setCommentModal(!commentModal);
              }}
            >
              삭제
            </button>
          </div>
        </div>
        {modify ? (
          <textarea
            type="text"
            value={text || ''}
            className={styles.commentInput}
            placeholder="댓글을 입력하세요."
            onChange={event => {
              setText(event.target.value);
            }}
          />
        ) : (
          <div className={styles.commentContent}>{comment}</div>
        )}
      </div>
      {commentModal === true ? (
        <CommentModal
          id={id}
          user={user}
          commentModal={commentModal}
          setCommentModal={setCommentModal}
          deleteComment={deleteComment}
        />
      ) : null}
    </>
  );
}

export default NewComment;
