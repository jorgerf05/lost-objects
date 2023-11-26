import { Table } from "@mui/joy";
import React from "react";
import CustomTable from "../components/Table";
import ObjectCard from "../components/ObjectCard";

export default function Home() {
  function createData(
    report_date,
    claimer_fullname,
    claimer_career,
    claimer_semester,
    claimer_type,
    object_name,
    last_location,
    claimer_contact,
    status
  ) {
    return {
      report_date,
      claimer_fullname,
      claimer_career,
      claimer_semester,
      claimer_type,
      object_name,
      last_location,
      claimer_contact,
      status,
    };
  }
  // Fecha del reporte
  // Nombre del solicitante
  // Carrera
  // Semestre
  // Tipo (docente o alumno)
  // Objeto encontrado
  // Visto por utlka vez
  // Contacto
  // Estatus
  // **Posible usar credencial de estudiante**
  // **Posible implementar mejoras**
  const rows = [
    // Articulo, estatus, ubicacion, fecha del reporte
    createData(
      "05-Jun-2023",
      "Jorge Rodriguez Flores",
      "Sistemas Computacionales",
      "8",
      "Alumno",
      "Celular Xiaomi Poco",
      "Laboratorio de Redes",
      "6461891906",
      "Perdido"
    ),
  ];

  const columns = [
    { key: "claimer_fullname", name: "Name" },
    { key: "claimer_career", name: "Carrera" },
    { key: "claimer_semester", name: "Semestre" },
  ];

  for (let index = 0; index < 200; index++) {
    rows.push(
      createData(
        "05-Jun-2022",
        "Jorge Rodriguez Flores",
        "Sistemas Computacionales",
        "8",
        "Alumno",
        "Celular Xiaomi Poco",
        "Laboratorio de Redes",
        "6461891906",
        "Perdido"
      )
    );
  }
  return (
    <main className="flex w-full h-full bg-white">
      <div className="flex flex-col bg-blue-100 w-full m-14 rounded-2xl shadow-2xl overflow-y-scroll p-5 space-y-5">
        {/* <CustomTable data={rows} columns={columns}></CustomTable> */}
        {rows.map(obj => <ObjectCard key={obj.report_date} object={obj}/>)}
      </div>
    </main>
  );
}
