import { FaWhatsapp,
    FaInstagram
 } from "react-icons/fa";
 import { BsTelephone } from "react-icons/bs";


export default function Contatos(){

    const styleSocialButtons = 'border-2 p-3 hover:bg-black hover:text-white'
    const component_input = 'border-1 rounded-sm py-2 px-2 text-[19px]'

    return(
        <div className='h-fit pb-5'>
            <div className="flex flex-col px-10 gap-8 pt-12">
                <h1 className="title m-auto ">Nossos Contatos</h1>

                <p className="font-semibold text-[19px]">
                    Sede <br/>

                    Av. Frei Cirilo, 3840 - Messejana,<br/>
                    Fortaleza - CE, 60840-285
                </p>

                <div className="flex gap-5 items-center">
                    <a href="https://wa.me/5585989387167" target="_blank"
                    className={styleSocialButtons}>
                        <FaWhatsapp className="text-[30px]"/>
                    </a>

                    <a href="https://www.instagram.com/ruan.com.r/" target="_blank"
                    className={styleSocialButtons}>
                        <FaInstagram className="text-[30px]"/>
                    </a>
                </div>


                <div className="flex w-fit border-2 border-black px-4 py-3 gap-3 rounded-md">
                    <BsTelephone className="text-[30px]"/>
                    <p className="h-full text-[20px] font-semibold">(85) 98548-2531</p>
                </div>

                <div className="pt-5">
                    <h2 className="text-[27px] font-bold text-wrap">
                        Entre em contato conosco
                    </h2>

                    <div className="pt-7 flex flex-col gap-6">
                        <label className="gap-1 flex flex-col">
                            Nome
                            <input type="text" className={component_input}/>
                        </label>

                        <label className="gap-1 flex flex-col">
                            Email
                            <input type="text" className={component_input}/>
                        </label>

                        <label className="gap-1 flex flex-col">
                            Mensagem
                            <textarea className="border-1 rounded-sm py-2 px-2 text-[16px] h-[7rem]"/>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}