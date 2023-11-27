"use client";
import React, { useState } from "react";

const ObjectCard = ({ object }) => {
  const [expanded, setexpanded] = useState(false);
  const {
    report_date,
    claimer_fullname,
    claimer_career,
    claimer_semester,
    claimer_type,
    object_name,
    last_location,
    claimer_contact,
    status,
  } = object;

  return (
    <div
      className="flex flex-col h-max w-max p-8 bg-white rounded-2xl shadow-xl hover:bg-emerald-200 duration-500"
      onClick={() => setexpanded(!expanded)}
    >
      <div className="flex space-x-5 justify-evenly text-xl">
        <div className="font-bold text-black">{object_name}</div>
        <div className=" text-black">{claimer_fullname}</div>
        <div className=" text-black">{report_date}</div>
        {status === 'Perdido' ? <div className="text-red-500">{status}</div> : <div className="text-green-500">{status}</div>}
      </div>
      {expanded ? (
        <div className="flex flex-col bg-white rounded-2xl p-4 text-xl text-black transition-all">
          <div>Carrera: {claimer_career}</div>
          <div>Semestre: {claimer_semester}</div>
          <div>Tipo de personal: {claimer_type}</div>
          <div>Visto por ultima vez: {last_location}</div>
          <div>Contacto: {claimer_contact}</div>
          <div className="flex mt-3 self-center justify-self-center space-x-3 text-xl font-bold">
            <div className="bg-green-300 p-2 rounded-2xl">Entregar</div>
            <div className="bg-red-400 p-2 rounded-2xl">Eliminar</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ObjectCard;
