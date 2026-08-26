import React from 'react';
import Logo from './Logo';

export default function SiteFooter() {
  return <footer className="border-t border-white/10 bg-[#020914] py-10"><div className="mx-auto grid max-w-7xl gap-8 px-5 text-sm text-muted md:grid-cols-[1fr_auto] md:px-8"><div><Logo/><p className="mt-5 max-w-md leading-6">Integração de sistemas e desenvolvimento de softwares sob medida para operações mais inteligentes, seguras e conectadas.</p></div><div className="space-y-2 md:text-right"><a href="mailto:contato@cognitiasolucoes.com" className="block hover:text-cyan">contato@cognitiasolucoes.com</a><a href="https://wa.me/5511980195401" target="_blank" rel="noreferrer" className="block hover:text-cyan">+55 11 98019-5401</a><p>São Paulo · SP</p></div><div className="border-t border-white/10 pt-6 text-xs md:col-span-2 md:flex md:items-center md:justify-between"><p>© {new Date().getFullYear()} Cognitia Soluções Inteligentes.</p><a href="#top" className="mt-3 inline-block hover:text-white md:mt-0">Voltar ao início ↑</a></div></div></footer>;
}
