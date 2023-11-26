import { Table } from "@mui/joy";
import React from "react";

export default function Home() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    // Articulo, estatus, ubicacion, fecha del reporte
    createData(
      "Frozen yoghurt",
      "Encontrado",
      "Oficina de Redes",
      "25/Jan/2022"
    ),
  ];

  for (let index = 0; index < 200; index++) {
    rows.push(
      createData(
        "Frozen yoghurt",
        "Encontrado",
        "Oficina de Redes",
        "25/Jan/2022"
      )
    );
  }

  return (
    <main className="flex h-screen w-full bg-white rounded-3xl">
      {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
      <div className="absolute top-20 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div> */}

      <div className="flex h-full items-center justify-center overflow-auto">
        <Table
          sx={{
            "& thead th:nth-child(1)": { width: "40%" },
            overflow: "auto",
            height: 200,
          }}
        >
          <thead>
            <tr>
              <th>Articulo</th>
              <th>Estatus</th>
              <th>Ubicacion</th>
              <th>Fecha del reporte</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td className="font-extrabold">{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>{row.carbs}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </main>
  );
}
