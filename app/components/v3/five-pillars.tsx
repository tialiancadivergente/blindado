import React from "react";

const pillars = [
  {
    number: "01",
    text: (
      <>
        <b>
          Desbloquear sua
          <br />
          Permissão para
          <br />
        </b>
        crescer, sem culpa.
      </>
    ),
  },
  {
    number: "02",
    text: (
      <>
        <b>
          Romper com medos e<br />
          bloqueios emocionais
          <br />
        </b>
        que paralisam suas decisões.
      </>
    ),
  },
  {
    number: "03",
    text: (
      <>
        <b>
          Fortalecer sua
          <br />
          vida financeira,
          <br />
        </b>
        transformando dívidas em abundância.
      </>
    ),
  },
  {
    number: "04",
    text: (
      <>
        <b>
          Construir relações
          <br />
          saudáveis e<br />
        </b>
        equilibradas.
      </>
    ),
  },
  {
    number: "05",
    text: (
      <>
        <b>
          Recuperar sua saúde
          <br />
          física e emocional
          <br />
        </b>
        para manter a energia e o foco...
      </>
    ),
  },
];

export function FivePillars() {
  return (
    <section className="flex flex-col items-center md:px-8 px-4 md:py-8 justify-start overflow-hidden z-0 bg-[#012224] bg-center bg-cover bg-no-repeat w-full h-full md:min-h-[561px] font-battambang">
      <div className="lg:container text-white mx-auto md:py-12 pb-10 relative lg:w-[1080px] w-full text-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-[#99999900] via-white to-[#99999900] mb-10" />
        <h2 className="text-[#FBC941] text-[22px] font-bold font-battambang">
          A boa notícia? Isso pode mudar.
        </h2>
        <p className="text-white text-[32px] font-bold font-battambang mt-5">
          NO WORKSHOP GRATUITO,
        </p>
        <p className="text-white text-[32px] font-bold font-battambang">
          2025 BLINDADO, VOCÊ VAI:
        </p>
        <div className="flex flex-row justify-between gap-4">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col min-w-[156px] flex-1">
              <p
                className="text-[100px] font-bold font-battambang text-left"
                style={{
                  background:
                    "linear-gradient(180deg, #5C6063 0%, rgba(41, 49, 54, 0) 116.44%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {pillar.number}
              </p>
              <p
                className="text-base font-bold font-inter text-left -mt-16"
                style={{
                  background:
                    "linear-gradient(168.63deg, #FFFFFF 37.98%, #2A2E31 127.55%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#99999900] via-white to-[#99999900] mt-10" />
      </div>
    </section>
  );
}
