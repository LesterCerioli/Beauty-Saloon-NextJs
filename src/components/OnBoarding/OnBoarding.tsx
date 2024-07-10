"use client";

import React, { useState } from "react";

function OnBoarding(){

    const [nomeFantasia, setNomeFantasia] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [tipoAtendimento, setTipoAtendimento] = useState('');

    return(
        <form className="flex flex-col justify-center items-center bg-neutral-200 w-72 h-auto py-12 gap-3 rounded-xl">
            <label className="w-64">Nome fantasia da empresa:</label>
            <input 
                type="text" 
                placeholder="Insira aqui..." 
                value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)}
                className="w-64"
            />

            <label className="w-64">Razão social da empresa:</label>
            <input 
                type="text" 
                placeholder="Insira aqui..." 
                value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)}
                className="w-64"
            />

            <label className="w-64">CNPJ da empresa:</label>
            <input 
                type="text" 
                placeholder="Insira aqui..." 
                value={cnpj} onChange={(e) => setCnpj(e.target.value)}
                className="w-64"
            />

            <label className="w-64">Selecione o tipo de atendimento:</label>
            <select 
                value={tipoAtendimento} onChange={(e) => 
                setTipoAtendimento(e.target.value)} 
                className="w-64"
            >
                <option value="">Selecione...</option>
                <option>Atende somente o público Masculino</option>
                <option>Atende somente o público Feminino</option>
                <option>Salão de atendimento Unissex</option>
            </select>
        </form>
    );
}

export default OnBoarding;