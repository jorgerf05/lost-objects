import * as React from 'react';
import Table from '@mui/joy/Table';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  // Articulo, estatus, ubicacion, fecha del reporte
  createData('Frozen yoghurt', "Encontrado", "Oficina de Redes", "25/Jan/2022"),
  createData('Frozen yoghurt', "Encontrado", "Oficina de Redes", "25/Jan/2022"),
  createData('Frozen yoghurt', "Encontrado", "Oficina de Redes", "25/Jan/2022"),
  createData('Frozen yoghurt', "Encontrado", "Oficina de Redes", "25/Jan/2022"),
  createData('Frozen yoghurt', "Encontrado", "Oficina de Redes", "25/Jan/2022"),
  createData('Frozen yoghurt', "Encontrado", "Oficina de Redes", "25/Jan/2022"),
  createData('Frozen yoghurt', "Encontrado", "Oficina de Redes", "25/Jan/2022"),

]

export default function TableColumnWidth() {
  return (
    
    <Table sx={{ '& thead th:nth-child(1)': { width: '40%' } }} className='rounded-3xl'>
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
            <td className='font-extrabold'>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
