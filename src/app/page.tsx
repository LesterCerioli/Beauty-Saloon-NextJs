import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <main className="flex mt-6 p-4">
        <div className="flex flex-1 flex-col">
          <h1 className="text-[#111111] text-2xl font-bold">Olá, Placeholder</h1>
          <span className="text-[#50555C] text-sm">Encontre o serviço que procura, e cuide de sí mesma!</span>
        </div>
        <button className="flex text-white items-center justify-center h-12 w-12 bg-btn-primary-color rounded-full">
          <FaMagnifyingGlass size={24} />
        </button>
      </main>
    </>
  );
}
