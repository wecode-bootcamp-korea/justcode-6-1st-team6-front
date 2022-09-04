import SkillFiltered from '../SkillFiltered/SkillFiltered';
import styles from './SkillListFiltered.module.scss';

function SkillListFiltered(props) {
  const skillListFiltered = props.data;
  const handleSkillListFilteredRemove = props.handleSkillListFilteredRemove;
  const handleSkillListFilteredRemoveAll =
    props.handleSkillListFilteredRemoveAll;

  return (
    <div className={styles.skillListFiltered}>
      {skillListFiltered &&
        skillListFiltered.map(skill => {
          return (
            <SkillFiltered
              key={skill.id}
              data={skill}
              handleSkillListFilteredRemove={handleSkillListFilteredRemove}
            />
          );
        })}
      {skillListFiltered.length !== 0 && (
        <span onClick={handleSkillListFilteredRemoveAll}>필터 초기화</span>
      )}
    </div>
  );
}

export default SkillListFiltered;
