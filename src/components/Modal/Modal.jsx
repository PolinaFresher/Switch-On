import { useState, React, useEffect } from "react";
import { Formik, Field } from "formik";
import { UserModel,LoginModal } from "models";
import { observer } from 'mobx-react-lite'

import styles from "./styles.module.css";

import close from "assets/icons/dark/close.svg";

function Modal () {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  }, []);

  const [state, setState] = useState(false);

  return (
    <div className={LoginModal.open ? styles.modalOverlay : null}>
      <div className={styles.form}>
        <div
          className={LoginModal.open ? styles.btnClose : styles.hide}
          onClick={() => LoginModal.updateState()}
        >
          <img src={close} alt="close" className={styles.btnClose} />
        </div>

        <div className={state === false ? styles.forms : styles.forms2}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (values.email.length < 4) {
                errors.email = "Length should be more then 4";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length > 20) {
                errors.password = "Password lenght should be less than 20";
              } else if (
                !/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(
                  values.password
                )
              ) {
                errors.password = "Invalid password";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                UserModel.signIn(values.email,values.password)
                LoginModal.updateState();
                if(!UserModel.isLoggedIn()){
                } else {
                  setSubmitting(false);
                }
              }, 400);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form
                className={styles.signIn}
                onClick={() => setState(false)}
                onSubmit={handleSubmit}
              >
                <div className={state === false ? null : styles.hide}>
                  <h3 className={styles.text}> Sign in to the website </h3>
                  <div className={styles.email}>
                    <Field
                      className={styles.input}
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      onChange={handleChange}
                      value={values.email}
                    />

                    <div className={styles.error}>
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>

                  <div className={styles.password}>
                    <Field
                      className={styles.input}
                      type="password"
                      name="password"
                      required
                      placeholder="Password"
                      onChange={handleChange}
                      value={values.password}
                    />
                    <div className={styles.error}>
                      {errors.password && touched.password && errors.password}{" "}
                    </div>
                  </div>
                </div>

                <button
                  className={state === false ? styles.button : styles.hide}
                  type="submit"
                >
                  Sign In
                </button>
                <div className={state === false ? styles.hide : styles.show}>
                  <span className={styles.textOption}>Already a user? </span>
                  <p className={styles.option}>Welcome back!</p>
                </div>
              </form>
            )}
          </Formik>
          <Formik
            initialValues={{
              email: "",
              userName: "",
              password: "",
              confirmPassword: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password !== values.confirmPassword) {
                errors.password = "Passwords should match";
                errors.confirmPassword = "Passwords should match";
              } else if (
                !/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(
                  values.password
                )
              ) {
                errors.password =
                  "Password should contain at least one number, special character, latin letter in lowercase and  upper case, 6 characters.";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                UserModel.signUp(values.email,values.password,values.password,"logo")
                if(!UserModel.isLoggedIn()){
                } else {
                  setSubmitting(false);
                  LoginModal.updateState();
                }
              }, 400);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form
                className={styles.signUp}
                onClick={() => setState(true)}
                onSubmit={handleSubmit}
              >
                <div className={state === false ? styles.hide : null}>
                  <h3 className={styles.text}> Create your account </h3>
                  <div className={styles.email_input}>
                    <Field
                      className={styles.input}
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    <div className={styles.error}>
                      {errors.email && touched.email && errors.email}{" "}
                    </div>
                  </div>
                  <div className={styles.username}>
                    <Field
                      className={styles.input}
                      type="text"
                      name="username"
                      required
                      placeholder="Username"
                      onChange={handleChange}
                      value={values.username}
                    />
                    <div className={styles.error}>
                      {" "}
                      {errors.username &&
                        touched.username &&
                        errors.username}{" "}
                    </div>
                  </div>
                  <div className={styles.password_input}>
                    <Field
                      className={styles.input}
                      type="password"
                      name="password"
                      required
                      placeholder="Password"
                      onChange={handleChange}
                      value={values.password}
                    />
                    <div className={styles.error}>
                      {" "}
                      {errors.password &&
                        touched.password &&
                        errors.password}{" "}
                    </div>
                  </div>
                  <div className={styles.password_input}>
                    <Field
                      className={styles.input}
                      type="password"
                      name="confirmPassword"
                      required
                      placeholder="Confirm password"
                      onChange={handleChange}
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </div>
                </div>

                <button
                  className={state === false ? styles.hide : styles.button}
                  type="submit"
                >
                  Sign Up
                </button>
                <div className={state === true ? styles.hide : null}>
                  <span className={styles.textOption}>
                    Hey! Don't have an account?
                  </span>
                  <p className={styles.option}> Create one! </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default observer(Modal)
