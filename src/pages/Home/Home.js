import React from 'react';
import Banner from '../../components/Banner/Banner';
import BannerContainer from '../../components/Banner/BannerContainer';

import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <BannerContainer>
        <Banner />
      </BannerContainer>
    </div>
  );
}

export default Home;
