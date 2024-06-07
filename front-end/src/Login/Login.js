import { Fragment, useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { useHttp } from "../useHttp/useHttp";

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { loading, sendRequest } = useHttp();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCancel = () => {
    Swal.fire({
      icon: "question",
      title: "Attention",
      text: "Are you sure ?",
      showCancelButton: true,
    }).then(async (response) => {
      if (response.isConfirmed) {
        navigate("/home");
      }
    });
  };

  const applayData = (response) => {
    const token = response.authorisation.token;
    if (!token) {
      return;
    }
    setCookie("token", token);
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      url: "http://127.0.0.1:8000/api/login",
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };
    sendRequest(request, applayData);
  };

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

        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <input name="email" onBlur={handleChange} />
            <label>Email</label>
          </div>
          <div className={styles["form-group"]}>
            <input name="password" onBlur={handleChange} type="password" />
            <label>Password</label>
          </div>
          <div className={styles["form-button"]}>
            <button className={`${styles.button} ${styles["button-success"]}`}>
              Login
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className={`${styles.button} ${styles["button-cancel"]}`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
