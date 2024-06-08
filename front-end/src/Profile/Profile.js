import { Fragment } from "react";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <Fragment>
      <div className={styles.back}></div>
      <div className={styles.infos}>
        <span>
            <img src="/images/profile.jpeg" />
        </span>
        <span>
          <h1>Mezrioui Hakim</h1>
          <h5>mezrioui.hakim@gmail.com</h5>

          <button>Edit</button>
          <button>delete your account</button>
        </span>
      </div>
    </Fragment>
  );
};

export default Profile;