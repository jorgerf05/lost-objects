import Image from "next/image";
import Summary from "./components/Summary";
import Last from "./components/Last";
import MyChart from "./components/Chart";

export default function Home() {
  return (
    <main className="flex flex-row">
      <div className="flex flex-col bg-white rounded-l-3xl h-screen p-5 space-y-10">
        {" "}
        {/*Overview main container*/}
        <div className="text-black font-semibold text-4xl ml-5 mt-5">
          {" "}
          {/*Title text*/}
          Overview
        </div>
        <div className="flex bg-blue-100 rounded-3xl h-4/6 w-9/10 p-5 shadow-xl">
          {" "}
          {/*Main table*/}
          <div className="flex shadow-2xl rounded-2xl">
            <Summary />
          </div>
        </div>
        <div className="flex bg-blue-100 rounded-3xl h-2/6 w-9/10 p-5 space-y-2 shadow-xl items-center justify-center space-x-3">
          {" "}
          {/*Widgets container*/}
          <div className="flex flex-col space-y-2">
            <Last title={"Objetos resguardados"} subtitle={23} />
            <Last title={"Objetos entregados"} subtitle={3} />
          </div>
          <div className="flex w-full h-full bg-blue-50 rounded-2xl shadow-2xl">
            <MyChart></MyChart>
          </div>
        </div>
      </div>
    </main>
  );
}
