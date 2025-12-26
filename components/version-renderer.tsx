"use client";

import type { ReactElement, ReactNode } from "react";
import SplashScreenV4 from "@/app/components/SplashScreen/SplashScreenV4";
import Formv1 from "@/app/bldrc/[version]/v1";
import Formv2 from "@/app/bldrc/[version]/v2";

type RenderContext = {
  model: string | null;
  theme?: string;
};

type Renderer = (context: RenderContext) => ReactElement;

type VersionRendererProps = {
  version?: string;
  theme?: string;
  slug?: string[];
};

const withSplashV4 = (children: ReactNode) => <SplashScreenV4>{children}</SplashScreenV4>;

const renderers: Record<string, Renderer> = {
  v1: ({ model, theme }) =>
    withSplashV4(model === "2" ? <Formv1 /> : <Formv1 theme={theme ?? ""} />),
  v2: () => withSplashV4(<Formv2 />),
};

export function VersionRenderer({ version, theme, slug }: VersionRendererProps) {
  const model = slug?.[0] ?? null;
  const renderVersion = version ? renderers[version] : undefined;

  if (renderVersion) {
    return renderVersion({ model, theme });
  }

  // Evita "página em branco" quando a versão não existe/está malformada.
  // Se quiser, você pode trocar por um redirect explícito para uma versão padrão.
  return withSplashV4(<Formv1 theme={theme ?? "1"} />);
}

export default VersionRenderer;
