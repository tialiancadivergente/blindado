"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-custom-background text-custom-foreground border-t border-gray-800 py-6 p-10 md:p-6 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-3 md:space-y-0 space-x-0 md:space-x-6 mb-4 md:mb-0">
            <Link
              href="/privacy"
              className="text-foreground/70 text-xs md:text-sm hover:text-primary transition-colors text-center md:text-left"
            >
              POLÍTICA DE PRIVACIDADE
            </Link>
          </div>

          <div className="mb-4 md:mb-0 text-center">
            <Link href="/" className="flex justify-center">
              <img
                src="/images/logo.png"
                alt="Logo O Resgate dos Otimistas"
                className="w-auto"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end md:space-x-2">
            <span className="text-foreground/70 text-xs mb-2 md:mb-0 text-center md:text-right">
              COPYRIGHT © 2026 Blindado.
            </span>
            <span className="text-sm">Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
