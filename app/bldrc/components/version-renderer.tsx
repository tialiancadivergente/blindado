"use client";

import type { ReactElement, ReactNode } from "react";
import SplashScreen from "@/app/components/SplashScreen";
import SplashScreenV4 from "@/app/components/SplashScreen/SplashScreenV4";
import Formv3 from "@/app/ordo/[version]/v3";
import Formv4 from "@/app/ordo/[version]/v4";
import Formv4_2 from "@/app/ordo/[version]/v4-2";
import Formv5 from "@/app/ordo/[version]/v5";
import Formv8 from "@/app/ordo/[version]/v8/indext";
import Formv10 from "@/app/ordo/[version]/v10";
import Formv11 from "@/app/ordo/[version]/v11";
import Formv13 from "@/app/ordo/[version]/v13";
import Formv16 from "@/app/ordo/[version]/v16";
import Formv19 from "@/app/ordo/[version]/v19";
import Formv20 from "@/app/ordo/[version]/v20";
import Formvt from "@/app/ordo/[version]/vt";
import QuizV1 from "@/app/ordo/[version]/vq-1";
import JourneySection from "@/components/journey-section";
import MentorSection from "@/components/mentor-section";
import Footer from "@/components/footer";

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

const withSplash = (children: ReactNode) => <SplashScreen>{children}</SplashScreen>;

const withSplashV4 = (children: ReactNode) => <SplashScreenV4>{children}</SplashScreenV4>;

const renderers: Record<string, Renderer> = {
  "vq-1": () => withSplashV4(<QuizV1 />),
  v3: () => withSplashV4(<Formv3 />),
  v4: ({ model, theme }) =>
    withSplashV4(model === "2" ? <Formv4_2 /> : <Formv4 theme={theme ?? ""} />),
  v5: () => withSplashV4(<Formv5 />),
  v8: () =>
    withSplash(
      <>
        <Formv8 />
        <JourneySection />
        <MentorSection />
        <Footer />
      </>
    ),
  v11: () => withSplash(<Formv11 />),
  v13: () => withSplash(<Formv13 />),
  v16: () => withSplash(<Formv16 />),
  v19: () => withSplash(<Formv19 />),
  vt: () => withSplash(<Formvt />),
  v20: () => withSplash(<Formv20 />),
};

export function VersionRenderer({ version, theme, slug }: VersionRendererProps) {
  const model = slug?.[0] ?? null;
  const renderVersion = version ? renderers[version] : undefined;

  if (renderVersion) {
    return renderVersion({ model, theme });
  }

  return withSplash(<Formv10 />);
}

export default VersionRenderer;
