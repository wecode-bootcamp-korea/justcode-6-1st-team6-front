import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Post.module.scss';
import Comment from '../Comment/Comment';

function Post() {
  const navigate = useNavigate();

  const [infoArray] = useState([
    { id: 0, title: '모집 구분', content: '스터디' },
    { id: 1, title: '진행 방식', content: '온라인' },
    { id: 2, title: '모집 인원', content: '인원 미정' },
    { id: 3, title: '시작 예정', content: '2022.10.29' },
    { id: 4, title: '연락 방법', content: 'justcode6@justcode.com' },
    { id: 5, title: '예상 기간', content: '1개월' },
    {
      id: 6,
      title: '사용 언어',
      imgSrc: [
        '/images/javascript.png',
        '/images/react.png',
        '/images/nodejs.png',
        '/images/express.png',
        '/images/mysql.png',
      ],
    },
  ]);

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
            <h1>
              온라인 위워크에서 JUSTCODE 동기들과 같이 프로젝트 하실 분 구해요 !
            </h1>
          </div>
          <div className={styles.postUser}>
            <img
              alt="프로필사진"
              src="/images/user.png"
              width="35px"
              height="35px"
            />
            <span className={styles.user}>저스트코드</span>
            <span className={styles.date}>2022.08.31</span>
          </div>
          <div className={styles.postOperationButton}>
            <button
              onClick={() => {
                console.log('마감', 1);
              }}
            >
              마감
            </button>
            <button
              onClick={() => {
                console.log('수정', 2);
              }}
            >
              수정
            </button>
            <button
              onClick={() => {
                console.log('삭제', 3);
              }}
            >
              삭제
            </button>
          </div>
          <div className={styles.info}>
            <ul>
              {infoArray.map(info => {
                switch (info.id) {
                  case 6: {
                    const list = info.imgSrc ?? [];
                    return (
                      <li key={info.id}>
                        <p className={styles.infoTitle}>{info.title}</p>
                        <div className={styles.infoIcon}>
                          {list.map(img => (
                            <img
                              key={img}
                              alt={img}
                              src={img}
                              width={'36px'}
                              height={'36px'}
                            />
                          ))}
                        </div>
                      </li>
                    );
                  }
                  default: {
                    return (
                      <li key={info.id}>
                        <p className={styles.infoTitle}>{info.title}</p>
                        <p className={styles.infoContent}>{info.content}</p>
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
        </section>
        <div className={styles.content}>
          <div className={styles.contentInfo}>
            <div className={styles.contentTitle}>
              <h2>프로젝트 소개</h2>
            </div>
            <div className={styles.contentIntro}>
              <p>
                안녕하세요. 온라인 위워크에서 JavaScript와 React 그리고 node.js,
                express, MySQL을 이용해서 프로젝트 하실 분 모집합니다 !
              </p>
              <p>
                구현해보고 싶은 사이트를 정해서 서로 역할을 나누어 클론 코딩을
                진행할 예정입니다.
              </p>
              <p>
                일주일에 한 번씩 위워크에서 모여 오프라인 미팅을 진행할
                예정입니다.
              </p>
              <p>프로젝트를 같이 해나가실 분은 상단의 이메일로 연락주세요 ~</p>
            </div>
          </div>
        </div>
        <Comment />
      </div>
    </div>
  );
}

export default Post;
