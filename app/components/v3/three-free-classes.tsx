import React from "react";

const infoCard = [
  {
    label: "Aula 01",
    text: (
      <>
        Desativando <br /> as armadilhas
      </>
    ),
    button: "Ver Aula 1",
    href: "",
  },
  {
    label: "Aula 02",
    text: (
      <>
        Criando O <br /> plano perfeito
      </>
    ),
    button: "Ver Aula 2",
    href: "",
  },
  {
    label: "Aula 03",
    text: (
      <>
        Ativando a <br /> proteção infalível
      </>
    ),
    button: "Ver Aula 3",
    href: "",
  },
];

export function ThreeFreeClasses() {
  return (
    <section className="flex flex-col items-center md:px-8 px-4 md:py-14 justify-start overflow-hidden z-0 bg-[#012224] bg-center bg-cover bg-no-repeat w-full h-full md:min-h-[561px] font-battambang">
      <div
        className={`lg:container text-white mx-auto lg:w-[1080px] w-full text-center`}
      >
        <h2 className="text-white text-[32px] font-bold font-battambang uppercase">
          E tudo isso em apenas
        </h2>
        <p
          className="text-[32px] font-bold font-battambang uppercase"
          style={{
            background:
              "linear-gradient(180deg, #FBC941 63.33%, #957727 88.33%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          03 aulas gratuitas.
        </p>
      </div>
      <div className="mt-10 flex flex-row gap-4">
        {infoCard.map((item, index) => (
          <div
            key={index}
            className={`text-white border border-[#5C6063] rounded-xl shadow-xl shadow-black min-w-[316px] h-[343px]`}
            style={{
              background:
                "radial-gradient(73.27% 73.27% at 50% -11.48%, #223632 0%, #091418 100%)",
            }}
          >
            <div
              className="w-14 h-[6px] bg-[#FBC941] ml-5"
              style={{
                boxShadow: `
                  0px 3px 6px 0px #FBC9414A,
                  0px 11px 11px 0px #FBC94142,
                  0px 25px 15px 0px #FBC94126,
                  0px 44px 18px 0px #FBC9410A,
                  0px 69px 19px 0px #FBC94103
                `,
              }}
            />
            <div className="w-32 h-[51px] gap-[10px] pt-2 pr-6 pb-2 pl-2 rounded-[24px] flex items-center rotate-0 bg-[#5F5F5F78] ml-5 mt-10">
              <div
                className="w-[96px] h-[35px] gap-[10px] py-[12px] px-[16px] rounded-[37px] text-[#474B50] font-bold font-battambang flex items-center justify-center bg-white"
              >
                {item.label}
              </div>
            </div>
            <div className="w-full mx-auto max-w-[80%] h-[1px] bg-[#384046] my-6" />
            <div
              className="text-[22px] font-extrabold font-battambang text-left w-full mx-auto max-w-[80%]"
              style={{
                background: "linear-gradient(168.63deg, #FFFFFF 37.98%, #2A2E31 127.55%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {item.text}
            </div>
            <div className="w-full mx-auto max-w-[80%] h-[1px] bg-[#384046] my-6" />
            <div className="w-full mx-auto max-w-[80%]">
              <button className="w-[141px] h-[44px] bg-[#FBC941] flex items-center justify-center gap-[10px] py-[10px] px-[20px] rounded-[4px] text-[#0D1216] text-[16px] font-bold font-inter uppercase transition duration-300 hover:bg-[#fff7dc] hover:shadow-lg hover:scale-105">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
