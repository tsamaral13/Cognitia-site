import type { Metadata } from 'next';
import { Bot, CheckCircle2, Code2, Network, ShieldCheck } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const title = 'A Cognitia | Integração de tecnologia e software';
const description = 'Conheça a forma de atuação da Cognitia: diagnóstico, arquitetura, integração e desenvolvimento de soluções para operações reais.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/sobre' }, openGraph: { title, description, url: '/sobre', images: [{ url: '/og.png', alt: 'Cognitia' }] }, twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] } };

export default function AboutPage() {
  return <main className="inner-main"><SiteHeader />
    <section className="inner-hero"><div className="page-shell"><div className="breadcrumbs"><a href="/">Início</a><span>/</span><span>A Cognitia</span></div><p className="eyebrow">A Cognitia</p><h1>Tecnologia com propósito, integração e responsabilidade.</h1><p className="lead">Ajudamos empresas a estruturar soluções que não cabem em um produto pronto — conectando leitura de cenário, arquitetura, integração e software.</p></div></section>
    <section className="detail-section"><div className="page-shell detail-split"><div className="detail-copy"><p className="eyebrow">Nosso papel</p><h2>Transformar complexidade em um caminho executável.</h2><p>A Cognitia atua como parceira de tecnologia. Entendemos a operação, estruturamos a arquitetura, selecionamos componentes compatíveis e desenvolvemos as camadas de software necessárias.</p><p>Quando a melhor resposta é uma combinação de tecnologias existentes, integramos. Quando o desafio exige uma solução própria, desenvolvemos.</p></div><div className="credibility-list"><div><Network size={21} /><span><strong>Integração</strong>Sistemas e dados trabalhando como parte da mesma operação.</span></div><div><Code2 size={21} /><span><strong>Desenvolvimento</strong>Software criado em torno de processos e objetivos reais.</span></div><div><ShieldCheck size={21} /><span><strong>Responsabilidade</strong>Governança, limites e supervisão considerados desde o projeto.</span></div></div></div></section>
    <section className="detail-section alt"><div className="page-shell"><div className="detail-heading"><p className="eyebrow">Princípios de trabalho</p><h2>O que orienta nossas decisões.</h2></div><div className="feature-grid"><article className="feature-card"><CheckCircle2 size={25} /><h3>Problema antes do produto</h3><p>A necessidade define a tecnologia, e não o contrário.</p></article><article className="feature-card"><Network size={25} /><h3>Arquitetura aberta</h3><p>Compatibilidade e evolução acima de dependência desnecessária.</p></article><article className="feature-card"><Bot size={25} /><h3>Automação responsável</h3><p>IA e automação com finalidade, limites e supervisão claros.</p></article></div></div></section>
    <section className="detail-cta"><div className="page-shell detail-cta-inner"><h2>Vamos entender se a Cognitia é a parceira certa para o seu desafio?</h2><a className="button button-primary" href="/#contato">Conversar com a Cognitia</a></div></section>
    <SiteFooter />
  </main>;
}
