import styles from './SkillListCategoryItem.module.scss';

function SkillListCategoryItem(props) {
  return (
    <div
      className={styles.skillListCategoryItem}
      style={props.isActivated ? { opacity: '100%' } : { opacity: '40%' }}
      onClick={() => props.handleSkillCategoryOption(props.name)}
    >
      {props.name}
    </div>
  );
}

export default SkillListCategoryItem;
