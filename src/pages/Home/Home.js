import React from 'react';
import Banner from '../../components/Banner/Banner';
import BannerContainer from '../../components/Banner/BannerContainer';
import UserSummary from '../../components/UserSummary/UserSummary';

import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <UserSummary
        nickname="hello"
        profileImage="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG"
      />
    </div>
  );
}

export default Home;
