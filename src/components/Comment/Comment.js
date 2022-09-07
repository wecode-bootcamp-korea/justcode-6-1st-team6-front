import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewComment from './NewComment';
import styles from './Comment.module.scss';

import profile from '../../assets/images/user_icon16.png';

const LOGIN_TOKEN = 'login-token';

function Comment() {
  const { postId } = useParams();
  const [comment, setComment] = useState('');
  const [id, setId] = useState(1);
  const [commentArray, setCommentArray] = useState([]);

  // 댓글 POST 부분
  const addComment = () => {
    const token = localStorage.getItem(LOGIN_TOKEN);

    if (!token) {
      alert('로그인 후 이용해주세요');
      return;
    }

    const body = {
      comment,
    };

    fetch(`http://localhost:8000/comment/${postId}`, {
      method: 'POST',
      headers: {
        token: token,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(res => {
        setCommentArray([...commentArray, res]);
      });
    setComment('');
  };

  // 댓글 DEL부분
  const deleteComment = id => {
    const token = localStorage.getItem(LOGIN_TOKEN);

    if (!token) {
      alert('로그인 후 이용해주세요');
      return;
    }

    console.log(id);
    console.log(token);
    fetch(`http://localhost:8000/comment/${id}`, {
      method: 'DELETE',
      headers: {
        token: token,
        'Content-type': 'application/json',
      },
    })
      .then(res => res.status)
      .then(data => {
        if (data !== 204) {
          alert('댓글 작성자가 아닙니다');
        }
      });
    // setCommentArray(commentArray.filter(item => item.id !== id));
  };

  // 댓글 PATCH 부분
  const modifyComment = (id, body) => {
    const token = localStorage.getItem(LOGIN_TOKEN);

    if (!token) {
      alert('로그인 후 이용해주세요');
      return;
    }

    // if () {
    //   alert('댓글 작성자가 아닙니다');
    //   return;
    // }

    fetch(`http://localhost:8000/comment/${id}`, {
      method: 'PATCH',
      headers: {
        token: token,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        comment: body.comment,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        // setCommentArray(res);
      });

    // const originComment = commentArray.find(item => item.id === id);
    // if (!originComment) return;

    // const updateComment = {
    //   ...originComment,
    //   comment: body.comment,
    // };

    //서버 연결 시에 제거
    // const updateCommentList = commentArray.map(item => {
    //   if (item.id === id) {
    //     return updateComment;
    //   }
    //   return item;
    // });

    // setCommentArray(updateCommentList);
  };

  //댓글 GET
  useEffect(() => {
    fetch(`http://localhost:8000/comment/${postId}`)
      .then(res => res.json())
      .then(data => {
        setCommentArray(data.comments);
      });
  });

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
                profile={profile}
                user={comment.nickname}
                created_at={comment.create_at}
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
