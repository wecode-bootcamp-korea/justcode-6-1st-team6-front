import React, { useEffect, useState } from 'react';
import NewComment from './NewComment';
import styles from './Comment.module.scss';

function Comment() {
  const [comment, setComment] = useState('');
  const [id, setId] = useState(1);
  const [commentArray, setCommentArray] = useState([]);

  const addComment = () => {
    setId(id + 1);

    const newComment = {
      comment_id: id,
      profile: '/images/user.png',
      user: 'Kevin Ahn',
      created_at: '2023-05-28 11:27:33',
      comment: comment,
    };
    setCommentArray([...commentArray, newComment]);
    setComment('');
  };

  const deleteComment = commentId => {
    setCommentArray(commentArray.filter(comment => comment.id !== commentId));
  };

  useEffect(() => {
    fetch('/data/comment.json')
      .then(res => res.json())
      .then(data =>
        // console.log(data)
        setCommentArray(data.commentData)
      );
  }, []);

  return (
    <div className={styles.comment}>
      <div className={styles.commentForm}>
        <p className={styles.commentCount}>
          {commentArray.length}개의 댓글이 있습니다.
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
          <button type="submit" onClick={addComment}>
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
                created_at={comment.created_at}
                comment={comment.comment}
                deleteComment={deleteComment}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Comment;
