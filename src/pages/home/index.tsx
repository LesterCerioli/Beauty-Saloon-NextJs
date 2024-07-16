import { NextPage } from "next";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Home: NextPage = () => {
    return (
        <main className="flex flex-col mt-6 p-4">
            <header className="flex flex-1 flex-row justify-between">
                <div>
                    <h1 className="text-[#111111] text-2xl font-bold">Olá, Placeholder</h1>
                    <span className="text-[#50555C] text-sm">Encontre o serviço que procura, e cuide de sí mesma!</span>
                </div>
                <button className="flex text-white items-center justify-center h-12 w-12 bg-btn-primary-color rounded-full">
                    <FaMagnifyingGlass size={24} />
                </button>
            </header>
            
            <img className="mt-6 rounded-lg" src="https://picsum.photos/340/115" alt="" />
      </main>
    );
}