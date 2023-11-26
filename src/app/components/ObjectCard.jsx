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
      className="flex flex-col h-60 p-8 bg-black rounded-2xl shadow-2xl hover:bg-blue-600 duration-500"
      onClick={() => setexpanded(!expanded)}
    >
      <div className="flex space-x-5 justify-evenly text-xl">
        <div className="font-bold">{object_name}</div>
        <div className="">{claimer_fullname}</div>
        <div className="">{report_date}</div>
        <div className="text-red-500">{status}</div>
      </div>
      {expanded ? (
        <div className="bg-green-900 transition-transform rounded-2xl p-4 text-xl">
          <div>Carrera: {claimer_career}</div>
          <div>Semestre: {claimer_semester}</div>
          <div>Tipo de personal: {claimer_type}</div>
          <div>Visto por ultima vez: {last_location}</div>
          <div>Contacto: {claimer_contact}</div>
        </div>
      ) : null}
    </div>
  );
};

export default ObjectCard;
