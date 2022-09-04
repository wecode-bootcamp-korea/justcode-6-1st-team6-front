import styles from './SkillListCategory.module.scss';
import SkillListCategoryItem from './SkillListCategoryItem';

const SKILLS_CATEGORY_OPTION_POPULAR = '인기';
const SKILLS_CATEGORY_OPTION_FRONTEND = '프론트엔드';
const SKILLS_CATEGORY_OPTION_BACKEND = '백엔드';
const SKILLS_CATEGORY_OPTION_MOBILE = '모바일';
const SKILLS_CATEGORY_OPTION_ETC = '기타';
const SKILLS_CATEGORY_OPTION_ALL = '모두보기';

function SkillListCategory(props) {
  return (
    <div className={styles.skillListCategory}>
      <SkillListCategoryItem
        name={SKILLS_CATEGORY_OPTION_POPULAR}
        isActivated={
          props.skillsCategoryOption === SKILLS_CATEGORY_OPTION_POPULAR
        }
        handleSkillCategoryOption={props.handleSkillCategoryOption}
      />
      <SkillListCategoryItem
        name={SKILLS_CATEGORY_OPTION_FRONTEND}
        isActivated={
          props.skillsCategoryOption === SKILLS_CATEGORY_OPTION_FRONTEND
        }
        handleSkillCategoryOption={props.handleSkillCategoryOption}
      />
      <SkillListCategoryItem
        name={SKILLS_CATEGORY_OPTION_BACKEND}
        isActivated={
          props.skillsCategoryOption === SKILLS_CATEGORY_OPTION_BACKEND
        }
        handleSkillCategoryOption={props.handleSkillCategoryOption}
      />
      <SkillListCategoryItem
        name={SKILLS_CATEGORY_OPTION_MOBILE}
        isActivated={
          props.skillsCategoryOption === SKILLS_CATEGORY_OPTION_MOBILE
        }
        handleSkillCategoryOption={props.handleSkillCategoryOption}
      />
      <SkillListCategoryItem
        name={SKILLS_CATEGORY_OPTION_ETC}
        isActivated={props.skillsCategoryOption === SKILLS_CATEGORY_OPTION_ETC}
        handleSkillCategoryOption={props.handleSkillCategoryOption}
      />
      <SkillListCategoryItem
        name={SKILLS_CATEGORY_OPTION_ALL}
        isActivated={props.skillsCategoryOption === SKILLS_CATEGORY_OPTION_ALL}
        handleSkillCategoryOption={props.handleSkillCategoryOption}
      />
    </div>
  );
}

export default SkillListCategory;
