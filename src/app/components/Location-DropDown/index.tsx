"use client";
import React, { useState, useEffect } from 'react';

interface Estado {
    id: number;
    sigla: string;
}

interface Cidade {
    id: number;
    nome: string;
}

export const HeaderLocation = () => {
  const [estados, setEstados] = useState<Estado[]>([]);
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState('');

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(res => res.json())
      .then(data => setEstados(data));
  }, []);

  useEffect(() => {
    if (estadoSelecionado) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
        .then(res => res.json())
        .then(data => setCidades(data));
    }
  }, [estadoSelecionado]);

  return (
    <div>
      <select onChange={e => setEstadoSelecionado(e.target.value)}>
        <option>Selecione um estado</option>
        {estados.map(estado => (
          <option key={estado.id} value={estado.id}>
            {estado.sigla}
          </option>
        ))}
      </select>

      <select>
        <option>Selecione uma cidade</option>
        {cidades.map(cidade => (
          <option key={cidade.id} value={cidade.id}>
            {cidade.nome}
          </option>
        ))}
      </select>
    </div>
  );
}