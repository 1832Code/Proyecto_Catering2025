"use client";
import React from "react";

const CardServicio = ({ titulo, descripcion, imagen }:{
  titulo:string,
  descripcion:string,
  imagen:string
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 m-2 w-full">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h3 className="text-xl font-bold mt-2">{titulo}</h3>
      <p className="text-gray-600 text-sm">{descripcion}</p>
    </div>
  );
};
export default CardServicio;
