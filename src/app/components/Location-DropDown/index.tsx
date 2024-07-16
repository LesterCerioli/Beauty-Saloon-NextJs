import React, { useState, useEffect } from 'react';

interface Estado {
    id: number;
    shortName: string;
}

interface Cidade {
    id: number;
    name: string;
}

interface Bairro {
    id: number;
    name: string;
}

export const HeaderLocation = () => {
    const [estados, setEstados] = useState<Estado[]>([]);
    const [cidades, setCidades] = useState<Cidade[]>([]);
    const [bairros, setBairros] = useState<Bairro[]>([]);
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
        }
    }, [estadoSelecionado]);

    useEffect(() => {
        if (cidadeSelecionada) {
            fetch(`https://api.brasilaberto.com/v1/districts-by-ibge-code/${cidadeSelecionada}`)
                .then(res => res.json())
                .then(data => setBairros(data))
                .catch(error => console.error('Erro ao carregar bairros:', error));
        }
    }, [cidadeSelecionada]);

    return (
        <div>
            <select onChange={e => setEstadoSelecionado(e.target.value)}>
                <option>Selecione um estado</option>
                {estados.map(estado => (
                    <option key={estado.id} value={estado.id}>
                        {estado.shortName}
                    </option>
                ))}
            </select>

            <select onChange={e => setCidadeSelecionada(e.target.value)}>
                <option>Selecione uma cidade</option>
                {cidades.map(cidade => (
                    <option key={cidade.id} value={cidade.id}>
                        {cidade.name}
                    </option>
                ))}
            </select>

            <select>
                <option>Selecione um bairro</option>
                {bairros.map(bairro => (
                    <option key={bairro.id} value={bairro.id}>
                        {bairro.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
