import Switch from 'react-js-switch';
import PostCardListCategoryItem from './PostCardListCategoryItem';

import Stack from '../../assets/svg/stack.svg';
import Folder from '../../assets/svg/folder.svg';
import Pencil from '../../assets/svg/pencil.svg';
import styles from './PostCardListCategory.module.scss';

function PostCardListCategory(props) {
  return (
    <div className={styles.postCardListCategory}>
      <div className={styles.postCardListCategoryOptionArea1}>
        <PostCardListCategoryItem
          image={Stack}
          category="전체"
          isActivated={props.categoryOption === '전체'}
          handleCategoryOption={props.handleCategoryOption}
        />
        <PostCardListCategoryItem
          image={Folder}
          category="프로젝트"
          isActivated={props.categoryOption === '프로젝트'}
          handleCategoryOption={props.handleCategoryOption}
        />
        <PostCardListCategoryItem
          image={Pencil}
          category="스터디"
          isActivated={props.categoryOption === '스터디'}
          handleCategoryOption={props.handleCategoryOption}
        />
      </div>
      <div className={styles.postCardListCategoryOptionArea2}>
        <span>모집 중만 보기</span>
        <Switch
          value={props.switchOption}
          onChange={props.handleSwitchOption}
          size={50}
          color="#ffffff"
          backgroundColor={{ on: '#ffcd00', off: '#c1cbd8' }}
          borderColor={{ on: '#ffcd00', off: '#c1cbd8' }}
        />
      </div>
    </div>
  );
}

export default PostCardListCategory;
