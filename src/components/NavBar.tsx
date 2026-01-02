'use client'
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {

    const [seeLinks, setSeeLinks] = useState(false)

    const style_subPages = "flex items-center h-full px-2 hover:text-white max-[850px]:bg-gray-500"

    return(
        <nav className="flex justify-between px-14 h-18 bg-[#ACB1F9] relative">
            <Link href='/' className="flex items-center h-full px-2 hover:text-white font-bold text-[18px]">
                Homepage
            </Link>

            <button className="border-2 border-black p-2 hidden max-[850px]:block relative" onClick={() => setSeeLinks(!seeLinks)}>
                oi
            </button>

            <div className={`gap-7 h-full min-[850px]:flex 
                ${seeLinks? 'block':'hidden'}
                max-[850px]:absolute max-[850px]:bg-gray-500 max-[850px]:top-18 max-[850px]:right-0
                `}>
                
                <Link href='/contatos' className={style_subPages} onClick={() => setSeeLinks(!seeLinks)}>
                Contatos
                </Link>
            
                <Link href='/atendimento' className={style_subPages} onClick={() => setSeeLinks(!seeLinks)}>
                Horários de atendimento
                </Link>
            
                <Link href='/sobre-nos' className={style_subPages} onClick={() => setSeeLinks(!seeLinks)}>
                Sobre nós
                </Link>
                
            </div>
        </nav>
    )
}