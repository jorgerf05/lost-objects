"use client";
import React, { useEffect, useState } from "react";
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

// const filteredObjects = filterObjectsBySubstring(objects, "o");

export default function Home() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Define the API endpoint
    const apiUrl = "http://127.0.0.1:5000/api/claims";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className="bg-gray-200 flex flex-col w-full space-y-5 p-5 content-center items-center">
      <div className="flex text-black text-3xl font-bold mb-5 ml-5">
        Objetos registrados
      </div>
      {data.map((obj) => (
        <ObjectCard key={obj.report_date} object={obj} />
      ))}
    </main>
  );
}
