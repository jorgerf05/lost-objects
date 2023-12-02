"use client";
import React, { useEffect, useState } from "react";
import ObjectCard from "./components/ObjectCard";
import MiniCard from "./components/MiniCard";

function filterObjectsBySubstring(objects, searchString) {
  const searchLowerCase = searchString.toLowerCase();

  return objects.filter((obj) => {
    for (let key in obj) {
      if (
        obj.hasOwnProperty(key) &&
        typeof obj[key] === "string" &&
        obj[key].toLowerCase().includes(searchLowerCase)
      ) {
        return true;
      }
    }
    return false;
  });
}

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [isChanged, setisChanged] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const apiUrl = "http://10.4.8.58:5000/api/claims";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setData(data)
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [isChanged]);
  

  return (
    <main className="bg-gray-200 flex flex-col w-full space-y-5 p-5 content-center items-center">
      <div className="flex flex-row text-black text-3xl font-bold">Resumen</div>
      <div className="flex space-x-3 bg-white p-5 rounded-2xl">
        <MiniCard title={"300"} subtitle={"Objetos en inventario"}></MiniCard>
        <MiniCard title={"10"} subtitle={"Perdidos esta semana"}></MiniCard>
        <MiniCard title={data.length} subtitle={"En proceso de reclamo"}></MiniCard>
      </div>
      <div className="flex text-black text-3xl font-bold mb-5 ml-5">
        Objetos registrados
      </div>
      <div className="flex flex-col w-max text-black rounded-2xl shadow-2xl bg-white p-5 text-center font-bold text-xl">
        Buscar objeto
        <input
          className="bg-slate-100 rounded-2xl p-5 shadow-xl text-sm font-normal"
          placeholder="Criterio de busqueda..."
          onChange={(event) => {
            setsearch(event.target.value);
            setFiltered(filterObjectsBySubstring(data, search));
          }}
        />
      </div>
      {search !== ""
        ? filtered.map((obj) => (
            <ObjectCard
              key={obj.id}
              object={obj}
              setisChanged={setisChanged}
            />
          ))
        : data.map((obj) => (
            <ObjectCard
              key={obj.id}
              object={obj}
              setisChanged={setisChanged}
            />
          ))}
    </main>
  );
}