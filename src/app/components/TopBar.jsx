import React from "react";
import Image from "next/image";
import logo from "/public/logo.png";

const TopBar = () => {
  return (
    <div className="flex w-screen p-5 space-x-4 items-center">
      <div className="font-bold text-xl">Sistema de Objetos Perdidos</div>
      <div className="h-full w-1 bg-white rounded-xl"></div>
      <div>
        <Image src={logo.src} alt="Hola" width={100} height={50}color="#0000FF"></Image>
      </div>
      <div className="flex right-auto">Hoal</div>
    </div>
  );
};

export default TopBar;
