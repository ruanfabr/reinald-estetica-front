import { FaWhatsapp } from "react-icons/fa";


export default function Contatos(){

    return(
        <div className=''>
            <div className="pt-2 flex flex-col">
                <div className="flex flex-col gap-5">
                    <h1 className="title">Nosso Contato</h1>

                    <div className="flex gap-5">
                        <p>whats</p>
                        <p>insta</p>
                    </div>
                    <div className="flex  justify-center">
                        <div className="flex border-1 border-black px-3 py-2">
                            <FaWhatsapp className="text-[30px]"/>
                            <p className="h-full text-[20px]">(85) 98548-2531</p>
                        </div>
                    </div>
                </div>

                <div>
                    eae
                </div>
            </div>
        </div>
    )
}