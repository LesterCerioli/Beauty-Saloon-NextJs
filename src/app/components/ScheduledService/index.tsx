"use client";
import { NextPage } from "next";
import { useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import InputMask from "react-input-mask";

export const ScheduledService = () =>{
    
    const [nomeCliente, setNomeCliente] = useState("");
    const [telefoneCliente, setTelefoneCliente] = useState("");
    const [servicoCliente, setServicoCliente] = useState("");
    const [diaCliente, setDiaCliente] = useState("");
    const [horaCliente, setHoraCliente] = useState("");

    return (
            <form className="flex flex-col justify-center items-center bg-color-principal w-72 h-auto py-8 gap-3 rounded-xl">
                <h1 className="text-color-secundaria text-xl">Marcar Atendimento</h1>     
                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Nome:</label>
                    <input
                        value={nomeCliente} 
                        onChange={(e) => setNomeCliente(e.target.value)}
                        type="text"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Insira o nome"
                    />
                </div>
                
                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Telefone:</label>
                    <InputMask
                        value={telefoneCliente} 
                        onChange={(e) => setTelefoneCliente(e.target.value)}
                        mask="(99)99999-9999"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Insira seu telefone"
                    />
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Serviço que deseja:</label>
                    <input
                        value={servicoCliente} 
                        onChange={(e) => setServicoCliente(e.target.value)}
                        type="text"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Insira o serviço que deseja"
                    />
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Selecione seu dia:</label>
                    <input
                        value={diaCliente} 
                        onChange={(e) => setDiaCliente(e.target.value)}
                        type="date"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Selecione o horário"
                    />
                </div>

                <div className="flex flex-col mb-2 gap-1 text-color-secundaria">
                    <label className="w-64">Selecione seu horário:</label>
                    <input
                        value={horaCliente} 
                        onChange={(e) => setHoraCliente(e.target.value)}
                        type="time"
                        className="w-60 px-2 py-1 rounded-xl transition-all duration-500 focus:w-64" 
                        placeholder="Selecione o horário"
                    />
                </div>

                <button 
                    type="submit" 
                    className="border border-transparent px-4 py-2 rounded-xl flex items-center gap-2 bg-color-secundaria text-white"
                >
                    Agendar Atendimento <AiFillSchedule />
                </button>
            </form>
    );
}