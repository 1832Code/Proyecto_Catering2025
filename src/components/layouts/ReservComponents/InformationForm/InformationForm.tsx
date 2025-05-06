import React from "react";
import styles from "./InformationForm.module.css";
import { Servicio } from "../SelectionService/SelectionService";
export const InformationForm = ({ servicio }: { servicio: Servicio }) => {
  return (
    <div className={styles.ReservationArea}>
      <div className={styles.ServiceInfo}>
        <img src={servicio.imagen} alt={servicio.nombre} />
        <h3>{servicio.nombre}</h3>
        <p>{servicio.descripcion}</p>
      </div>

      <form className={styles.FormArea}>
        <input placeholder="Tipo de evento" />
        <input placeholder="Fecha del evento" type="date" />
        <input placeholder="Hora de inicio/fin" />
        <input placeholder="Número de teléfono" />
        <input placeholder="Dirección del evento" />
        <textarea placeholder="Comentarios o peticiones" />
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};
