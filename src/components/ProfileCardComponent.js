import styles from './ProfileCardComponent.module.css';

const ProfileCardComponent = ({ profiles }) => {
  return (
    <div className={styles.container}>
      {profiles.map((profile, index) => (
        <div key={index} className={styles.card}>
          <img src={profile.image} alt={profile.title} className={styles.image} />
          <h2 className={styles.title}>{profile.title}</h2>
          <p className={styles.body}>{profile.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileCardComponent;
