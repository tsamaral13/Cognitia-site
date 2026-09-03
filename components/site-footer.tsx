import { Mail, MapPin, Phone } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div className="footer-brand">
          <img src="/images/logo-cognitia.png" alt="Cognitia Soluções Inteligentes" />
          <p>
            Integração de sistemas e desenvolvimento de software para operações
            mais seguras, inteligentes e conectadas.
          </p>
        </div>
        <div>
          <h2>Soluções</h2>
          <a href="/solucoes/seguranca-operacional">Segurança operacional</a>
          <a href="/solucoes/drones-automatizados">Drones automatizados</a>
          <a href="/solucoes/software-sob-medida">Software sob medida</a>
          <a href="/cases/usemetta">Case UseMetta</a>
        </div>
        <div>
          <h2>Empresa</h2>
          <a href="/sobre">A Cognitia</a>
          <a href="/#metodo">Como atuamos</a>
          <a href="/privacidade">Política de privacidade</a>
        </div>
        <div className="footer-contact">
          <h2>Contato</h2>
          <a href="tel:+5511980195401"><Phone size={15} /> +55 11 98019-5401</a>
          <a href="mailto:contato@cognitiasolucoes.com"><Mail size={15} /> contato@cognitiasolucoes.com</a>
          <span><MapPin size={15} /> Av. Paulista, 1106 · São Paulo, SP</span>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/cognitiasolucoes" target="_blank" rel="noreferrer" aria-label="LinkedIn da Cognitia"><span aria-hidden="true">in</span></a>
            <a href="https://www.instagram.com/cognit.ia/" target="_blank" rel="noreferrer" aria-label="Instagram da Cognitia"><span aria-hidden="true">IG</span></a>
          </div>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© 2026 Cognitia Soluções Inteligentes.</span>
        <span>São Paulo · Brasil</span>
      </div>
    </footer>
  );
}
