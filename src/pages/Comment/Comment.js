import React, { useState } from 'react';
import NewComment from './NewComment';
import styles from './Comment.module.scss';

function Comment() {
  const [comment, setComment] = useState('');
  const [id, setId] = useState(1);
  const [commentArray, setCommentArray] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  const addComment = () => {
    setId(id + 1);

    const newComment = {
      id: id,
      profile: <img src="/images/user.png" width={'100%'} />,
      user: 'Kevin Ahn',
      date: '2022-08-31 4:44:44',
      content: comment,
    };
    setCommentArray([...commentArray, newComment]);
    setComment('');
  };

  const count = () => {
    setCommentCount(commentCount + 1);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.commentForm}>
        <p className={styles.commentCount}>
          {commentCount}개의 댓글이 있습니다.
        </p>
        <textarea
          type="text"
          value={comment}
          className={styles.commentInput}
          placeholder="댓글을 입력하세요."
          onChange={event => {
            setComment(event.target.value);
          }}
        />
        <br />
        <div className={styles.commentButton}>
          <button
            type="submit"
            onClick={() => {
              addComment();
              count();
            }}
          >
            댓글 등록
          </button>
        </div>
      </div>
      <div className={styles.commentList}>
        {commentArray.map(comment => {
          return (
            <li key={comment.id}>
              <NewComment
                id={comment.id}
                profile={comment.profile}
                user={comment.user}
                date={comment.date}
                content={comment.content}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Comment;
