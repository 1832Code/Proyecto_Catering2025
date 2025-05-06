import NavComponent from "@/components/layouts/NavComponents/NavComponent";
import React from "react";
import styles from "./ReservarView.module.css";
import { ReservProc } from "@/components/layouts/ReservComponents/ReservProc";

export const ReservarView = () => {
  return (
    <>
      <div className={styles.MainArea}>
        <NavComponent></NavComponent>
        <div className={styles.ContainerForm}>
          <div className={styles.OptionsArea}>
            <input
              className={styles.LeftButton}
              type="button"
              value="Predeterminado"
            />
            <input
              className={styles.RightButton}
              type="button"
              value="Personalizado"
            />
          </div>
          <div className={styles.InteractionArea}>
            <ReservProc />
          </div>
        </div>
      </div>
    </>
  );
};
export default ReservarView;
