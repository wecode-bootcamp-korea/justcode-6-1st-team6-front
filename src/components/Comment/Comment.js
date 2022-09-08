import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewComment from './NewComment';
import styles from './Comment.module.scss';

import profile from '../../assets/images/user_icon16.png';

const LOGIN_TOKEN = 'login-token';

function Comment() {
  const { postId } = useParams();
  const [userInfo, setUser] = useState();
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  //사용자 정보 GET
  useEffect(() => {
    const token = localStorage.getItem(LOGIN_TOKEN);

    fetch('http://localhost:8000/users', {
      method: 'GET',
      headers: {
        token: token,
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        setUser(res.user[0].nickname);
      });
  }, []);

  //댓글 GET
  const loader = () => {
    fetch(`http://localhost:8000/comment/${postId}`)
      .then(res => res.json())
      .then(data => {
        setCommentArray(data?.comments ?? []);
      });
  };

  useEffect(() => {
    loader();
  }, []);

  // 댓글 POST
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
        loader();
      });
    setComment('');
  };

  // 댓글 DELETE
  const deleteComment = (id, user) => {
    const token = localStorage.getItem(LOGIN_TOKEN);

    if (!token) {
      alert('로그인 후 이용해주세요');
      return;
    }

    if (userInfo !== user) {
      alert('작성자 정보와 다릅니다.');
      return;
    }

    fetch(`http://localhost:8000/comment/${id}`, {
      method: 'DELETE',
      headers: {
        token: token,
        'Content-type': 'application/json',
      },
    })
      .then(res => res.status)
      .then(data => {
        loader();
      });
  };

  // 댓글 PATCH
  const modifyComment = (id, body) => {
    const token = localStorage.getItem(LOGIN_TOKEN);

    if (!token) {
      alert('로그인 후 이용해주세요');
      return;
    }

    if (userInfo !== body.user) {
      alert('작성자 정보와 다릅니다.');
      return;
    }

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
        loader();
      });
  };

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
