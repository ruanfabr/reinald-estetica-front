export default function Home() {


  return (
    <div className="h-fit pb-50">

      <div className="flex w-full h-fit pt-10">

        {/* <div className="absolute top-[20rem] left-[14rem] z-10"> */}
        <div className="relative left-15 flex flex-col w-[70rem] max-2xl:w-[60rem] text-center justify-center">
          <h1 className="text-[60px] max-2xl:text-[40px]">
            Reinald Estética
          </h1>

          <p className="text-[35px] max-2xl:text-[25px]">
            Entre bonita e saia irresistível
          </p>
        </div>

        <div className="w-full flex items-end justify-end px-17">
          <img src={'/images/unhas_mainPage2.jpg'}
          alt='unhas_exemplo'
          className="flex w-[60rem] self-end"
          />
        </div>

        {/* <img
        src='/images/unhas_mainPage.jpg'
        className="flex w-[35rem]"
        /> */}
    </div>

    <div className="h-[45rem] max-2xl:h-[34rem] py-15 flex justify-between">
      <img
      src={'/images/unhas_mainPage.jpg'}
      alt="unhas_exemplo2"
      className="flex h-full pl-19"
      />

      <div className="relative flex flex-col font-semibold text-center gap-6 w-[45rem] max-2xl:w-[25rem] right-[10%] justify-center text-[18px] max-2xl:text-[15px]">
        ✨ Descubra a Sua Melhor Versão! ✨
        
        <p>
          Invista nos detalhes que transformam sua expressão! Na Reinald Estética, somos especialistas em realçar o que você tem de melhor, focando na precisão e arte das unhas e sobrancelhas.
        </p>

        <p>
          Nossas manicures e designers utilizam técnicas exclusivas, garantindo unhas impecáveis (durabilidade e saúde) e sobrancelhas desenhadas sob medida para o seu rosto. Diga adeus às falhas e ao formato desalinhado!
        </p>

        <p>
          Agende seu horário! Eleve sua beleza e sinta a confiança que vem de um visual cuidado e harmonioso.
        </p>
      </div>
    </div>

    <div className="h-[65rem] max-2xl:h-[50rem] w-full flex justify-between px-10 py-30 max-2xl:py-35">
      <div className="w-[25%] flex justify-center items-center">

        <div className="flex flex-col gap-3">
          <h2 className="font-bold">
            Sobrancelhas
          </h2>
        <ul className="flex flex-col gap-4">
          <li className="before:content-['•_']">
            Design personalizado para o seu rosto.
          </li>

          <li>
            Olhar marcante e natural.
          </li>

          <li>
            Henna de alta durabilidade.
          </li>
          

          <li>
            Arquitetura do olhar com precisão.
          </li>

          <li>
            Simetria que valoriza sua beleza.
          </li>
        </ul>
        </div>

      </div>

      <div className="relative w-[45%] flex justify-center">
        <img
        src='/images/sobrancelha_1.jpg'
        alt="sobrancelha_1"
        className="flex w-[39%] absolute left-[10%] z-20 rotate-5"
        />
        <img
        src='/images/unhas_mainPage3.jpg'
        alt="unhas 3"
        className="flex w-[50%] absolute right-0 top-20 max-2xl:top-12 z-10"
        />
        <img
        src='/images/depilation_homepage1.jpg'
        alt="unhas 3"
        className="flex w-[70%] absolute bottom-0 left-0 -rotate-10"
        />
      </div>

      <div className=" w-[25%] flex justify-center pt-[10%]">
        as
      </div>
    </div>



    </div>
  );
}
