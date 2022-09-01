import React from 'react';
import css from './Footer.module.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={css.footerContainer}>
      <footer>
        <div>
          <Link to="/" className={css.icon}>
            <span />
          </Link>
          <Link to="/" className={css.icon}>
            <span />
          </Link>
          <Link to="/" className={css.icon}>
            <span />
          </Link>
        </div>
        <div>
          <span className={css.mr20}>
            <Link to="/">이용약관</Link>
          </span>
          <span className={css.mr20}>
            <Link to="/">개인정보처리방침</Link>
          </span>
          <span>
            <Link to="/">고객센터</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
