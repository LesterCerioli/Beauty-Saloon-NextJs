"use client";
import { useEffect, useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import InputMask from "react-input-mask";
import { IoMdSend } from "react-icons/io";

export const ScheduledService = () => {
    const [nomeCliente, setNomeCliente] = useState("");
    const [telefoneCliente, setTelefoneCliente] = useState("");
    const [diaCliente, setDiaCliente] = useState("");
    const [horaCliente, setHoraCliente] = useState("");
    const [servicos, setServicos] = useState({
        cabelo: false,
        tintura: false,
        maniPedicure: false,
        sobrancelha: false,
        unhas: false,
        depilacao: false,
        decPelos: false,
    });
    const [outroServico, setOutroServico] = useState("");
    const [outrosServicos, setOutrosServicos] = useState<{ nome: string; checked: boolean }[]>([]);

    useEffect(() => {
        const salvarServicos = localStorage.getItem('outrosServicos');
        if(salvarServicos){
            setOutrosServicos(JSON.parse(salvarServicos))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("outrosServicos", JSON.stringify(outrosServicos));
    }, [outrosServicos])

    const handleServicoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setServicos({
            ...servicos,
            [event.target.name]: event.target.checked,
        });
    };

    const handleOutroServicoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOutroServico(event.target.value);
    };

    const handleAddOutroServicoClick = () => {
        if (outroServico.trim() !== "" && window.confirm(`Deseja adicionar o serviço "${outroServico}" à lista de serviços?`)) {
            setOutrosServicos([...outrosServicos, { nome: outroServico, checked: false }]);
            setOutroServico("");
        }
    };

    const handleOutroServicoCheckChange = (index: number) => {
        const novosServicos = [...outrosServicos];
        novosServicos[index].checked = !novosServicos[index].checked;
        setOutrosServicos(novosServicos);
    };

    const handleAgendarClick = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // Lógica para agendar atendimento
    };

    return (
        <form className="flex flex-col justify-center items-center bg-color-principal w-72 h-auto py-8 px-4 gap-3 rounded-xl">
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
                <label className="flex items-center gap-1">
                    <input type="checkbox" name="cabelo" checked={servicos.cabelo} onChange={handleServicoChange} />
                    Corte
                </label>
                <label className="flex items-center gap-1">
                    <input type="checkbox" name="tintura" checked={servicos.tintura} onChange={handleServicoChange} />
                    Tintura
                </label>
                <label className="flex items-center gap-1">
                    <input type="checkbox" name="maniPedicure" checked={servicos.maniPedicure} onChange={handleServicoChange} />
                    Manicure / Pedicure
                </label>
                <label className="flex items-center gap-1">
                    <input type="checkbox" name="sobrancelha" checked={servicos.sobrancelha} onChange={handleServicoChange} />
                    Sobrancelha
                </label>
                <label className="flex items-center gap-1">
                    <input type="checkbox" name="unhas" checked={servicos.unhas} onChange={handleServicoChange} />
                    Unhas
                </label>
                <label className="flex items-center gap-1">
                    <input type="checkbox" name="depilacao" checked={servicos.depilacao} onChange={handleServicoChange} />
                    Depilação
                </label>
                <label className="flex items-center gap-1">
                    <input type="checkbox" name="decPelos" checked={servicos.decPelos} onChange={handleServicoChange} />
                    Descoloração de pelos
                </label>

                {outrosServicos.map((servico, index) => (
                    <label key={index} className="flex items-center gap-1">
                        <input
                            type="checkbox"
                            checked={servico.checked}
                            onChange={() => handleOutroServicoCheckChange(index)}
                        />
                        {servico.nome}
                    </label>
                ))}

                <label className="flex gap-1 items-center">
                    <input
                        type="text"
                        value={outroServico}
                        onChange={handleOutroServicoChange}
                        placeholder="Adicione um outro serviço"
                        className="bg-transparent w-full border-b-color-secundaria border-b-2"
                    />
                    <button
                        type="button"
                        onClick={handleAddOutroServicoClick}
                        className="bg-color-secundaria text-white px-2 py-1 rounded"
                    >
                        <IoMdSend />
                    </button>
                </label>
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
                onClick={handleAgendarClick}
            >
                Agendar Atendimento <AiFillSchedule />
            </button>
        </form>
    );
};
