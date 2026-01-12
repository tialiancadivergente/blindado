import React from "react";

export function CycleRepeats() {
  return (
    <section
      className="flex flex-col items-center md:px-8 px-4 md:py-20 justify-start overflow-hidden z-0 bg-[url('/images/bldrc/v3/bg-blindado.webp')] bg-center bg-cover bg-no-repeat w-full h-full md:min-h-[561px] font-battambang"
    >
      <div
        className={`lg:container mx-auto md:px-4 pb-10 relative lg:w-[1080px] w-full`}
      >
        <h2 className="text-black text-[32px] font-bold font-battambang">
          Quantas vezes você começou o ano prometendo que dessa vez seria
          diferente?
        </h2>
        <div className="text-black text-[18px] font-normal font-battambang flex flex-col gap-4 my-4">
          <p>
            Que iria organizar sua vida financeira, construir relacionamentos
            mais saudáveis e finalmente cuidar da sua saúde?
          </p>
          <p className="font-bold">Mas aí o tempo passou… e você:</p>
        </div>
        <div className="font-semibold text-black text-[16px] flex flex-col gap-2">
          <p className="bg-[#006D71B2] rounded-md py-1 px-4">
            Continuou atolado em dívidas.
          </p>
          <p className="bg-[#006D71B2] rounded-md py-1 px-4">
            Ficou preso em relações tóxicas por medo de estar só.
          </p>
          <p className="bg-[#006D71B2] rounded-md py-1 px-4">
            Colocou os outros em primeiro lugar e se abandonou - de novo.
          </p>
          <p className="bg-[#006D71B2] rounded-md py-1 px-4">
            Começou a se exercitar, mas desistiu no meio do caminho.
          </p>
          <p className="bg-[#006D71B2] rounded-md py-1 px-4">
            Permaneceu em um emprego que não te traz mais satisfação.
          </p>
        </div>
      </div>
    </section>
  );
}