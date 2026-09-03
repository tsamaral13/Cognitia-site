import type { Metadata } from 'next';
import { ArrowRight, Bot, Braces, Database, Layers3, PlugZap, Smartphone } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const title = 'Software sob medida e produtos digitais | Cognitia';
const description = 'Plataformas, aplicativos, integrações e inteligência artificial desenhados em torno dos processos e objetivos do negócio.';

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: '/solucoes/software-sob-medida' },
  openGraph: { title, description, url: '/solucoes/software-sob-medida' },
  twitter: { card: 'summary', title, description },
};

const whatsappUrl = 'https://wa.me/5511980195401?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20software%20sob%20medida.';

export default function CustomSoftwarePage() {
  return <main className="inner-main"><SiteHeader />
    <section className="inner-hero"><div className="page-shell"><div className="breadcrumbs"><a href="/">Início</a><span>/</span><span>Soluções</span><span>/</span><span>Software sob medida</span></div><p className="eyebrow">Produtos digitais e software sob medida</p><h1>O software precisa se adaptar ao negócio — não o contrário.</h1><p className="lead">Transformamos processos, dados e objetivos em plataformas digitais que podem evoluir junto com a operação.</p></div></section>
    <section className="detail-section"><div className="page-shell"><div className="detail-heading"><p className="eyebrow">Capacidades</p><h2>Da primeira hipótese ao produto em funcionamento.</h2><p>A Cognitia conecta visão de negócio, experiência de uso, arquitetura e desenvolvimento em uma jornada coerente.</p></div><div className="feature-grid">
      <article className="feature-card"><Smartphone size={25} /><h3>Web e aplicativos</h3><p>Experiências responsivas para usuários, equipes e gestores.</p></article>
      <article className="feature-card"><PlugZap size={25} /><h3>Integração de sistemas</h3><p>APIs e fluxos que eliminam retrabalho e conectam informações.</p></article>
      <article className="feature-card"><Bot size={25} /><h3>IA aplicada</h3><p>Automação, leitura de documentos e apoio à decisão onde geram valor.</p></article>
      <article className="feature-card"><Database size={25} /><h3>Dados organizados</h3><p>Modelagem e visualização para tornar informação utilizável.</p></article>
      <article className="feature-card"><Layers3 size={25} /><h3>Produto evolutivo</h3><p>Arquitetura preparada para ampliar recursos e integrações.</p></article>
      <article className="feature-card"><Braces size={25} /><h3>Desenvolvimento próprio</h3><p>Camadas de software criadas para o contexto específico do projeto.</p></article>
    </div></div></section>
    <section className="detail-section"><div className="page-shell"><div className="detail-heading"><p className="eyebrow">Processo</p><h2>Escopo progressivo, decisões visíveis.</h2></div><ol className="method-grid"><li><span>01</span><h3>Descoberta</h3><p>Usuários, processo, restrições e indicadores de sucesso.</p></li><li><span>02</span><h3>Prototipação</h3><p>Fluxos e hipóteses validados antes do desenvolvimento amplo.</p></li><li><span>03</span><h3>Construção</h3><p>Entregas incrementais, testes e integrações priorizadas.</p></li><li><span>04</span><h3>Evolução</h3><p>Aprendizado de uso orientando as próximas versões.</p></li></ol></div></section>
    <section className="detail-cta"><div className="page-shell detail-cta-inner"><h2>Existe um processo que merece uma solução própria?</h2><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar sobre o projeto <ArrowRight size={18} /></a></div></section>
    <SiteFooter />
  </main>;
}
