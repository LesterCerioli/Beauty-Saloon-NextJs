import { NextPage } from "next";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";

import image from "../../assets/placeholder_image.png";
import { ServiceButton } from "@/components/ServiceButton";

import { serviceList } from "../../constants/serviceConstants";

interface Servico{
    id: number;
    title: string;
    img: string;
    link: string;
}


interface ServiceButtonData{
    data: Array<Servico>;
}

export const Home: NextPage = () => {
    return (
        <main className="flex flex-col mt-6 p-4">
            <header className="flex flex-1 flex-row justify-between">
                <div>
                    <h1 className="text-[#111111] text-2xl font-bold">Olá, Placeholder</h1>
                    <span className="text-[#50555C] text-sm">Encontre o serviço que procura, e cuide de sí mesma!</span>
                </div>
                <button className="flex text-white items-center justify-center h-12 w-12 bg-btn-primary-color rounded-full">
                    <FaMagnifyingGlass size={24} />
                </button>
            </header>
            
            <Image className="w-screen mt-6 rounded-lg" src={image} alt="" />

            <section className="mt-6 font-bold text-base">
                <h5 className="text-[#111111]">O que você está procurando?</h5>
                <div className=" mt-6 grid gap-4 grid-cols-4">
                    {
                        serviceList.map(({id, title, img, link}: Servico) => {
                            return (
                                <ServiceButton key={id} id={id} title={title} img={img} link={link}/>
                            )
                        })
                    }
                </div>
            </section>
            
      </main>
    );
}