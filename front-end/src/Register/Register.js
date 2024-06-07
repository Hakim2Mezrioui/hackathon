import { Fragment } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Fragment>
      <div className={styles.body}></div>
      <div className={styles.registerForm}>
        <form>
          <div className={styles["form-group"]}>
            <input />
            <label>Email</label>
          </div>
          <div className={styles["form-group"]}>
            <input />
            <label>Full Name</label>
          </div>
          <div className={styles["form-group"]}>
            <input />
            <label>Date of birth</label>
          </div>
          <div className={styles["form-group"]}>
            <input />
            <label>Username</label>
          </div>
          <div className={styles["form-group"]}>
            <input />
            <label>Password</label>
          </div>
          <div className={styles["form-button"]}>
            <button className={`${styles.button} ${styles["button-success"]}`}>
              Sign up
            </button>
            <button className={`${styles.button} ${styles["button-cancel"]}`}>
              Cancel
            </button>
          </div>
        </form>

        <div>
          <img className="mb-5" src="https://placehold.co/100x100/png" />
          <div className={`${styles.ask}`}>
            <h3>Have an account ?</h3>
            <Link to={"/login"}>Log in</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
