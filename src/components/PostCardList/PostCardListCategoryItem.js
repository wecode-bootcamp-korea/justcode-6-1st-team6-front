import styles from './PostCardListCategoryItem.module.scss';

function PostCardListCategoryItem(props) {
  return (
    <div
      className={styles.postCardListCategoryItem}
      style={props.isActivated ? { opacity: '100%' } : { opacity: '40%' }}
      onClick={() => props.handleCategoryOption(props.category)}
    >
      <img src={props.image} alt="none" />
      <span>{props.category}</span>
    </div>
  );
}

export default PostCardListCategoryItem;
