import React, { useState } from "react";

export function DecisionHands() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      const element = document.getElementById("hero-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Elemento com id 'cadastro' não encontrado");
      }
      setIsSubmitting(false);
    }, 100);
  };
  
  return (
    <section
      className="flex flex-col items-center md:px-8 px-4 md:py-20 justify-start overflow-hidden z-0 bg-[#012224] bg-[url('/images/bldrc/v3/bg-decision.webp')] bg-center bg-cover bg-no-repeat w-full h-full md:min-h-[808px] font-battambang"
    >
      <div
        className={`lg:container mx-auto md:px-4 pb-10 relative lg:w-[1080px]`}
      >
        <h2
          className="text-[48px] font-extrabold font-battambang uppercase mt-56 w-full max-w-[500px]"
          style={{
            background: "linear-gradient(168.63deg, #FFFFFF 37.98%, #2A2E31 127.55%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          A DECISÃO ESTÁ <br /> EM SUAS MÃOS.
        </h2>
        <p className="text-white text-[16px] font-normal font-inter mt-5 w-full max-w-[500px]">
          Clique no botão abaixo e faça sua inscrição gratuita agora...
        </p>
        <p className="text-white text-[16px] font-normal font-inter mt-5 w-full max-w-[500px]">
          Ou continue insatisfeito, repetindo as mesmas metas no papel ano após ano — sem sair do lugar. Só não vale reclamar depois que nada mudou.
        </p>
        <button
          className="w-[456px] h-[54px] gap-[10px] px-[10px] py-[15px] rounded-[10px] font-battambang text-lg font-bold text-[#0C1D1E] flex items-center justify-center mt-5 transition-all duration-200 hover:brightness-110 hover:scale-105"
          style={{
            background:
              "linear-gradient(0deg, #C39B2E, #FBC941), radial-gradient(51.25% 98.5% at 48.75% 11.11%, #FBC941 0%, rgba(251, 201, 65, 0) 100%)",
          }}
          onClick={handleClick}
        >
          Quero participar
        </button>
      </div>
    </section>
  );
}