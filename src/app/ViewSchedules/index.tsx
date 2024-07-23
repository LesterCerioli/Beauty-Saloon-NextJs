"use client";
import { NextPage } from "next";
import { fetchCustomer, Customer } from "@/app/apiTesteClientes";
import { useState, useEffect } from "react";

export const ViewSchedules: NextPage = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCustomer();
                setCustomers(data);
            } catch (error) {
                console.error('Erro ao buscar clientes: ', error);
            }
        };

        fetchData();
    }, []);

    const confirmedCustomers = customers.filter(customer => customer.status)
    const cancelCustomers = customers.filter(customer => !customer.status)

    return(
        <main className="flex justify-center h-screen bg-color-secundaria overflow-auto">
            <section className="flex flex-col items-center w-full text-sm py-4">
                <h1 className="text-color-principal ">AGENDADOS</h1>
                <div className="flex flex-col gap-4 bg-purple-300 p-3 rounded-md">
                    {confirmedCustomers.map(customer => (
                        <div key={customer.id} className="bg-color-principal text-gray-700 flex flex-col gap-1 p-1 rounded-md">
                        <p>Nome: {customer.nome}</p>
                        <p>Data: {customer.data}</p>
                        <p>Horário: {customer.horario}</p>
                        <p>Atendende: {customer.atendente}</p>
                        <p>Status: {customer.status ? "Agendado" : "Cancelado"}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="flex flex-col items-center w-full text-sm py-4">
                <h1 className="text-color-principal ">CANCELADOS</h1>
                <div className="flex flex-col gap-4 bg-purple-300 p-3 rounded-md">
                    {cancelCustomers.map(customer => (
                        <div key={customer.id} className="bg-color-principal text-gray-700 flex flex-col gap-1 p-1 rounded-md">
                        <p>Name: {customer.nome}</p>
                        <p>Date: {customer.data}</p>
                        <p>Time: {customer.horario}</p>
                        <p>Atendant: {customer.atendente}</p>
                        <p>Status: {customer.status ? "Agendado" : "Cancelado"}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}