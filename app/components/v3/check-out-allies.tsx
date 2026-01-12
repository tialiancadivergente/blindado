import Image from "next/image";
import React from "react";

export function CheckOutAllies() {
  return (
    <section className="flex flex-col items-center md:px-8 px-4 md:pt-14 md:pb-24 justify-start overflow-hidden z-0 bg-[#012224] bg-center bg-cover bg-no-repeat w-full h-full md:min-h-[561px] font-battambang">
      <div
        className={`lg:container text-white mx-auto lg:w-[1080px] w-full text-center`}
      >
        <h2 className="text-white text-[32px] font-bold font-battambang uppercase">
          Descubra como se libertar de tudo o que te travou em 2024 e aumente
          sua Permissão para finalmente conquistar o que deseja em 2025.
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center">
          <p className="text-[#FBC941] text-[24px] font-bold font-battambang">
            Confira como nossos aliados transformaram suas vidas
          </p>
          <Image
            src="/images/bldrc/v3/allies.webp"
            alt="Allies"
            width={652}
            height={570}
            className="mt-12"
          />
        </div>
      </div>
    </section>
  );
}
