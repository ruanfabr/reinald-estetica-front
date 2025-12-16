'use client'
import Link from "next/link";


export default function Navbar() {

    const style_subPages = "flex items-center h-full px-2 hover:text-white"

    return(
        <nav className="flex justify-between px-14 h-12 bg-[#ACB1F9]">
            <Link href='/' className="flex items-center h-full px-2 hover:text-white font-bold text-[18px]">
                Homepage
            </Link>

            <div className="flex gap-7 h-full">
                
                <Link href='/contatos' className={style_subPages}>
                Contatos
                </Link>
            
                <Link href='/atendimento' className={style_subPages}>
                Horários de atendimento
                </Link>
            
                <Link href='/sobre-nos' className={style_subPages}>
                Sobre nós
                </Link>
                
            </div>
        </nav>
    )
}