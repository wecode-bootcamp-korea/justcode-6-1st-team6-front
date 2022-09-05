import React, { useCallback, useEffect, useState } from 'react';
import PostCardListContainer from '../../components/PostCardList/PostCardListContainer';
import styles from './MyList.module.scss';
import Book from '../../assets/svg/book.svg';
import PostCardList from '../../components/PostCardList/PostCardList';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { BASE_URL } from '../../config';

const LOGIN_TOKEN = 'login-token';

function MyList() {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [myPostCardList, setMyPostCardList] = useState([]);

  const getMyPostCardList = useCallback(
    async token => {
      setIsLoading(true);
      await fetch(
        // `/mock/main/postCardList${page}.json`, {
        `${BASE_URL}/posts?page=${page}&limit=6`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: token,
          },
        }
      )
        .then(res => res.json())
        .then(json => setMyPostCardList(prev => [...prev, ...json.posts]));
      setIsLoading(false);
    },
    [page]
  );

  useEffect(() => {
    const token = localStorage.getItem(LOGIN_TOKEN);

    if (token) {
      getMyPostCardList(token);
    } else {
      alert('로그인 후 이용해주세요.');
      navigate('/');
    }
  }, [getMyPostCardList, navigate]);

  useEffect(() => {
    if (!isLoading && inView) {
      setPage(prev => prev + 1);
    }
  }, [isLoading, inView, page]);

  return (
    <div className={styles.container}>
      <PostCardListContainer>
        <div className={styles.postCardListTitle}>
          <img src={Book} alt="none" />
          <span>작성 목록</span>
        </div>
        <PostCardList
          data={myPostCardList}
          categoryOption="전체"
          switchOption={false}
        />
        <div ref={ref} />
      </PostCardListContainer>
    </div>
  );
}

export default MyList;
