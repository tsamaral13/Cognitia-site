import type { Metadata } from 'next';
import { ArrowRight, Bot, CreditCard, LineChart, ReceiptText } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const title = 'Case UseMetta: software financeiro sob medida | Cognitia';
const description = 'Conheça a plataforma UseMetta, um produto digital com IA para organizar faturas, cartões, investimentos e metas financeiras.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/cases/usemetta' }, openGraph: { title, description, url: '/cases/usemetta', images: [{ url: '/images/case-usemetta.png', alt: 'Case UseMetta' }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/case-usemetta.png'] } };

export default function UseMettaCasePage() {
  return <main className="inner-main"><SiteHeader />
    <section className="inner-hero"><div className="page-shell"><div className="breadcrumbs"><a href="/">Início</a><span>/</span><span>Cases</span><span>/</span><span>UseMetta</span></div><p className="eyebrow">Case público · software desenvolvido pela Cognitia</p><h1>UseMetta: inteligência financeira orientada a objetivos.</h1><p className="lead">Uma necessidade de negócio transformada em plataforma digital para organizar dados financeiros e apoiar decisões mais claras.</p></div></section>
    <section className="detail-section alt"><div className="page-shell detail-split"><div className="detail-image"><img src="/images/case-usemetta.png" alt="Telas do produto digital UseMetta" /></div><div className="detail-copy"><p className="eyebrow">O produto</p><h2>Informações dispersas reunidas em uma experiência única.</h2><p>A UseMetta conecta faturas, cartões, investimentos, dividendos e objetivos em uma plataforma web responsiva.</p><ul className="bullet-list"><li>Leitura e categorização de faturas em PDF com IA</li><li>Comparação de milhas, cashback e benefícios</li><li>Acompanhamento de investimentos e dividendos</li><li>Metas financeiras conectadas ao patrimônio</li></ul></div></div></section>
    <section className="detail-section"><div className="page-shell"><div className="detail-heading"><p className="eyebrow">Capacidades demonstradas</p><h2>Um case que mostra produto, software e IA trabalhando juntos.</h2></div><div className="feature-grid"><article className="feature-card"><ReceiptText size={25} /><h3>Documentos com IA</h3><p>Extração e organização de informações de faturas.</p></article><article className="feature-card"><CreditCard size={25} /><h3>Regras de negócio</h3><p>Comparação de benefícios e escolhas financeiras.</p></article><article className="feature-card"><LineChart size={25} /><h3>Dados e acompanhamento</h3><p>Patrimônio e metas apresentados de forma utilizável.</p></article><article className="feature-card"><Bot size={25} /><h3>Automação útil</h3><p>IA aplicada a tarefas concretas, sem substituir a decisão do usuário.</p></article></div></div></section>
    <section className="detail-cta"><div className="page-shell detail-cta-inner"><h2>Conheça o produto ou leve um novo desafio à Cognitia.</h2><div className="hero-actions"><a className="button button-secondary" href="https://usemetta.com.br/" target="_blank" rel="noreferrer">Conhecer a UseMetta <ArrowRight size={17} /></a><a className="button button-primary" href="/#contato">Falar com a Cognitia <ArrowRight size={17} /></a></div></div></section>
    <SiteFooter />
  </main>;
}
