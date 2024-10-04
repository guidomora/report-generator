import Image from "next/image";
import Selector from "./components/selector/Selector";
import AllSections from "./components/sections/AllSections";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center mt-6 text-4xl font-medium underline">Generador de informes</h1>
      <Selector />
      <AllSections />
      <div className="flex justify-center my-12">
        <button className="px-4 p h-12 text-xl bg-blue-600 text-white rounded-xl mt-6">Generar informe</button>
      </div>
    </div>
  );
}
