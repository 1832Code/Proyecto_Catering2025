import React from "react";
import styles from "./SelectionService.module.css";
import { ExpandableCardDemo } from "@/components/features/expandible-card-demo";

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}
interface SelectionServiceProps {
  onSeleccionar: (servicio: Servicio) => void;
}

export const SelectionService: React.FC<SelectionServiceProps> = ({
  onSeleccionar,
}) => {
  return (
    <div className={styles.InteractionArea}>
      <div className={styles.CarouselArea}>
        <ExpandableCardDemo></ExpandableCardDemo>
      </div>
      <div className={styles.ButtonArea}></div>
    </div>
  );
};
