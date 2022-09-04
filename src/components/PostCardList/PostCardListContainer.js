import styles from './PostCardListContainer.module.scss';

function PostCardListContainer(props) {
  return <div className={styles.postCardListContainer}>{props.children}</div>;
}

export default PostCardListContainer;
