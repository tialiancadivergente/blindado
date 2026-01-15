import React from "react";

export function TheWarning() {
  return (
    <section className="flex flex-col items-center md:px-8 px-4 py-14 justify-start overflow-hidden z-0 bg-[#012224] bg-center bg-cover bg-no-repeat w-full h-full md:min-h-[561px] font-battambang">
      <div
        className={`lg:container text-white mx-auto md:px-16 px-8 py-12 relative lg:w-[1080px] w-full border border-[#5C6063] rounded-xl shadow-xl shadow-black`}
        style={{
          background:
            "radial-gradient(73.27% 73.27% at 50% -11.48%, #223632 0%, #091418 100%)",
        }}
      >
        <h2 className="text-white md:text-[32px] text-[24px] font-bold font-battambang">
          Se isso soa familiar, eu preciso te dizer:
        </h2>
        <p className="text-[#C39B2E] md:text-[32px] text-[24px] font-bold font-battambang">
          2025 vai ser exatamente igual!
        </p>
        <div className="text-white md:text-[18px] text-[16px] font-light font-inter flex flex-col gap-3 my-3">
          <p>
            Você vai colocar suas metas no papel e elas vão continuar lá,
            esquecidas.
          </p>
          <p className="font-bold">
            Nos primeiros meses, você até vai tentar. Mas depois…
          </p>
        </div>
        <ul className="font-semibold text-black text-[16px] flex flex-col gap-2 list-none pl-0 font-inter">
          <li className="bg-[#C39B2E] py-1 md:px-4 px-2 flex items-start gap-1 before:content-['•'] before:shrink-0">
            Vai se endividar ainda mais.
          </li>
          <li className="bg-[#C39B2E] py-1 md:px-4 px-2 flex items-start gap-1 before:content-['•'] before:shrink-0">
            Vai deixar a academia de lado.
          </li>
          <li className="bg-[#C39B2E] py-1 md:px-4 px-2 flex items-start gap-1 before:content-['•'] before:shrink-0">
            Vai empurrar aquele relacionamento problemático com a barriga.
          </li>
        </ul>
        <div className="md:text-[18px] text-[16px] font-light font-inter flex flex-col gap-3 mt-5">
          <p>E eu não quero ser pessimista com você, mas essa é a verdade!</p>
          <p className="font-bold">
            Seu ano vai ser mais uma vez roubado porque, ao longo dele, você vai
            continuar caindo em armadilhas emocionais.
          </p>

          <p>
            E são elas que te impedem de avançar e alcançar um novo patamar na
            sua vida: seja financeiro, na saúde ou nos seus relacionamentos.
          </p>

          <p>
            Isso acontece porque você ainda não tem Permissão para ir mais longe
            e, consequentemente, tirar seus sonhos do papel.
          </p>

          <p>
            Você tem Capacidade e Disposição para mudar. Mas é a <span className="text-[#C39B2E] font-bold">falta de
            Permissão que te mantém travado no mesmo lugar.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
