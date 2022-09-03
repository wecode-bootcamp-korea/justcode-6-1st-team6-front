import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import css from './Header.module.scss';

function Header() {
  const [login, setlogin] = useState(true);
  const [dropNav, setNav] = useState(false);
  const [alert, setAlert] = useState(false);
  const navData = [
    { link: '/mylist', content: '내 작성글', login: true },
    { link: '/edit', content: '설정', login: true },
    { link: '/', content: '로그아웃', login: false },
  ];

  const navigate = useNavigate();
  const newPost = () => {
    login ? navigate('./newpost') : navigate('./login');
  };
  const navDrop = () => {
    setNav(dropNav => !dropNav);
  };
  const alertDrop = () => {
    setAlert(alert => !alert);
  };

  return (
    <div className={css.container}>
      <header
        onClick={() => {
          dropNav && setNav(false);
          alert && setAlert(false);
        }}
      >
        <div className={css.headerContainer}>
          <div className={css.logoArea}>
            <Link to="./">
              <img alt="logo" src={require('../../assets/images/logo2.png')} />
            </Link>
          </div>
          <div className={css.headerContentArea}>
            <div className={css.newPost} onClick={newPost}>
              새 글 쓰기
            </div>

            {login ? (
              <div className={css.dFlex}>
                <span className={css.alertBell} onClick={alertDrop} />
                <div className={alert ? css.dropAlert : css.hideNav}>
                  <p className={css.title}>
                    읽지 않은 알림(0){' '}
                    <span
                      onClick={() => {
                        setAlert(false);
                      }}
                    >
                      X
                    </span>
                  </p>
                </div>
                <div className={css.myProfile} onClick={navDrop}>
                  <span />
                </div>
                <ul className={dropNav ? css.dropNav : css.hideNav}>
                  {navData.map((nav, idx) => {
                    return (
                      <li key={idx}>
                        <Link
                          to={nav.link}
                          onClick={() => {
                            setlogin(nav.login);
                          }}
                        >
                          {nav.content}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div>
                <Link to="./login">로그인</Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
