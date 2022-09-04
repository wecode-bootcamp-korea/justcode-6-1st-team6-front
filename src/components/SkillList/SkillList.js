import styles from './SkillList.module.scss';

import Skill from '../Skill/Skill';

function SkillList(props) {
  const skillList = props.data;
  const skillListFiltered = props.skillListFiltered;
  const handleSkillListFiltered = props.handleSkillListFiltered;

  return (
    <div className={styles.skillList}>
      {skillList &&
        skillList.map(skill => {
          return (
            <Skill
              key={skill.id}
              data={skill}
              isActivated={
                skillListFiltered.length === 0 ||
                isSkillInSkillListFiltered(skillListFiltered, skill)
              }
              skillListFiltered={skillListFiltered}
              handleSkillListFiltered={handleSkillListFiltered}
            />
          );
        })}
    </div>
  );
}

function isSkillInSkillListFiltered(skillListFiltered, skill) {
  let isContained;
  skillListFiltered.forEach(el => {
    if (el.id === skill.id) {
      isContained = true;
    }
  });
  return isContained;
}

export default SkillList;
