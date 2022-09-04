import styles from './SkillListContainer.module.scss';

function SkillListContainer(props) {
  return <div className={styles.skillListContainer}>{props.children}</div>;
}

export default SkillListContainer;
