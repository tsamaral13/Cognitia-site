import type { Metadata } from 'next';
import { ArrowRight, Bot, Camera, RadioTower, ShieldCheck, Waypoints } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const title = 'Drones automatizados para vigilância industrial | Cognitia';
const description = 'Integração de drones, câmeras, comunicação, análise de imagens e plataformas para rondas industriais automatizadas com supervisão humana.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/solucoes/drones-automatizados' },
  openGraph: { title, description, url: '/solucoes/drones-automatizados', images: [{ url: '/images/v9/drone-industrial-vigilancia.png', alt: 'Drone em ronda automatizada sobre uma instalação industrial' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/v9/drone-industrial-vigilancia.png'] },
};

const whatsappUrl = 'https://wa.me/5511980195401?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20integra%C3%A7%C3%A3o%20de%20drones%20para%20vigil%C3%A2ncia%20industrial.';

export default function DroneAutomationPage() {
  return (
    <main className="inner-main">
      <SiteHeader />
      <section className="inner-hero drone-hero">
        <img src="/images/v9/drone-industrial-vigilancia.png" alt="Drone seguindo uma rota de vigilância industrial" />
        <div className="drone-hero-overlay" />
        <div className="page-shell">
          <div className="breadcrumbs"><a href="/">Início</a><span>/</span><span>Soluções</span><span>/</span><span>Drones automatizados</span></div>
          <p className="eyebrow">Projeto &amp; Insight</p>
          <h1>Drones automatizados na indústria: segurança, supervisão e o limite da autonomia.</h1>
          <p className="lead">Integramos drones, câmeras, comunicação, análise de imagens e plataformas operacionais para rondas mais frequentes, rastreáveis e conectadas.</p>
        </div>
      </section>

      <section className="detail-section"><div className="page-shell"><div className="detail-heading"><p className="eyebrow">Uma operação conectada</p><h2>Do plano de voo à tomada de decisão.</h2><p>A Cognitia seleciona e conecta equipamentos, comunicação e tecnologias de parceiros. Quando necessário, desenvolve painéis e fluxos para unificar a operação.</p></div><div className="feature-grid">
        <article className="feature-card"><Waypoints size={25} /><h3>Missão e rota programadas</h3><p>Trajetos, horários, pontos de inspeção e zonas de maior atenção configurados conforme o ambiente.</p></article>
        <article className="feature-card"><Camera size={25} /><h3>Vigilância recorrente</h3><p>Imagens e telemetria transmitidas durante rondas supervisionadas.</p></article>
        <article className="feature-card"><Bot size={25} /><h3>Análise e alertas</h3><p>Recursos integrados podem sinalizar invasões, anomalias, focos de calor ou mudanças no ambiente.</p></article>
        <article className="feature-card"><RadioTower size={25} /><h3>Acompanhamento remoto</h3><p>Equipes autorizadas visualizam posição, histórico, imagens e alertas em uma plataforma operacional.</p></article>
      </div></div></section>

      <section className="detail-section alt"><div className="page-shell detail-split"><div className="detail-image drone-detail-image"><img src="/images/v9/drone-industrial-vigilancia.png" alt="Rota programada de inspeção por drone" /></div><div className="detail-copy"><p className="eyebrow">Automação supervisionada</p><h2>Automático não significa sem responsabilidade humana.</h2><p>O modelo operacional viável mantém uma pessoa autorizada acompanhando a missão e com capacidade de intervenção. A aeronave executa tarefas programadas, enquanto a responsabilidade e o controle permanecem definidos.</p><ul className="bullet-list"><li>Operação estruturada conforme o risco e o ambiente</li><li>Piloto remoto responsável pela condução segura</li><li>Capacidade de intervenção preservada</li><li>Autorizações avaliadas para cada cenário</li></ul></div></div></section>

      <section className="detail-section"><div className="page-shell credibility-section"><div><p className="eyebrow">Regulamentação brasileira</p><h2>Cada operação precisa ser analisada individualmente.</h2><p className="credibility-copy">Voos além da linha de visada visual, próximos de terceiros ou em cenários de maior risco podem exigir avaliação de risco, autorização da ANAC e autorização de acesso ao espaço aéreo pelo DECEA.</p><div className="hero-actions"><a className="button button-secondary" href="https://www.anac.gov.br/assuntos/legislacao/legislacao-1/boletim-de-pessoal/2026/bps-v-21-no-24-15-a-19-06-2026/rbac-100-emd-00/visualizar_ato_normativo" target="_blank" rel="noreferrer">Consultar RBAC nº 100</a><a className="button button-ghost" href="https://www.decea.mil.br/drone/" target="_blank" rel="noreferrer">Portal Drone do DECEA</a></div></div><div className="credibility-list"><div><ShieldCheck size={21} /><span><strong>Supervisão humana</strong>Autoridade e responsabilidade permanecem claramente atribuídas.</span></div><div><Waypoints size={21} /><span><strong>Missão documentada</strong>Rotas, zonas, pontos de inspeção e limites definidos no projeto.</span></div><div><Bot size={21} /><span><strong>Automação como apoio</strong>Análise e alertas ampliam a visão, sem eliminar a tomada de decisão responsável.</span></div></div></div></section>

      <section className="detail-cta"><div className="page-shell detail-cta-inner"><h2>Quer avaliar essa solução para sua operação?</h2><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar com a Cognitia <ArrowRight size={18} /></a></div></section>
      <SiteFooter />
    </main>
  );
}
