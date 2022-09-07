import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Post.module.scss';
import Comment from '../../components/Comment/Comment';
import Modal from '../../components/ModalPost/Modal';

import profile from '../../assets/images/user_icon16.png';
import arrow from '../../assets/svg/arrow.svg';

const LOGIN_TOKEN = 'login-token';

function Post() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [postModal, setPostModal] = useState(false);

  //게시글 GET
  useEffect(() => {
    fetch(`http://localhost:8000/posts/${postId}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setPost(data.post[0]);
      });
  }, [postId]);

  if (!post) return null;

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <section className={styles.postHeader}>
          <div className={styles.postBack}>
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              <img alt="뒤로가기" src={arrow} width="30px" height="30px" />
            </button>
          </div>
          <div className={styles.postTitle}>
            <h1>{post.title}</h1>
          </div>
          <div className={styles.postUser}>
            <img className={styles.profileImage} src={profile} />
            <span className={styles.user}>{post.nickname}</span>
            <span className={styles.date}>{post.create_at}</span>
          </div>
          <div className={styles.postOperationButton}>
            <button
              className={styles.operationButton}
              onClick={() => {
                navigate(`/newpost?postId=${postId}&mode=update`);
              }}
            >
              수정
            </button>
            <button
              className={styles.operationButton}
              onClick={() => setPostModal(true)}
            >
              삭제
            </button>
          </div>
          <div className={styles.info}>
            <ul>
              <li>
                <p className={styles.infoTitle}>모집 구분</p>
                <p className={styles.infoContent}>{post.classification}</p>
              </li>
              <li>
                <p className={styles.infoTitle}>진행 방식</p>
                <p className={styles.infoContent}>{post.onoffline}</p>
              </li>
              <li>
                <p className={styles.infoTitle}>모집 인원</p>
                <p className={styles.infoContent}>{post.volume}</p>
              </li>
              <li>
                <p className={styles.infoTitle}>시작 예정</p>
                <p className={styles.infoContent}>{post.start_date}</p>
              </li>
              <li>
                <p className={styles.infoTitle}>연락 방법</p>
                <div className={styles.infoContact}>
                  <p className={styles.infoContent}>{post.contact_content}</p>
                </div>
              </li>
              <li>
                <p className={styles.infoTitle}>예상 기간</p>
                <p className={styles.infoContent}>{post.progress_period}</p>
              </li>
              <li>
                <p className={styles.infoTitle}>사용 언어</p>
                <p className={styles.infoContent}>
                  <img src={post.stack} />
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div className={styles.content}>
          <div className={styles.contentInfo}>
            <div className={styles.contentTitle}>
              <h2>프로젝트 소개</h2>
            </div>
            <div className={styles.contentIntro}>
              <p>{post.contents}</p>
            </div>
          </div>
        </div>

        <Modal
          visible={postModal}
          text={'작성하신 글을 삭제하시겠어요?'}
          cancelText={'아니요'}
          confirmText={'네, 삭제할래요'}
          onClose={() => {
            setPostModal(false);
          }}
          onConfirm={
            // async
            () => {
              if (!postId) return;

              const token = localStorage.getItem(LOGIN_TOKEN);

              fetch(`http://localhost:8000/comment/${postId}`, {
                method: 'DELETE',
                headers: {
                  token: token,
                  'Content-type': 'application/json',
                },
              })
                .then(res => res.json())
                .then(
                  res => console.log(res)
                  // navigate(-1)
                );

              // const resp = await fetch(
              //   `http://localhost:8000/comment/${postId}`,
              //   {
              //     method: 'DELETE',
              //     headers: {
              //       token: localStorage.getItem('login-token'),
              //       'Content-type': 'application/json',
              //     },
              //   }
              // );
              // const data = await resp.json();
              // navigate(-1);
              setPostModal(false);
            }
          }
        />
        <Comment />
      </div>
    </div>
  );
}

export default Post;
