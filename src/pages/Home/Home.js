import React from 'react';

import HomeContent from '../../components/HomeContent/HomeContent';
import css from './Home.module.scss';

function Home() {
  return (
    <div className={css.container}>
      <HomeContent />
    </div>
  );
}

export default Home;
