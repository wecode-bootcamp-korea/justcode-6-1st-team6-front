import styles from './UserSummary.module.scss';

function UserSummary(props) {
  const nickname = props.nickname;
  const profileImage = props.profileImage;

  return (
    <div className={styles.userSummary}>
      <img src={profileImage} alt="none" />
      <span>{nickname}</span>
    </div>
  );
}

export default UserSummary;
