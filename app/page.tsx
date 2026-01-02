export default function Home() {


  return (
    <div className="max-w-screen flex flex-col h-fit pb-40 max-[750px]:gap-[9rem] gap-[15rem]">

      <div className="flex w-full flex-wrap justify-between px-15 max-h-[55rem] pt-10 gap-5">

        <div className="flex flex-col text-center justify-center m-auto">
          <h1 className="title">
            Reinald Estética
          </h1>

          <p className="min-[1090px]:text-[35px] max-[1500px]:text-[22px]">
            Entre bonita e saia irresistível
          </p>
        </div>

          <picture className="m-auto">
          <source media="(max-width: 800px)" srcSet='/images/unhas_mainPage2.jpg'
          className=""/>
          <img src={'/images/unhas_mainPage2.jpg'}
          alt='unhas_exemplo'
          className="flex w-full max-w-[56rem]"
          />
          </picture>
          {/* CARROUSEL */}

      </div>

      <div className="max-h-[65rem] flex-wrap-reverse flex justify-between px-20 m-auto gap-22 
      max-[1690px]:justify-center max-[1690px]:gap-5
      ">
        <picture className="flex justify-center">
        <source media="(max-width: 800px)" srcSet='/images/unhas_mainPage.jpg'/>
        <img
        src={'/images/unhas_mainPage.jpg'}
        alt="unhas_exemplo2"
        className="flex w-full max-w-[800px] transition-all delay-150
        hover:brightness-50 hover:transition-all hover:delay-150
        max-[1690px]:w-[90%]"
        />
        </picture>

        <div className="relative flex flex-col font-semibold text-center gap-6 max-w-[42rem] justify-center title2
        max-[1690px]:gap-3">
          Agende seu horário! <br/> Eleve sua beleza e sinta a confiança que vem de um visual cuidadoso e harmonioso.
        </div>
      </div>

    {/* <div className="h-[65rem] w-full flex justify-between px-10 py-30">
      <div className="w-[25%] flex flex-col justify-around items-center flex-wrap">

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
    </div> */}

    </div>
  );
}
