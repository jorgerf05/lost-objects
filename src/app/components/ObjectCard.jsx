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
      className="flex flex-col h-max p-8 bg-white rounded-2xl shadow-xl hover:bg-blue-200 duration-500"
      onClick={() => setexpanded(!expanded)}
    >
      <div className="flex space-x-5 justify-evenly text-xl">
        <div className="font-bold text-black">{object_name}</div>
        <div className=" text-black">{claimer_fullname}</div>
        <div className=" text-black">{report_date}</div>
        <div className="text-red-500">{status}</div>
      </div>
      {expanded ? (
        <div className="bg-white transition-transform rounded-2xl p-4 text-xl text-black">
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
