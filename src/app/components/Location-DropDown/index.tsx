import React, { useState, useEffect } from 'react';

interface Estado {
    id: number;
    sigla: string;
}

interface Cidade {
    id: number;
    nome: string;
}

{/*interface Bairro {
    id: number;
    name: string;
}*/}

interface HeaderLocationProps{
    onEstadoChange: (estado: string) => void;
    onCidadeChange: (cidade: string) => void;
}

export const HeaderLocation: React.FC<HeaderLocationProps> = ({onEstadoChange, onCidadeChange}) => {
    const [estados, setEstados] = useState<Estado[]>([]);
    const [cidades, setCidades] = useState<Cidade[]>([]);
    // const [bairros, setBairros] = useState<Bairro[]>([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');

    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(res => res.json())
            .then(data => setEstados(data))
            .catch(error => console.error('Erro ao carregar estados:', error));
    }, []);

    useEffect(() => {
        if (estadoSelecionado) {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
                .then(res => res.json())
                .then(data => setCidades(data))
                .catch(error => console.error('Erro ao carregar cidades:', error));
        } else {
            setCidades([]);
            // setBairros([]);
        }
    }, [estadoSelecionado]);

    {/*useEffect(() => {
        if (cidadeSelecionada) {
            fetch(`https://brasilapi.com.br/api/bairros/v1/${cidadeSelecionada}`)
                .then(res => res.json())
                .then(data => setBairros(data))
                .catch(error => console.error('Erro ao carregar bairros:', error));
        } else {
            setBairros([]);
        }
    }, [cidadeSelecionada]);*/}

    const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const estado = e.target.value;
        setEstadoSelecionado(estado);
        setCidadeSelecionada('');
        onEstadoChange(estado);
    }

    const handleCidadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const cidade = e.target.value;
        setCidadeSelecionada(cidade);
        onCidadeChange(cidade);
    };

    return (
        <div className=''>
            <select onChange={handleEstadoChange} value={estadoSelecionado}>
                <option disabled value={''}>Selecione um estado</option>
                {estados.map(estado => (
                    <option key={estado.id} value={estado.sigla}>
                        {estado.sigla}
                    </option>
                ))}
            </select>

            <select onChange={handleCidadeChange} value={cidadeSelecionada}>
                <option disabled value={''}>Selecione uma cidade</option>
                {cidades.map(cidade => (
                    <option key={cidade.id} value={cidade.nome}>
                        {cidade.nome}
                    </option>
                ))}
            </select>

            {/* <select>
                <option value="">Selecione um bairro</option>
                {bairros.map(bairro => (
                    <option key={bairro.id} value={bairro.id}>
                        {bairro.name}
                    </option>
                ))}
            </select> */}
        </div>
    );
}
