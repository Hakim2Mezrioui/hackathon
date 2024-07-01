import { Fragment, useState } from "react";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useHttp } from "../useHttp/useHttp";
import { useCookies } from "react-cookie";

import Swal from "sweetalert2";

const Register = () => {
  const [data, setData] = useState({ role_id: 1 });
  const { loading, sendRequest } = useHttp();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      url: "http://127.0.0.1:8000/api/register",
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };
    sendRequest(request, applayData);
  };

  const applayData = (response) => {
    const token = response.authorisation.token;
    if (!token) {
      return;
    }
    setCookie("token", token);
    navigate("/home");
    console.log(response);
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

  return (
    <Fragment>
      <div className={styles.body}></div>
      <div className={styles.registerForm}>
        <form id="form" onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <input name="email" onBlur={handleChange} required />
            <label>Email</label>
          </div>
          <div className={styles["form-group"]}>
            <input name="fullName" onBlur={handleChange} required />
            <label>Full Name</label>
          </div>
          <div className={styles["form-group"]}>
            <input type="date" name="dateOfBirth" onBlur={handleChange} required />
            {/* <label>Date of birth</label> */}
          </div>
          <div className={styles["form-group"]}>
            <input name="cin" onBlur={handleChange} required />
            <label>cin</label>
          </div>
          <div className={styles["form-group"]}>
            <input name="phone" onBlur={handleChange} required />
            <label>phone</label>
          </div>
          <div className={styles["form-group"]}>
            <input
              type="password"
              name="password"
              onBlur={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <div className={styles["form-button"]}>
            <button className={`${styles.button} ${styles["button-success"]}`}>
              Sign up
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
