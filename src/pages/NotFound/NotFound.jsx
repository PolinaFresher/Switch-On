import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import image from "assets/images/IMG_8313.jpeg";
import { ROUTES } from "shared/consts";
import { observer } from "mobx-react-lite";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound} id={"Error"} >
      <div className={styles.err}>
        <div className={styles.container}>
          <div className={styles.left}>
            <img src={image} alt="pic" className={styles.img} />
            <div className={styles.buttons}>
              <button
                className={styles.buttonHome}
                onClick={() => {
                  navigate(ROUTES.HOME);
                }}
              >
                Go Home
              </button>

              <button
                className={styles.buttonBack}
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
            </div>
          </div>

          <div className={styles.right}>
            <h1 className={styles.error}>404</h1>
            <h2 className={styles.oops}> Ooops! You're lost</h2>
            <p className={styles.text}>
              The page you are looking for does not exist. How you got here is a
              mystery! But you can click the buttons below to go back to the
              home or previous page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(NotFound);
