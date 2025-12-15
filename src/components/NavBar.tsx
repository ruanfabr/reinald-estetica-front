'use client'
import Link from "next/link";


export default function Navbar() {

    return(
        <nav className="flex justify-between px-14 py-3 bg-red-300">
            <Link href='/'>
                Homepage
            </Link>

            <ul className="flex gap-10">
                <li>
                    <Link href='/contatos'>
                    Contatos
                    </Link>
                </li>

                <li>
                    <Link href='/atendimento'>
                    Horários de atendimento
                    </Link>
                </li>

                <li>
                    <Link href='/sobre-nos'>
                    Sobre nós
                    </Link>
                </li>
            </ul>
        </nav>
    )
}