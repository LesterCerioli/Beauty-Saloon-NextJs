"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IoEnterOutline } from "react-icons/io5";
import { fetchSaloes, Salao } from  "../../../apiteste"
import { TiScissorsOutline } from "react-icons/ti";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { HeaderLocation } from "@/app/components/Location-DropDown";
import { MdErrorOutline } from "react-icons/md";

export const GeoLocation: NextPage = () =>{
    const [saloes,  setSaloes] = useState<Salao[]>([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');

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

    const filteredSaloes = saloes.filter(salao => {
        if(estadoSelecionado && cidadeSelecionada){
            return salao.localizacao.estado === estadoSelecionado && salao.localizacao.cidade === cidadeSelecionada;
        }
        if(estadoSelecionado){
            return salao.localizacao.estado === estadoSelecionado;
        }
        return true;
    })

    return (
        <main className="flex flex-col h-screen items-center bg-color-secundaria overflow-auto gap-5 py-8">
            <HeaderLocation onEstadoChange={(estado) => {setEstadoSelecionado(estado); setCidadeSelecionada('');}} onCidadeChange={setCidadeSelecionada}/>
            
            {filteredSaloes.length === 0 ? (
                <div className="flex flex-col justify-center bg-color-principal h-auto px-2 py-4 gap-2 rounded-xl">
                    <h1 className="text-xl text-red-500 flex items-center gap-2"> <MdErrorOutline /> Não existe salões cadastrados nessa localidade</h1>
                </div>
                
            ) : (filteredSaloes.map((salao, index) => (
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
            ))
            )}
        </main>
    );
}