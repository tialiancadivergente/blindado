"use client";

import React from "react";
import { useState } from "react";
import Footer from "@/components/footer";

export default function EltonEuler() {
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

  const themeBackgroundMap: Record<string, string> = {
    "1": "/images/bldrc/v2/bg-blindado.webp",
    "2": "/images/v4/BG-ORO.webp",
  };

  const themeMobileBackgroundMap: Record<string, string> = {
    "2": "/images/v4/ORO-Mobile.webp",
    "1": "/images/bldrc/bg-blindado-mobile.webp",
  };

  const backgroundImage = themeBackgroundMap["1"] || themeBackgroundMap["2"];
  const backgroundImageMobile =
    themeMobileBackgroundMap["1"] || themeMobileBackgroundMap["2"];

  return (
    <div className="bg-[#012224]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          #elton-euler-section {
            background-image: url('/images/bldrc/v3/bg-elton-euler.webp');
          }
          @media (max-width: 767px) {
            #elton-euler-section {
              background-image: url('/images/bldrc/v2/bg-blindado-elton-euler-mobile.webp');
            }
          }
        `,
        }}
      />
      <section
        id="elton-euler-section"
        className="flex flex-col items-center md:px-8 px-4 md:py-8 pt-8 justify-start overflow-hidden z-0 bg-[#012224] bg-top sm:bg-top md:bg-cover bg-no-repeat w-full h-full md:min-h-[900px] font-battambang"
      >
        <div className="container mx-auto px-4 md:pb-10 pb-2 relative lg:w-[1080px] w-full flex flex-col items-end justify-center md:mt-[0px] mt-[420px]">
          <div className="md:w-1/2 w-full flex flex-col items-start justify-center md:mt-12 mt-0 gap-4">
            <p className="text-[#07242C] text-[32px] font-bold">
              QUEM VAI SER O SEU <br /> MENTOR NESSA JORNADA?
            </p>
            <p className="text-[#006D71] text-[22px] font-bold mb-4">
              <span className="font-extrabold">Elton Euler</span> - Líder e
              Idealizador <br /> da Aliança Divergente
            </p>
            <div className="text-[#07242C] text-base font-normal font-inter space-y-4">
              <p>
                Elton Euler é um dos maiores exemplos de superação e
                transformação da atualidade.
              </p>

              <p>
                Antes de se tornar multimilionário e referência no
                desenvolvimento humano, quebrou 17 vezes e chegou a acreditar
                que o sucesso não era pra ele.
              </p>

              <p>
                Decidido a mudar sua história, Elton descobriu o que realmente
                bloqueava seus resultados e, em menos de 3 anos, saiu das
                dívidas e construiu uma vida de prosperidade.
              </p>

              <p>
                Hoje, já apoiou mais de 60 mil pessoas em 40 países a
                destravarem suas vidas financeiras, relacionais, emocionais e
                sua saúde com técnicas práticas e poderosas.
              </p>

              <p>
                No 2026 Blindado, Elton vai te mostrar o que falta para você
                desbloquear sua Permissão e elevar seu ano a um novo patamar.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8 flex gap-20 items-center justify-center bg-[url('/images/bldrc/v3/bg-section-el.webp')] bg-center bg-cover bg-no-repeat w-full max-w-[972px] h-full md:min-h-[256px] -mt-14">
        <div className="max-w-[391px] text-white text-[22px] font-extrabold font-battambang">
          <p>
            Não perca a chance de{" "}
            <span className="text-[#FBC941]">BLINDAR SEU 2026</span> e
            transformar sua vida de uma vez por todas.
          </p>
          <p className="mt-4 font-normal">
            Ou fique parado no mesmo lugar, reclamando dos mesmos problemas.
          </p>
        </div>
        <div className="max-w-[258px]">
          <p className="text-white text-[14px] font-normal text-center mb-5 font-battambang">Clique no botão abaixo e inscreva-se gratuitamente agora!</p>
          <button
            className="w-full text-[#0C1D1E] rounded-[10px] font-bold font-battambang md:py-3 py-2 px-6 text-lg tracking-wide transition-all hover:brightness-110"
            style={{
              background:
                "linear-gradient(0deg, #C39B2E, #C39B2E), radial-gradient(51.25% 98.5% at 48.75% 11.11%, #FBC941 0%, rgba(251, 201, 65, 0) 100%)",
            }}
            onClick={handleClick}
          >
            Quero participar
          </button>
        </div>
      </section>
      <div className="h-20" />
    </div>
  );
}
