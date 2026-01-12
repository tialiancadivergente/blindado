"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { getTagIdByTemperature } from "@/lib/temperature-utils";
import Footer from "@/components/footer";
import { CycleRepeats } from "@/app/components/v3/cycle-repeats";
import { TheWarning } from "@/app/components/v3/the-warning";
import { FivePillars } from "@/app/components/v3/five-pillars";
import { ThreeFreeClasses } from "@/app/components/v3/three-free-classes";
import { WhoIsItFor } from "@/app/components/v3/who-is-it-for";
import { DecisionHands } from "@/app/components/v3/decision-hands";
import { CheckOutAllies } from "@/app/components/v3/check-out-allies";
import EltonEuler from "@/app/components/v3/elton-euler";

export default function Formv3({ theme = "1" }: { theme?: string }) {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [temperatura, setTemperatura] = useState<string | null>(null);
  const [tipo, setTipo] = useState<string | null>(null);
  const [versao, setVersao] = useState<string | null>(null);
  const [formFields, setFormFields] = useState<Record<string, string> | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ddi, setDdi] = useState("+55");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [domain, setDomain] = useState<string>("");
  const [redLine, setRedLine] = useState<string | null>(null);
  const [titleRedLine, setTitleRedLine] = useState<React.ReactNode | null>(
    null
  );
  const [isLogo, setIsLogo] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isPicture, setIsPicture] = useState(false);
  const [percent, setPercent] = useState<string | null>(null);
  const [tagId, setTagId] = useState<number | null>(null);
  const [themeValue, setThemeValue] = useState<string>(theme);
  const fullUrl = Object.values(params).flat().join("/");

  const launch = "[BLD][JAN26]";

  const handleClick = () => {
    setIsSubmitting(true);

    // Pequeno atraso para garantir que a página tenha tempo de renderizar completamente
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

  // Mapeamento do theme para a imagem de background
  const themeBackgroundMap: Record<string, string> = {
    "1": "/images/bldrc/bg-blindado.webp",
    "2": "/images/v4/BG-ORO.webp",
  };

  const themeMobileBackgroundMap: Record<string, string> = {
    "2": "/images/v4/ORO-Mobile.webp",
    "1": "/images/bldrc/bg-blindado-mobile.webp",
  };

  // Capturar o domínio da página
  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window !== "undefined") {
      const currentDomain = window.location.hostname;
      console.log("Current domain:", currentDomain);
      setDomain(currentDomain);
    }
  }, []);

  // Capturar UTMs da queryString
  useEffect(() => {
    if (searchParams) {
      const utmParams: Record<string, string> = {};
      let hasUtm = false;

      // Lista de parâmetros UTM comuns
      const utmKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "utm_id",
      ];

      // Verificar cada parâmetro UTM
      utmKeys.forEach((key) => {
        const value = searchParams.get(key);
        if (value) {
          utmParams[key] = value;
          hasUtm = true;
        }
      });

      // Adicionar outros parâmetros da query que não são UTM
      searchParams.forEach((value, key) => {
        if (!utmKeys.includes(key) && key !== "temperatura") {
          utmParams[key] = value;
          hasUtm = true;
        }
      });

      // Definir formFields apenas se houver UTMs
      if (hasUtm) {
        console.log("UTM params:", utmParams);
        setFormFields(utmParams);
      }
    }
  }, [searchParams]);

  // Mapeamento dos benefícios para exibição
  const benefitsMapping = [
    {
      id: "h1",
      isPicture: false,
      isLogo: true,
      title: (
        <div
          className={`max-w-md sm:text-xl text-base uppercase font-normal leading-7 md:-leading-10 `}
        >
          Faça seu diagnóstico de{" "}
          <span className="text-[#c0964b] sm:text-4xl text-2xl font-bold ">
            DEPENDÊNCIA EMOCIONAL
          </span>{" "}
          gratuito
        </div>
      ),
      text: (
        <p className={`sm:text-xl text-base`}>
          Descubra como AUMENTAR O SEU NÍVEL DE PERMISSÃO e melhorar seus
          resultados nas finanças, nos relacionamentos e na saúde.
        </p>
      ),
    },
    {
      id: "h2",
      isPicture: false,
      isLogo: true,
      title: (
        <div
          className={`md:max-w-md w-full max-w-[450px] mx-auto md:mx-0 md:text-3xl/10 text-[22px] font-normal leading-7 md:-leading-10 font-battambang flex flex-col md:gap-6 gap-2`}
        >
          <p className="font-bold text-white">
            <span className="text-[#F5C43F]">
              CHEGA DE COMEÇAR O ANO CHEIO DE PLANOS E TERMINAR COM FRUSTRAÇÃO.
            </span>{" "}
            PREPARE-SE PARA BLINDAR SUA VIDA FINANCEIRA, EMOCIONAL E FÍSICA EM
            2025 – E NUNCA MAIS FICAR TRAVADO NO MESMO LUGAR.
          </p>
        </div>
      ),
      text: (
        <p
          className={`font-mulish max-w-[450px] mx-auto md:mx-0 text-[#F4F0E1] md:text-2xl text-[20px]/6`}
        >
          Se você não aplicar esse programa, seu ano novo vai ser roubado de
          novo!
        </p>
      ),
    },
  ];

  useEffect(() => {
    if (params && params.temperature) {
      console.log("temperatura param", params.temperature);
      let tipoValue = params.headline;
      const versaoValue = params.version;
      const temperaturaValue = params.temperature;
      const isDarkValue = params.theme;

      // Atualizar themeValue com base nos params ou props
      const currentTheme = theme;
      setThemeValue(currentTheme);

      if (isDarkValue === "2") {
        setIsDark(false);
      } else {
        setIsDark(true);
      }

      const redLineVersion = params.headline;
      tipoValue = `redline-${redLineVersion}`;
      console.log("RedLine Version:", redLineVersion);
      const redLineText = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.text;
      const titleRedLineText = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.title;
      const _isLogo = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.isLogo;
      const _isPicture = benefitsMapping.find(
        (benefit) => benefit.id === redLineVersion
      )?.isPicture;
      if (redLineText) {
        setRedLine(redLineText as unknown as string);
        console.log("RedLine:", redLineText);
      }

      if (titleRedLineText) {
        setTitleRedLine(titleRedLineText);
        console.log("Title RedLine:", titleRedLineText);
      }

      if (_isPicture !== undefined) {
        setIsPicture(_isPicture);
      }

      if (_isLogo !== undefined) {
        setIsLogo(_isLogo);
      }

      console.log("Tipo:", tipoValue);
      console.log("Versão:", versaoValue);
      console.log("Temperatura:", temperaturaValue);

      setTipo(tipoValue);
      setVersao(versaoValue as string);
      setTemperatura(temperaturaValue as string);

      // Definir tagId baseado na temperatura
      const calculatedTagId = getTagIdByTemperature(temperaturaValue as string);
      setTagId(calculatedTagId);
      console.log("TagId definido:", calculatedTagId);
    }
  }, [params]);

  // Função para construir a URL de redirecionamento
  const buildRedirectUrl = () => {
    // Construir o path base com os valores dinâmicos
    const basePath = `/quest/${params.headline}/${params.version}/${
      params.temperature
    }/${params.slug?.[0] || ""}/${isDark ? "1" : "2"}/typ`;

    // Iniciar com os parâmetros de email e telefone
    const queryParams = new URLSearchParams();
    queryParams.append("email", email);
    queryParams.append(
      "phone",
      `${ddi}${whatsapp.replace(/\s+|-|\(|\)|\./g, "")}`
    );

    // Adicionar UTMs se existirem
    if (formFields) {
      Object.entries(formFields).forEach(([key, value]) => {
        queryParams.append(key, value);
      });
    }

    // Construir a URL completa
    return `${basePath}?${queryParams.toString()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const cleanedPhone = whatsapp.replace(/\s+|-|\(|\)|\./g, "");

      const fullPhone = `${ddi}${cleanedPhone}`;

      // Preparar o payload para a API
      const payload: Record<string, any> = {
        email,
        phone: fullPhone,
        temperature: temperatura,
        tipo,
        version: versao,
        parametroCompleto: fullUrl,
        domain,
        uri: domain,
        tagId: tagId,
        launch,
        path: window.location.pathname,
      };

      // Adicionar formFields ao payload apenas se existir
      if (formFields) {
        payload.formFields = formFields;
      }

      const response = await fetch("/api/register-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha ao registrar lead");
      }

      // Preparar dados para localStorage
      const leadData: Record<string, any> = {
        email,
        whatsapp: fullPhone,
        temperature: temperatura,
        tipo,
        version: versao,
        launch,
        domain,
        parametroCompleto: fullUrl,
        date: new Date().toISOString(),
      };

      // Adicionar formFields aos dados do localStorage apenas se existir
      if (formFields) {
        leadData.formFields = formFields;
      }

      const leads = JSON.parse(localStorage.getItem("leads") || "[]");
      leads.push(leadData);
      localStorage.setItem("leads", JSON.stringify(leads));

      setSuccess(true);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    } finally {
      setIsSubmitting(false);

      // Redirecionar após um breve delay para mostrar a mensagem de sucesso
      setTimeout(() => {
        const redirectUrl = buildRedirectUrl();

        const funnels = {
          q: "https://sf.aliancadivergente.com.br/sf/?sfunnel=48",
          m: "https://sf.aliancadivergente.com.br/sf/?sfunnel=39",
          f: "https://sf.aliancadivergente.com.br/sf/?sfunnel=31",
        };

        // Adicionar parâmetros da URL atual
        const currentUrl = new URL(window.location.href);
        const currentParams = new URLSearchParams(currentUrl.search);

        // Construir URLs com parâmetros adicionais
        Object.keys(funnels).forEach((key) => {
          const url = new URL(funnels[key as keyof typeof funnels]);

          // Adicionar todos os parâmetros da URL atual
          currentParams.forEach((value, param) => {
            url.searchParams.append(param, value);
          });

          const fullPhone = whatsapp.replace(/\s+|-|\(|\)|\./g, "");
          // Adicionar email, telefone e país
          url.searchParams.append("email", email);
          url.searchParams.append("phone", fullPhone);
          url.searchParams.append("country", ddi.replace("+", ""));

          // Atualizar a URL no objeto funnels
          funnels[key as keyof typeof funnels] = url.toString();
        });

        // if (Object.keys(funnels).includes(temperatura || '')) {
        //   window.location.href = funnels[temperatura as keyof typeof funnels];
        //   return; // Interrompe a execução para evitar o redirecionamento padrão
        // }

        if (typeof window !== "undefined") {
          window.history.pushState({}, "", redirectUrl);
        }

        // Usar window.location.href para navegação completa
        if (typeof window !== "undefined") {
          window.location.href = redirectUrl;
        }
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "whatsapp") {
      // Remove todos os caracteres não numéricos
      const numericValue = value.replace(/\D/g, "");

      // Aplica a formatação de acordo com a quantidade de dígitos
      let formattedValue = numericValue;
      if (ddi === "+55") {
        // Formato brasileiro: (XX) XXXXX-XXXX
        if (numericValue.length <= 2) {
          formattedValue = numericValue;
        } else if (numericValue.length <= 7) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(
            2
          )}`;
        } else {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(
            2,
            7
          )}-${numericValue.slice(7, 11)}`;
        }
      } else {
        // Formato genérico para outros países
        if (numericValue.length > 3 && numericValue.length <= 7) {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(
            3
          )}`;
        } else if (numericValue.length > 7) {
          formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(
            3,
            7
          )}-${numericValue.slice(7)}`;
        }
      }

      setWhatsapp(formattedValue);
    } else {
      setWhatsapp(value);
    }
  };

  // Obter o caminho da imagem de background baseado no theme
  const backgroundImage =
    themeBackgroundMap[themeValue] || themeBackgroundMap["2"];
  const backgroundImageMobile =
    themeMobileBackgroundMap[themeValue] || themeMobileBackgroundMap["2"];

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          #hero-section {
            background-image: url('${backgroundImage}');
          }
          @media (max-width: 767px) {
            #hero-section {
              background-image: url('/images/bldrc/bg-blindado-mobile.webp');
            }
          }
        `,
        }}
      />
      <section
        id="hero-section"
        className="flex flex-col items-center md:px-8 md:py-8 pb-4 justify-start overflow-hidden z-0 bg-[#012224] bg-top md:bg-top bg-cover bg-no-repeat w-full md:h-full md:min-h-screen h-[1208px] font-battambang"
      >
        <div
          className={`lg:container mx-auto md:px-4 pb-10 relative lg:w-[1080px] w-full`}
        >
          {/* Coluna única centralizada ou duas colunas */}
          <div className="w-full">
            {isLogo && (
              <div
                className={`md:mb-8 mb-4 flex md:justify-start justify-center items-center font-bold text-[#CCCCCC] gap-16 h-[162px] md:h-auto md:bg-none bg-[url('/images/bldrc/hd-blindado-mobile.webp')] bg-cover bg-center bg-no-repeat`}
              >
                <Image
                  src={
                    isDark
                      ? "/images/bldrc/logo-blindado.png"
                      : "/images/logo-o-resgate-dos-otimistas.png"
                  }
                  alt="Logotipo Resgate dos otimistas"
                  width={134}
                  height={72}
                  priority
                  className="object-contain select-none max-w-[134px] pointer-events-none"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <span className="hidden md:block font-battambang">
                  Dias 19, 20 e 21 de Janeiro de 2026
                  <p className="text-[#F5C43F] text-base font-bold mt-1">
                    Workshop prático, online e gratuito
                  </p>
                </span>
              </div>
            )}
            <p className="md:hidden text-center text-[#CCCCCC] text-base font-bold mb-2 py-2">
              Dias 19, 20 e 21 de Janeiro de 2026
            </p>
            <div className="md:mt-20 md:text-left text-center">
              {!titleRedLine ? (
                <>
                  <p className="text-[#f4f0e1] lg:text-2xl md:text-2xl text-xs mb-1">
                    FAÇA SEU DIAGNÓSTICO DE
                  </p>
                  <h2 className="text-[#c0964b] text-2xl lg:text-5xl md:text-5xl font-bold mb-1">
                    DEPENDÊNCIA
                  </h2>
                  <h2 className="text-[#c0964b] text-2xl lg:text-5xl md:text-5xl font-bold">
                    EMOCIONAL{" "}
                  </h2>
                  <span className="text-[#D3CAC0] text-2xl lg:text-3xl md:text-3xl block md:inline">
                    GRATUITO
                  </span>
                </>
              ) : (
                <>
                  <div
                    className={`text-2xl lg:text-5xl md:max-w-2xl w-full px-4 leading-none ${
                      isDark ? "text-[#f4f0e1]" : "text-[#07242c]"
                    }`}
                  >
                    {titleRedLine}
                  </div>
                </>
              )}
            </div>

            <div className="mb-4 sm:mb-8 sm:mt-6 mt-2 flex items-center justify-center md:text-left text-center md:max-w-[486px] max-w-full px-4">
              {redLine ? (
                <span>{redLine}</span>
              ) : (
                <>
                  Descubra como{" "}
                  <span className="font-bold">
                    AUMENTAR O SEU NÍVEL DE PERMISSÃO
                  </span>{" "}
                  e melhorar seus resultados nas finanças, nos relacionamentos e
                  na saúde.
                </>
              )}
            </div>
            <form
              onSubmit={handleSubmit}
              id="cadastro"
              name={launch}
              className={`space-y-4 md:max-w-[486px] max-w-[420px] mx-auto md:mx-0 px-4 md:px-0`}
            >
              <div>
                <input
                  type="email"
                  id="form-field-email"
                  placeholder="Seu melhor e-mail"
                  className={`w-full px-4 py-3 bg-[#d2cabf] border border-[#EDEDED] rounded-xl text-[#202a21] placeholder:text-[#202a21] font-mulish`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:flex hidden items-center pointer-events-none">
                  <Phone size={18} className="text-[#202a21]" />
                </div>
                <div className="flex">
                  <select
                    className={`py-3 sm:pl-10 pl-0 sm:pr-2 pr-1 bg-[#d2cabf] border border-[#EDEDED] rounded-l-xl rounded-r-none border-r-0 text-[#202a21] focus:ring-0 focus:outline-none font-mulish`}
                    value={ddi}
                    onChange={(e) => setDdi(e.target.value)}
                  >
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+351">🇵🇹 +351</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+54">🇦🇷 +54</option>
                    <option value="+56">🇨🇱 +56</option>
                    <option value="+57">🇨🇴 +57</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Seu WhatsApp"
                    id="form-field-telefone"
                    className={`flex-1 sm:px-4 px-1 py-3 bg-[#d2cabf] border border-[#EDEDED] rounded-r-xl border-l-0 text-[#202a21] focus:outline-none placeholder:text-[#202a21] font-mulish`}
                    value={whatsapp}
                    onChange={handleChange}
                    name="whatsapp"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C0964B] text-[#FFF] rounded-xl font-bold font-battambang md:py-3 py-2 px-6 text-lg tracking-wide transition-all hover:brightness-110"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting
                    ? "PROCESSANDO..."
                    : success
                    ? "SUCESSO! AGUARDE..."
                    : "Quero me Inscrever"}
                </span>
              </button>
            </form>
          </div>

          {isPicture && (
            <div className="w-full h-full -mt-14 md:mt-6">
              <Image
                src="/images/foto.png"
                alt="Picture"
                width={600}
                height={400}
              />
            </div>
          )}
        </div>
      </section>
      <CycleRepeats />
      <TheWarning />
      <FivePillars />
      <ThreeFreeClasses />
      <WhoIsItFor />
      <DecisionHands />
      <CheckOutAllies />
      <EltonEuler />
      <Footer />
    </div>
  );
}
