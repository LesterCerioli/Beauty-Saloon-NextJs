interface ServiceButtonProps{
    id: number;
    title: string;
    img: string;
    link: string;
}

export function ServiceButton({ id, title, img, link }: ServiceButtonProps){
    return (
        <div key={id} className="flex flex-col items-center">
            <button className="w-16 h-16 rounded-full bg-[#E1F5FA] text-btn-primary-color">
                <img src={img} alt="" />
            </button>
        <p className="mt-2 text-sm font-semibold text-btn-primary-color">Serviço</p>
    </div>
    );
}