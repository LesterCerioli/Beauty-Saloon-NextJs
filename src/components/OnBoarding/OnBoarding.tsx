"use client";

import React, { useState } from "react";
import InputMask from "react-input-mask";
import { BsArrowRightCircleFill } from "react-icons/bs";

function OnBoarding() {
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [tipoAtendimento, setTipoAtendimento] = useState('');

    return (
        <form className="flex flex-col justify-center items-center bg-neutral-200 w-72 h-auto py-12 gap-3 rounded-xl">
            <label className="w-64">Nome fantasia da empresa:</label>
            <input 
                type="text" 
                placeholder="Insira aqui..." 
                value={nomeFantasia} 
                onChange={(e) => setNomeFantasia(e.target.value)}
                className="w-64 px-2"
            />

            <label className="w-64">Razão social da empresa:</label>
            <input 
                type="text" 
                placeholder="Insira aqui..." 
                value={razaoSocial} 
                onChange={(e) => setRazaoSocial(e.target.value)}
                className="w-64 px-2"
            />

            <label className="w-64">CNPJ da empresa:</label>
            <InputMask 
                className="w-64 px-2"
                mask="99.999.999/9999-99" 
                placeholder="Insira aqui"
                value={cnpj} 
                onChange={(e) => setCnpj(e.target.value)}
                required
            >
            </InputMask>

            <label className="w-64">Selecione o tipo de atendimento:</label>
            <select 
                value={tipoAtendimento} 
                onChange={(e) => setTipoAtendimento(e.target.value)} 
                className="w-64"
            >
                <option value="">Selecione...</option>
                <option className="w-full">Salão Masculino</option>
                <option className="w-full">Salão Feminino</option>
                <option className="w-full">Salão Unissex</option>
            </select>

            <button 
                type="submit" 
                className="border border-black px-4 py-2 rounded flex items-center gap-2"
            >
                Cadastrar <BsArrowRightCircleFill />
            </button>
        </form>
    );
}

export default OnBoarding;
