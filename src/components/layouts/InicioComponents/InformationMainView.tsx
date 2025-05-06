import React from "react";

import styles from "./InformationMainView.module.css";
import { CarouselDemo } from "@/components/features/carousel-demo";
import { TextGenerateEffectDemo } from "@/components/features/texto-demo";

export const InformationMainView = () => {
  return (
    <div className={styles.MainArea}>
      <div className={styles.ContainerArea}>
        <div className={styles.FirstArea}>
          <div className={styles.InformationArea}>
            <TextGenerateEffectDemo
              words="D'Bolivar Gourmet"
              style={{ fontFamily: "Tienne, sans-serif", fontSize: "70px" }}
            ></TextGenerateEffectDemo>
            <p className={styles.FirstText}>
              <TextGenerateEffectDemo
                words="Sabores que enamoran, eventos que inspiran"
                style={{ fontFamily: "Italiana, sans-serif", fontSize: "30px" }}
              ></TextGenerateEffectDemo>
            </p>
            <p className={styles.SecondText}>Reserva tu catering ahora!!</p>
            <input
              className={styles.ReservButtom}
              value="Reservar Ahora"
              type="button"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InformationMainView;
