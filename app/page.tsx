export default function Home() {


  return (
    <div className="h-fit pb-50">

      <div className="flex w-full justify-between px-15 max-h-[55rem] pt-10">

        <div className="flex flex-col max-w-[70rem] bg-amber-300 text-center justify-center">
          <h1 className="text-[60px]">
            Reinald Estética
          </h1>

          <p className="text-[35px]">
            Entre bonita e saia irresistível
          </p>
        </div>

          <picture>
          <source media="(max-width: 800px)" srcSet='/images/unhas_mainPage2.jpg'/>
          <img src={'/images/unhas_mainPage2.jpg'}
          alt='unhas_exemplo'
          className="flex w-full max-w-[60rem]"
          />
          </picture>
          {/* CARROUSEL */}

      </div>

    <div className="max-h-[45rem] py-15 flex justify-between px-20 m-auto">
      <img
      src={'/images/unhas_mainPage.jpg'}
      srcSet={'/images/unhas_mainPage.jpg'}
      alt="unhas_exemplo2"
      className="flex w-full max-w-[800px] transition-all delay-150
      hover:brightness-50 hover:transition-all hover:delay-150"
      />

      <div className="relative flex flex-col font-semibold text-center gap-6 max-w-[45rem] justify-center text-[18px]">
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

    <div className="h-[65rem] w-full flex justify-between px-10 py-30">
      <div className="w-[25%] flex flex-col justify-around items-center">

        <div className="flex flex-col` gap-3">
          <h3 className="font-bold">
            Sobrancelhas
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="before:content-['•_']">
              Design personalizado para o seu rosto.
            </li>

            <li className="before:content-['•_']">
              Olhar marcante e natural.
            </li>

            <li className="before:content-['•_']">
              Henna de alta durabilidade.
            </li>

            <li className="before:content-['•_']">
              Arquitetura do olhar com precisão.
            </li>

            <li className="before:content-['•_']">
              Simetria que valoriza sua beleza.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">
            Depilação
          </h3>

          <ul>
            <li className="before:content-['•_']">
              Pele lisa e macia por mais tempo.
            </li>

            <li className="before:content-['•_']">
              Técnicas que minimizam o desconforto.
            </li>

            <li className="before:content-['•_']">
              Higiene e cuidado em cada detalhe.
            </li>

            <li className="before:content-['•_']">
              Livre-se dos pelos com suavidade.
            </li>

            <li className="before:content-['•_']">
              Depilação facial e corporal completa.
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
        className="flex w-[50%] absolute right-0 top-20 z-10"
        />
        <img
        src='/images/depilation_homepage1.jpg'
        alt="unhas 3"
        className="flex w-[70%] absolute bottom-0 left-0 -rotate-10"
        />
      </div>

      <div className=" w-[25%] flex justify-center pt-[10%]">
        <h3 className="font-bold">
          Unhas
        </h3>
        
        <ul>
          <li className="before:content-['•_']">
            Manicure e pedicure profissional.
          </li>

          <li className="before:content-['•_']">
            Esmaltação impecável e duradoura.
          </li>

          <li className="before:content-['•_']">
            Saúde e estética para suas mãos.
          </li>

          <li className="before:content-['•_']">
            Alongamentos com acabamento natural.
          </li>

          <li className="before:content-['•_']">
            Cutilagem delicada e segura.
          </li>
        </ul>

      </div>
    </div>



    </div>
  );
}
