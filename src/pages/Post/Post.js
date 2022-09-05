import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Post.module.scss';
import Comment from '../Comment/Comment';
// import Modal from './Modal';

function Post() {
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('/mock/post/post.json')
      .then(res => res.json())
      .then(data => {
        setPost(data.postData);
      });
  }, []);

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
              <img
                alt="뒤로가기"
                src="/images/arrow.png"
                width="30px"
                height="30px"
              />
            </button>
          </div>
          <div className={styles.postTitle}>
            <h1>{post.title}</h1>
          </div>
          <div className={styles.postUser}>
            <img className={styles.profileImage} src={post.profile_image} />
            <span className={styles.user}>{post.nickname}</span>
            <span className={styles.date}>{post.create_at}</span>
          </div>
          <div className={styles.postOperationButton}>
            <button className={styles.operationButton}>마감</button>
            <button className={styles.operationButton}>수정</button>
            <button
              className={styles.operationButton}
              // onClick={() => {
              //   console.log('삭제', 1);
              // }}
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
        <Comment />
      </div>
    </div>
  );
}

export default Post;
