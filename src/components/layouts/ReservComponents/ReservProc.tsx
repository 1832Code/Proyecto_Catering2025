"use client";
import React, { useState } from "react";
import { SelectionService } from "./SelectionService/SelectionService";
import { InformationForm } from "./InformationForm/InformationForm";

export const ReservProc = () => {
  const [paso, setPaso] = useState(1);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const handleSeleccionServicio = (servicio: any) => {
    setServicioSeleccionado(servicio);
    setPaso(2);
  };

  return (
    <>
      {paso === 1 && (
        <SelectionService onSeleccionar={handleSeleccionServicio} />
      )}
      {paso === 2 && servicioSeleccionado && (
        <InformationForm servicio={servicioSeleccionado} />
      )}
    </>
  );
};
