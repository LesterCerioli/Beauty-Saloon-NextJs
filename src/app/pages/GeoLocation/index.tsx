"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IoEnterOutline } from "react-icons/io5";
import { fetchSaloes, Salao } from  "../../../apiteste"
import { TiScissorsOutline } from "react-icons/ti";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { HeaderLocation } from "@/app/components/Location-DropDown";

export const GeoLocation: NextPage = () =>{
    const [saloes,  setSaloes] = useState<Salao[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchSaloes();
                setSaloes(data);
            } catch (error) {
                console.error('Erro ao buscar salões:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="flex flex-col h-screen items-center bg-color-secundaria overflow-auto gap-5 py-8">
            <HeaderLocation/>
            
            {saloes.map((salao, index) => (
                <div key={index} className="flex flex-col justify-center bg-color-principal w-80 h-auto px-8 py-4 gap-2 rounded-xl">
                    <h1 className="text-xl text-gray-500 flex items-center gap-2 border-b-color-secundaria border-b-2">{salao.nomeFantasia}<TiScissorsOutline /> </h1>
                    <p className="flex items-center gap-1 text-lg"><FaMapLocationDot />{salao.localizacao.cidade} ({salao.localizacao.estado})</p>
                    <p className="flex items-center gap-1"> <SiGooglemaps /> {salao.localizacao.rua} - Nº {salao.localizacao.numero}</p>
                    <button 
                        type="submit" 
                        className="border border-transparent px-4 py-2 rounded-xl flex items-center gap-2 bg-color-secundaria text-white"
                    >
                        Acessar Salão <IoEnterOutline />
                    </button>
                </div>
            ))}
        </main>
    );
}