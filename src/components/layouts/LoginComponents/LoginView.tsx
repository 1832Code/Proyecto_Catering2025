import React from "react";
import styles from "./LoginView.module.css";
import img from "../../../assets/images/login image.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
type LoginViewProps = {
  onClose: () => void;
};

export const LoginView = ({ onClose }: LoginViewProps) => {
  return (
    <div className={styles.MainAreaLogin}>
      <div className={styles.ModalLogin}>
        <button className={styles.CloseBtn} onClick={onClose}>
          X
        </button>
        <div className={styles.ContainerArea}>
          <div className={styles.ImageArea}>
            <img className={styles.ImageLogin} src={img.src}></img>
          </div>
          <div className={styles.LoginArea}>
            <h2>Iniciar Sesión</h2>
            <form>
              <input
                className={styles.UserField}
                type="text"
                placeholder="Usuario"
              />
              <input
                className={styles.PasswordField}
                type="password"
                placeholder="Contraseña"
              />
              <div className={styles.ButtonsArea}>
                <div className={styles.LoginButtonArea}>
                  <input
                    className={styles.LoginButton}
                    type="submit"
                    value="Iniciar Sesión"
                  />
                </div>
                <div className={styles.Divider}>
                  <span>o</span>
                </div>
                <div className={styles.RegisterButtonArea}>
                  <input
                    className={styles.RegisterButton}
                    type="button"
                    value="Registrarse"
                  />
                </div>
              </div>
              <div className={styles.SocialIconsArea}>
                <FaFacebook
                  size={30}
                  style={{ margin: "0 10px", cursor: "pointer" }}
                />
                <FaInstagram
                  size={30}
                  style={{ margin: "0 10px", cursor: "pointer" }}
                />
                <FaTwitter
                  size={30}
                  style={{ margin: "0 10px", cursor: "pointer" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
