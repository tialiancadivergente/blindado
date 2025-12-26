"use client";

import VersionRenderer from "@/components/version-renderer";
import { useParams } from "next/navigation";

export default function Home() {
  const { version, theme, slug } = useParams<{
    version?: string;
    theme?: string;
    slug?: string[];
  }>();

  return <VersionRenderer version={version} theme={theme} slug={slug} />;
}
