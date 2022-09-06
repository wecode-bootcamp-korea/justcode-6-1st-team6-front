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
      profile: '/user_icon16.png',
      user: 'Kevin Ahn',
      created_at: '2023-05-28 11:27:33',
      comment,
    };
    setCommentArray([...commentArray, newComment]);
    setComment('');
  };

  const deleteComment = id => {
    setCommentArray(commentArray.filter(item => item.comment_id !== id));
  };

  const modifyComment = (id, body) => {
    const originComment = commentArray.find(item => item.comment_id === id);
    if (!originComment) return;

    const updateComment = {
      ...originComment,
      comment: body.comment,
    };

    //서버 연결 시에 제거
    const updateCommentList = commentArray.map(item => {
      if (item.comment_id === id) {
        return updateComment;
      }
      return item;
    });

    setCommentArray(updateCommentList);
  };

  useEffect(() => {
    fetch('/mock/post/comment.json')
      .then(res => res.json())
      .then(data => {
        setCommentArray(data.commentData);
        // console.log(data.commentData);
      });
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
            <li key={comment.comment_id}>
              <NewComment
                id={comment.comment_id}
                profile={comment.profile}
                user={comment.user}
                created_at={comment.created_at}
                comment={comment.comment}
                deleteComment={deleteComment}
                modifyComment={modifyComment}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Comment;
