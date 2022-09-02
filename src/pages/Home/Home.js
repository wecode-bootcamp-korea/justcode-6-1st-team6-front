import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import BannerContainer from '../../components/Banner/BannerContainer';
import PostCard from '../../components/PostCard/PostCard';

import styles from './Home.module.scss';

function Home() {
  const [postCard, setPostCard] = useState({});

  useEffect(() => {
    fetch('/mock/main/postCard.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => setPostCard(json));
  }, [postCard]);

  return (
    <div className={styles.container}>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <PostCard data={postCard} />
    </div>
  );
}

export default Home;
