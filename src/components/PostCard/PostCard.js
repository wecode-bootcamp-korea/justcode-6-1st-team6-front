import { useNavigate } from 'react-router-dom';
import styles from './PostCard.module.scss';
import speechBubble from '../../assets/svg/speech-bubble.svg';

import UserSummary from '../UserSummary/UserSummary';

function PostCard(props) {
  const navigate = useNavigate();
  const post = postDataMapper(props.data);

  return (
    <div
      className={styles.postCardContainer}
      onClick={() => navigate(`/post/${post.id}`)}
    >
      <div className={styles.contents}>
        <div className={styles.startDate}>시작 예정일 | {post.startAt}</div>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.hashTag}>
          {post.category && <span>{`#${post.category}`}</span>}
          {post.type && <span>{`#${post.type}`}</span>}
          {post.numberOfPeople && <span>{`#${post.numberOfPeople}`}</span>}
          {post.estimatedDuration && (
            <span>{`#${post.estimatedDuration}`}</span>
          )}
        </div>
        <div className={styles.skills}>
          {post.requiredSkills &&
            post.requiredSkills.map(skill => {
              return (
                <img key={skill.stackId} src={skill.stackImage} alt="none" />
              );
            })}
        </div>
        <div className={styles.etc}>
          <UserSummary
            nickname={post.userName}
            profileImage={post.userProfileImage}
          />
          <div className={styles.info}>
            <img src={speechBubble} alt="none" />
            <span>{post.numberOfComments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function postDataMapper(data) {
  const post = {};

  post.id = data.post_id;
  post.userName = data.nickname;
  post.userProfileImage = data.profile_image;
  post.startAt = data.start_date;
  post.estimatedDuration = data.progress_period;
  post.title = data.title;
  post.category = data.classification;
  post.type = data.onoffline;
  post.requiredSkills =
    data.stack &&
    data.stack.map(skill => {
      return { stackId: skill.stack_id, stackImage: skill.stack_image };
    });
  post.numberOfPeople = data.volume;
  post.numberOfComments = data.comment_cnt;

  return post;
}

export default PostCard;
