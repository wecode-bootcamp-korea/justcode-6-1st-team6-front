import React, { useState } from 'react';
import styles from './NewComment.module.scss';
import CommentModal from './CommentModal';
import commentStyles from './Comment.module.scss';

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
  const [isModify, setModify] = useState(false);
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
          <div className={styles.commentChangeBtn}>
            <button
              className={styles.commentModify}
              onClick={() => {
                if (isModify) {
                  // console.log('a');
                  setModify(false);
                  setText('');
                  modifyComment(id, { comment: text });
                  // console.log('b');
                  return;
                }
                // console.log('c');
                setText(comment);
                setModify(true);
                // console.log('d');
              }}
            >
              {isModify ? '저장' : '수정'}
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
        {isModify ? (
          <textarea
            type="text"
            value={text}
            className={commentStyles.commentInput}
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
          commentModal={commentModal}
          setCommentModal={setCommentModal}
          deleteComment={deleteComment}
        />
      ) : null}
    </>
  );
}

export default NewComment;
