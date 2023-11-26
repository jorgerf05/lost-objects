import { Table } from "@mui/joy";
import React, { useEffect, useState } from "react";
import CustomTable from "../components/Table";
import ObjectCard from "../components/ObjectCard";

function filterObjectsBySubstring(objects, searchString) {
  // Filter the array of objects
  return objects.filter((obj) => {
    // Check each property of the object
    for (let key in obj) {
      // If the property contains the search string, return true
      if (
        obj.hasOwnProperty(key) &&
        typeof obj[key] === "string" &&
        obj[key].includes(searchString)
      ) {
        return true;
      }
    }
    // If no property contains the search string, return false
    return false;
  });
}

// Example usage
const objects = [
  { name: "John", age: 25, city: "New York" },
  { name: "Jane", age: 30, city: "Los Angeles" },
  { name: "Bob", age: 22, city: "Chicago" },
];

const filteredObjects = filterObjectsBySubstring(objects, "o");
console.log(filteredObjects);

export default function Home() {
  const [data, setData] = useState([{}]);
  const [filter, setfilter] = useState("");

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
        "12 de Junio de 2020",
        "Jorge Rodriguez Flores",
        "Sistemas Computacionales",
        "8",
        "Alumno",
        "Celular Xiaomi Poco",
        "Laboratorio de Redes",
        "6461891906",
        "Perdido"
      ),
      createData(
        "12 de Junio de 2020",
        "Jorge Rodriguez Flores",
        "Sistemas Computacionales",
        "8",
        "Alumno",
        "Celular Xiaomi Poco",
        "Laboratorio de Redes",
        "6461891906",
        "Encontrado"
      )
    );
  }

  const rows2 = filterObjectsBySubstring(rows, "Encontrado");
  return (
    <main className="bg-gray-200 flex flex-col w-full space-y-5 p-5 content-center items-center">
      <div className="flex text-black text-3xl font-bold mb-5 ml-5">
        Objetos registrados
      </div>
      {rows2.map((obj) => (
        <ObjectCard key={obj.report_date} object={obj} />
      ))}
    </main>
  );
}
