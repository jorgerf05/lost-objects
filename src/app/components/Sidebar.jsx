import React from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen m-2 rounded-3xl p-3 space-y-5">
      <div className="space-y-3 w-max h-1/3 mt-8">
        {" "}
        {/* Logo TecNM*/}
        <div className="text-white text-2xl text-center font-semibold rounded-2xl mb-2">
          Sistema de Objetos Perdidos
        </div>
        <div className="w-full h-1 bg-white rounded-full"></div>
      </div>

      <div className="flex flex-col center h-1/3 items-center space-y-3">
        {" "}
        {/*Buttons*/}
        <Link
          href={"../object_requests"}
          className="bg-zinc-600  text-center font-semibold text-lg rounded-2xl p-1 w-4/5 hover:bg-zinc-900"
        >
          <div className="">Solicitudes</div>
        </Link>
        <div className="bg-zinc-600  text-center font-semibold text-lg rounded-2xl p-1 w-4/5">
          Registro de Objeto
        </div>
        <div className="bg-zinc-600  text-center font-semibold text-lg rounded-2xl p-1 w-4/5">
          Registro de Entregas
        </div>
      </div>

      <div className="flex flex-row h-1/3 content-end">
        <Image
          src={logo.src}
          width={180}
          height={40}
          alt=""
          className=" ml-16 self-center place-self-center"
        ></Image>
      </div>
    </div>
  );
};

export default Sidebar;