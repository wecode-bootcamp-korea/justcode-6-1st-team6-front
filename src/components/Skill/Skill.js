import styles from './Skill.module.scss';

function Skill(props) {
  const skill = props.data;
  const isActivated = props.isActivated;
  const handleSkillListFiltered = props.handleSkillListFiltered;

  return (
    <div
      className={styles.skill}
      style={isActivated ? { opacity: '100%' } : { opacity: '40%' }}
      onClick={() =>
        handleSkillListFiltered({ id: skill.id, name: skill.name })
      }
    >
      <img src={skill.image} alt="none" />
      <span>{skill.name}</span>
    </div>
  );
}

export default Skill;
