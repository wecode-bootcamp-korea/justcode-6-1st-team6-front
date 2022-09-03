import styles from './BannerContainer.module.scss';

function BannerContainer(props) {
  return <div className={styles.bannerContainer}>{props.children}</div>;
}

export default BannerContainer;
