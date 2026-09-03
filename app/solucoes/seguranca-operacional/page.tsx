import type { Metadata } from 'next';
import { ArrowRight, Bot, Camera, MapPin, Network, RadioTower, ShieldCheck } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const title = 'Segurança e operações inteligentes | Cognitia';
const description = 'Localização, vídeo analítico, sensores e plataformas integrados para dar contexto aos alertas e apoiar respostas operacionais.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/solucoes/seguranca-operacional' },
  openGraph: { title, description, url: '/solucoes/seguranca-operacional', images: [{ url: '/images/central-arena.webp', alt: 'Central integrada de segurança operacional' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/central-arena.webp'] },
};

const whatsappUrl = 'https://wa.me/5511980195401?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20seguran%C3%A7a%20e%20opera%C3%A7%C3%B5es%20inteligentes.';

export default function SecurityOperationsPage() {
  return (
    <main className="inner-main">
      <SiteHeader />
      <section className="inner-hero">
        <div className="page-shell">
          <div className="breadcrumbs"><a href="/">Início</a><span>/</span><span>Soluções</span><span>/</span><span>Segurança operacional</span></div>
          <p className="eyebrow">Segurança e operações inteligentes</p>
          <h1>A localização informa onde. O vídeo mostra o contexto. A integração coordena a resposta.</h1>
          <p className="lead">Conectamos pessoas, ativos, zonas, câmeras, sensores e regras para transformar sinais dispersos em informação operacional.</p>
        </div>
      </section>

      <section className="detail-section">
        <div className="page-shell">
          <div className="detail-heading"><p className="eyebrow">Arquitetura integrada</p><h2>Do alerta isolado à visão compartilhada da operação.</h2><p>A combinação exata depende do ambiente. A Cognitia dimensiona cada camada e integra os componentes compatíveis com a infraestrutura e o risco do projeto.</p></div>
          <div className="feature-grid">
            <article className="feature-card"><MapPin size={25} /><h3>Localização onde o GPS não alcança</h3><p>Posição de pessoas e ativos em ambientes internos, subterrâneos, túneis e outras áreas sem sinal de GPS.</p></article>
            <article className="feature-card"><Camera size={25} /><h3>Localização + vídeo</h3><p>A posição da ocorrência é cruzada com as câmeras da área para entregar contexto visual à central.</p></article>
            <article className="feature-card"><RadioTower size={25} /><h3>Botão SOS</h3><p>O acionamento informa quem pediu ajuda e onde a pessoa está para orientar uma resposta mais rápida.</p></article>
            <article className="feature-card"><Network size={25} /><h3>Integrações</h3><p>Dados e alertas trafegando entre sistemas sem criar uma nova ilha de informação.</p></article>
            <article className="feature-card"><Bot size={25} /><h3>Regras e automação</h3><p>Fluxos configurados para priorizar eventos e direcionar a equipe adequada.</p></article>
            <article className="feature-card"><ShieldCheck size={25} /><h3>Governança</h3><p>Controle de acesso, rastreabilidade e proteção de dados definidos desde o projeto.</p></article>
          </div>
        </div>
      </section>

      <section className="detail-section alt" id="arenas"><div className="page-shell detail-split"><div className="detail-image"><img src="/images/central-arena.webp" alt="Central de comando integrada em uma arena" /></div><div className="detail-copy"><p className="eyebrow">Arenas e eventos</p><h2>Localização e vídeo analítico conectados à mesma ocorrência.</h2><p>Mesmo em áreas internas ou de grande concentração, onde o GPS convencional perde precisão, a central pode localizar equipes e associar cada ocorrência à zona, às câmeras próximas e aos responsáveis pela resposta.</p><ul className="bullet-list"><li>Localização de segurança, brigada e atendimento médico por zona</li><li>SOS identificado com posição e imagens das câmeras próximas</li><li>Vídeo analítico para validar o contexto e priorizar a resposta</li><li>Histórico com localização, horário e evidência visual</li></ul></div></div></section>

      <section className="detail-section" id="industria"><div className="page-shell detail-split"><div className="detail-copy"><p className="eyebrow">Indústria e infraestrutura</p><h2>Localização precisa e analíticos calibrados para os riscos de cada área.</h2><p>Em galpões, plantas industriais, minerações ou túneis, a plataforma localiza operadores mesmo onde o GPS não funciona. Se houver um incidente ou acionamento de SOS, a central identifica a posição e acessa as imagens das câmeras daquela área para coordenar a resposta.</p><ul className="bullet-list"><li>Análise do uso dos EPIs exigidos em cada zona</li><li>Alertas de presença em áreas com cargas suspensas</li><li>Identificação de acesso ou permanência em áreas não autorizadas</li><li>Cruzamento da localização do evento com as câmeras próximas</li><li>Alertas e relatórios automáticos com área, horário e evidência visual</li></ul></div><div className="detail-image"><img src="/images/v9/industrial-field.webp" alt="Analíticos de EPI, localização e áreas autorizadas em ambiente industrial" /></div></div></section>

      <section className="detail-section alt" id="aeroportos"><div className="page-shell detail-split"><div className="detail-image"><img src="/images/aeroporto.webp" alt="Operação aeroportuária em área externa" /></div><div className="detail-copy"><p className="eyebrow">Aeroportos e ambientes distribuídos</p><h2>Equipes, ocorrências e imagens conectadas em uma operação extensa.</h2><p>De terminais e corredores de serviço a pátios e áreas restritas, a solução mantém a referência de localização onde o GPS é indisponível ou impreciso. Um SOS ou alerta de zona chega à central com a identidade, a posição e as câmeras relacionadas ao evento.</p><ul className="bullet-list"><li>Localização de equipes em áreas internas, operacionais e restritas</li><li>Botão SOS com identificação e posição de quem solicita apoio</li><li>Alertas de entrada, saída ou permanência em zonas configuradas</li><li>Cruzamento da ocorrência com as câmeras próximas para validação visual</li><li>Registro automático de horário, deslocamento e evidências do atendimento</li></ul></div></div></section>

      <section className="detail-section"><div className="page-shell credibility-section"><div><p className="eyebrow">Uso responsável</p><h2>Mais tecnologia exige mais clareza de responsabilidade.</h2><p className="credibility-copy">Biometria, reconhecimento facial e monitoramento precisam de finalidade definida, base legal, segurança da informação, avaliação de acurácia e revisão humana. Recursos e precisão variam conforme o ambiente e a arquitetura.</p></div><div className="credibility-list"><div><ShieldCheck size={21} /><span><strong>LGPD desde a arquitetura</strong>Dados pessoais e sensíveis tratados conforme finalidade e controles do projeto.</span></div><div><Bot size={21} /><span><strong>Decisão assistida</strong>Alertas apoiam profissionais autorizados; não substituem responsabilidade humana.</span></div><div><Network size={21} /><span><strong>Escopo verificável</strong>Cobertura, precisão e integrações documentadas conforme a implantação.</span></div></div></div></section>

      <section className="detail-cta"><div className="page-shell detail-cta-inner"><h2>Quer avaliar essa arquitetura para sua operação?</h2><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar com a Cognitia <ArrowRight size={18} /></a></div></section>
      <SiteFooter />
    </main>
  );
}
