"use client";
import { NextPage } from "next";
import { useState } from "react";
import { IoEnterOutline } from "react-icons/io5";

export const GeoLocation: NextPage = () =>{
    
    return (
        <main className="flex justify-center h-screen items-center bg-color-secundaria">
            <form className="flex flex-col justify-center items-center bg-color-principal w-72 h-auto py-8 gap-3 rounded-xl">
                <button 
                    type="submit" 
                    className="border border-transparent px-4 py-2 rounded-xl flex items-center gap-2 bg-color-secundaria text-white"
                >
                    Acessar Salão <IoEnterOutline />
                </button>
            </form>
        </main>
    );
}