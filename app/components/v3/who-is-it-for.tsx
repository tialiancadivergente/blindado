import { Check } from "lucide-react";
import React from "react";

const reasons = [
  "Já fez terapia, mas sente que nada mudou.",
  "Se formou, fez pós-graduação, cursos… e ainda assim sua vida financeira não decolou.",
  "Sente-se preso(a) em relações que drenam sua energia, mas tem medo de sair.",
  "Vive com ansiedade, culpa ou medo de não ser suficiente.",
  "Está cansado de ver o dinheiro acabar antes do mês terminar.",
  "Deseja um relacionamento saudável, mas só atrai pessoas complicadas.",
  "Já tentou várias estratégias para emagrecer ou cuidar da saúde, mas desiste no meio do caminho.",
];

export function WhoIsItFor() {
  return (
    <section className="flex flex-col items-center md:px-8 px-4 pt-14 md:pb-0 justify-start overflow-hidden z-0 bg-[#012224] bg-center bg-cover bg-no-repeat w-full h-full md:min-h-[561px] font-battambang">
      <div
        className={`lg:container text-white mx-auto lg:w-[1080px] w-full text-center`}
      >
        <h2 className="text-white md:text-[32px] text-[28px] md:text-center text-left font-bold font-battambang uppercase">
          PARA QUEM É O 2025 BLINDADO?
        </h2>
        <div className="mt-6">
          <p className="text-[#FBC941] text-[20px] font-bold md:text-center text-left font-battambang">
            Este evento é para você que:
          </p>
          <div className="mt-5 max-w-[500px] flex flex-col gap-2 items-center justify-center mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="w-full px-[18px] py-[12px] bg-[#050E10] border border-[#5C6063] rounded-[8px] text-left flex items-center gap-2 font-inter text-[14px]"
              >
                <Check className="size-5 text-[#FBC941]" />
                {reason}
              </div>
            ))}
            <p className="text-white text-base font-battambang font-light text-left mt-5">
              Se você se encaixa em qualquer um desses perfis — ou apenas quer
              fazer de 2025 o ano da virada, esse workshop é pra você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
