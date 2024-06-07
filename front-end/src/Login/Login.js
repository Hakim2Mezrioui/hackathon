import { Fragment } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div className={styles.body}></div>
      <div className={styles.registerForm}>
        <div>
          <img className="mb-5" src="https://placehold.co/100x100/png" />
          <div className={`${styles.ask}`}>
            <h3>Don't have an account ?</h3>
            <Link to={"/register"}>register</Link>
          </div>
        </div>

        <form>
          <div className={styles["form-group"]}>
            <input />
            <label>Email</label>
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
      </div>
    </Fragment>
  );
};

export default Login;
