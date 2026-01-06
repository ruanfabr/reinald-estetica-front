'use client'
import Link from "next/link";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";

export default function Navbar() {

    const [seeLinks, setSeeLinks] = useState(false)

    // max-[850px]:bg-gray-500
    const style_subPages = "flex items-center h-full px-3 hover:text-white"

    return(
        <nav className="flex justify-between px-14 max-[850px]:px-5 h-18 bg-[#ACB1F9] relative">
            <Link href='/' className="flex items-center h-full px-2 hover:text-white font-bold text-[18px]">
                Homepage
            </Link>

            <button className="p-2 hidden max-[850px]:block relative text-3xl" onClick={() => setSeeLinks(!seeLinks)}>
                <TfiMenu/>
            </button>

            <div className={`gap-7 h-full flex min-[851px]:flex 
                ${seeLinks? 'block':'hidden'}
                max-[850px]:absolute max-[850px]:bg-gray-500 max-[850px]:top-18 max-[850px]:right-2 max-[850px]:h-fit max-[850px]:gap-5 max-[850px]:flex-col max-[850px]:py-5 max-[850px]:rounded-md
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