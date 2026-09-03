'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/#top', label: 'Início', section: '#top' },
  { href: '/#cognitia', label: 'Cognitia', section: '#cognitia' },
  { href: '/#solucoes', label: 'Soluções', section: '#solucoes' },
  { href: '/cases/usemetta', label: 'Projetos', section: null },
  { href: '/#contato', label: 'Contato', section: '#contato' },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.location.pathname !== '/') {
        setActiveHref(
          window.location.pathname.startsWith('/cases/')
            ? '/cases/usemetta'
            : '',
        );
        return;
      }

      let nextActive = '/#top';
      navItems.forEach((item) => {
        if (!item.section) return;
        const section = document.querySelector(item.section);
        if (section && section.getBoundingClientRect().top <= 150) {
          nextActive = item.href;
        }
      });
      setActiveHref(nextActive);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}${isMenuOpen ? ' menu-open' : ''}`}>
      <div className="site-header-inner">
        <a className="brand" href="/" aria-label="Cognitia — início" onClick={closeMenu}>
          <span className="brand-lockup">
            <img className="brand-mark" src="/images/header-logo-mark.png" alt="" aria-hidden="true" />
            <img className="brand-wordmark" src="/images/header-logo-wordmark.png" alt="Cognitia Soluções Inteligentes" />
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a className={activeHref === item.href ? 'is-active' : ''} aria-current={activeHref === item.href ? 'page' : undefined} key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-secondary header-cta" href="/#contato">
          Fale conosco <ArrowRight size={16} />
        </a>
        <button className="mobile-menu-toggle" type="button" aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((current) => !current)}>
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mobile-navigation" id="mobile-navigation" aria-label="Navegação móvel">
          {navItems.map((item) => <a className={activeHref === item.href ? 'is-active' : ''} key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        </nav>
      )}
    </header>
  );
}
