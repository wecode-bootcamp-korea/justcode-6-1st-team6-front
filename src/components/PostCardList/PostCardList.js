import PostCard from '../PostCard/PostCard';

import styles from './PostCardList.module.scss';

const CATEGORY_OPTION_ALL = '전체';
const CATEGORY_OPTION_PROJECT = '프로젝트';
const CATEGORY_OPTION_STUDY = '스터디';

function PostCardList(props) {
  const postCardList = props.data;
  const categoryOption = props.categoryOption;
  const switchOption = props.switchOption;

  return (
    <div className={styles.postCardList}>
      {postCardList &&
        postCardList.map(postCard => {
          let condition = getCondition(categoryOption);
          return switchOption
            ? postCard.is_closed === 'false' &&
                postCard.classification.includes(condition) && (
                  <PostCard key={postCard.post_id} data={postCard} />
                )
            : postCard.classification.includes(condition) && (
                <PostCard key={postCard.post_id} data={postCard} />
              );
        })}
    </div>
  );
}

function getCondition(option) {
  if (option === CATEGORY_OPTION_ALL) return '';
  if (option === CATEGORY_OPTION_PROJECT) return '프로젝트';
  if (option === CATEGORY_OPTION_STUDY) return '스터디';
}

export default PostCardList;
