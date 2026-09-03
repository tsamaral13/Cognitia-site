import {
  ArrowRight,
  Bot,
  Code2,
  Cpu,
  Factory,
  Layers3,
  Mail,
  MapPin,
  Network,
  Phone,
  RadioTower,
  ScanSearch,
  ShieldCheck,
  Waypoints,
} from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const whatsappUrl =
  'https://wa.me/5511980195401?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Cognitia%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o.';

const solutions = [
  { icon: Code2, title: 'Software sob medida', text: 'Plataformas, aplicativos e sistemas adaptados aos processos, dados e objetivos de cada operação.', href: '/solucoes/software-sob-medida' },
  { icon: Bot, title: 'IA & Visão Computacional', text: 'Identificação, análise de imagens, reconhecimento, monitoramento e inteligência em tempo real.', href: '/solucoes/seguranca-operacional' },
  { icon: ShieldCheck, title: 'Segurança Inteligente', text: 'Proteção de pessoas, ativos, perímetros e operações críticas com tecnologia aplicada ao contexto.', href: '/solucoes/seguranca-operacional' },
  { icon: MapPin, title: 'Localização & Dados', text: 'Localização de pessoas e ativos mesmo onde o GPS não funciona, integrada a zonas, alertas e imagens.', href: '/solucoes/seguranca-operacional#industria' },
  { icon: Network, title: 'Automação & Integração', text: 'Sensores, plataformas e sistemas trabalhando de forma coordenada em fluxos mais rápidos e confiáveis.', href: '/solucoes/seguranca-operacional' },
  { icon: Cpu, title: 'Sistemas Especiais', text: 'Tecnologias especializadas e arquiteturas sob medida para desafios além dos sistemas convencionais.', href: '/#contato' },
  { icon: RadioTower, title: 'Infraestrutura Crítica', text: 'Continuidade, supervisão e proteção de ambientes que exigem disponibilidade e alta responsabilidade.', href: '/solucoes/seguranca-operacional' },
];

const reasons = [
  ['01', 'Tecnologia certa para cada desafio', 'Partimos do problema, não do produto. Analisamos o cenário para estruturar a solução mais adequada.'],
  ['02', 'Tecnologias de ponta', 'Conectamos diferentes especialidades para entregar soluções modernas, eficientes e aplicáveis.'],
  ['03', 'Integração inteligente', 'Fazemos tecnologias, sistemas e dados trabalharem de forma coordenada dentro da operação.'],
  ['04', 'Do desafio à implementação', 'Acompanhamos a jornada desde a necessidade até a integração e a evolução da solução.'],
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero hero-legacy" aria-labelledby="hero-title">
        <img className="hero-image" src="/images/v9/hero-cognitia-v2.png" alt="Ecossistema de infraestruturas inteligentes e conectadas" />
        <div className="hero-overlay" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content page-shell">
          <p className="eyebrow">Tecnologia aplicada a desafios reais</p>
          <h1 id="hero-title">Tecnologia que transforma desafios em <span>soluções.</span></h1>
          <p className="hero-copy">Integramos tecnologias de ponta para aumentar a eficiência das operações e criar ambientes mais seguros, inteligentes e conectados.</p>
          <div className="hero-capabilities">
            <span><Bot size={16} /> IA &amp; Visão Computacional</span>
            <span><ShieldCheck size={16} /> Segurança Inteligente</span>
            <span><MapPin size={16} /> Localização &amp; Dados</span>
            <span><Network size={16} /> Automação &amp; Integração</span>
            <span><Code2 size={16} /> Software sob medida</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#solucoes">Conheça nossas soluções <ArrowRight size={18} /></a>
            <a className="button button-ghost" href="#contato">Conte seu desafio</a>
          </div>
        </div>
      </section>

      <section className="proof-strip legacy-proof" aria-label="Diferenciais da Cognitia">
        <div className="page-shell proof-strip-inner">
          <span><ShieldCheck size={18} /><strong>Soluções sob medida</strong></span>
          <span><Network size={18} /><strong>Tecnologia integrada</strong></span>
          <span><Waypoints size={18} /><strong>Foco em resultados</strong></span>
        </div>
      </section>

      <div className="technology-marquee" aria-label="Áreas de tecnologia">
        <div>
          {[0, 1].map((group) => <span key={group}>Software sob medida <i /> IA &amp; Visão Computacional <i /> Segurança Inteligente <i /> Localização &amp; Dados <i /> Automação &amp; Integração <i /> Sistemas Especiais <i /> Infraestrutura Crítica <i /></span>)}
        </div>
      </div>

      <section className="section page-shell legacy-about" id="cognitia">
        <div>
          <p className="eyebrow">A Cognitia</p>
          <h2>Tecnologia com propósito, integração e visão de futuro.</h2>
        </div>
        <div className="legacy-about-copy">
          <p>A Cognitia existe para resolver desafios que não cabem em soluções prontas. Combinamos leitura de cenário, conhecimento técnico e um ecossistema de tecnologias para construir respostas aplicáveis ao mundo real.</p>
          <p>Atuamos como parceiros de tecnologia: entendemos a operação, desenhamos a arquitetura, integramos sistemas e acompanhamos a implementação. Quando a necessidade exige uma solução própria, desenvolvemos softwares sob medida.</p>
          <div className="legacy-steps"><span><b>01</b>Entender</span><span><b>02</b>Estruturar</span><span><b>03</b>Implementar</span></div>
          <a className="text-link" href="/sobre">Conheça a Cognitia <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="section section-deep" id="solucoes">
        <div className="page-shell">
          <div className="section-heading legacy-heading">
            <div><p className="eyebrow">Soluções</p><h2>Um portfólio amplo para desafios complexos.</h2></div>
            <p>Da inteligência artificial aos sistemas especializados, integramos tecnologias para tornar operações mais inteligentes, seguras, eficientes e conectadas.</p>
          </div>
          <div className="solutions-grid">
            <a className="solution-card solution-lead" href="/solucoes/seguranca-operacional"><div className="icon-box"><Layers3 size={26} /></div><div><h3>Soluções integradas</h3><p>Combinamos tecnologias especializadas para resolver desafios complexos de operação, segurança e inteligência — do diagnóstico à implementação.</p><div className="solution-tags"><span>Diagnóstico</span><span>Arquitetura</span><span>Integração</span><span>Implementação</span></div></div><ArrowRight className="card-arrow" size={18} /></a>
            {solutions.map(({ icon: Icon, title, text, href }) => <a className="solution-card" href={href} key={title}><div className="icon-box"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p><ArrowRight className="card-arrow" size={18} /></a>)}
          </div>
        </div>
      </section>

      <section className="section page-shell" id="aplicacoes">
        <div className="section-heading legacy-heading">
          <div><p className="eyebrow">Soluções aplicadas</p><h2>Ecossistemas tecnológicos para operações reais.</h2></div>
          <p>Dispositivos, plataformas, dados e inteligência combinados para responder aos desafios específicos de cada ambiente.</p>
        </div>
        <div className="legacy-projects">
          <a className="legacy-project-card" href="/solucoes/seguranca-operacional#arenas"><div className="project-image"><img src="/images/v9/arena-command.webp" alt="Central de segurança integrada em uma arena" loading="lazy" /></div><div className="project-copy"><span className="project-label">Ecossistema integrado · Arenas &amp; eventos</span><h3>Localização e vídeo analítico trabalhando como uma única inteligência</h3><p>O diferencial do ecossistema está em cruzar dados de localização com imagens das câmeras, entregando contexto imediato sobre onde o evento ocorreu e o que está acontecendo.</p><ul><li>Eventos de localização direcionam a câmera e a equipe mais próximas</li><li>Imagens validam alertas e aceleram a resposta operacional</li></ul><strong>Conheça o ecossistema completo <ArrowRight size={17} /></strong></div></a>
          <a className="legacy-project-card" href="/solucoes/seguranca-operacional#industria"><div className="project-image"><img src="/images/v9/industrial-field.webp" alt="Profissional monitorado por analíticos de segurança industrial" loading="lazy" /></div><div className="project-copy"><span className="project-label">Indústria &amp; infraestrutura</span><h3>Ambientes que veem, localizam e reagem</h3><p>Localização mesmo sem GPS e vídeo analítico calibrado para cada área conectam operadores, riscos e imagens à mesma ocorrência.</p><ul><li>Uso de EPI, áreas não autorizadas e exposição a cargas suspensas</li><li>SOS, alertas e relatórios automáticos com posição e evidência visual</li></ul><strong>Conheça a plataforma integrada <ArrowRight size={17} /></strong></div></a>
          <a className="legacy-project-card project-drone" href="/solucoes/drones-automatizados"><div className="project-image"><img src="/images/v9/drone-industrial-vigilancia.png" alt="Drone seguindo uma rota virtual sobre uma instalação industrial" loading="lazy" /></div><div className="project-copy"><span className="project-label">Automação supervisionada</span><h3>Drones para vigilância e inspeção industrial</h3><p>Drones, câmeras, comunicação, análise de imagens e plataforma conectados para executar rondas programadas e gerar alertas.</p><ul><li>Rotas e pontos de inspeção configurados conforme o ambiente</li><li>Imagens, telemetria e alertas acessíveis remotamente</li></ul><strong>Conheça a solução e a regulamentação <ArrowRight size={17} /></strong></div></a>
        </div>
      </section>

      <section className="section section-deep" id="metodo">
        <div className="page-shell">
          <div className="section-heading legacy-heading"><div><p className="eyebrow">Por que a Cognitia</p><h2>Não vendemos tecnologia pela tecnologia.</h2></div><p>Entendemos o desafio, estruturamos a solução e conectamos as tecnologias necessárias para gerar valor real.</p></div>
          <ol className="reason-grid">{reasons.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </section>

      <section className="section section-deep trust-section">
        <div className="page-shell trust-layout"><div><p className="eyebrow">Confiança e responsabilidade</p><h2>Tecnologia avançada exige governança clara.</h2><p>Projetos com biometria, localização, vídeo e automação consideram finalidade, controle de acesso, proteção de dados, supervisão humana e limites operacionais desde a arquitetura.</p></div><div className="trust-points"><span><ShieldCheck size={21} /><b>Privacidade desde o projeto</b>LGPD e proteção de dados integradas às decisões técnicas.</span><span><ScanSearch size={21} /><b>Escopo verificável</b>Cobertura, precisão e responsabilidades documentadas.</span><span><Factory size={21} /><b>Implantação por contexto</b>A solução se adapta ao ambiente, não o contrário.</span></div></div>
      </section>

      <section className="contact-section" id="contato">
        <div className="page-shell contact-grid">
          <div><p className="eyebrow">Contato</p><h2>Vamos transformar seu desafio em solução?</h2><p>Conte sobre sua operação. A Cognitia analisa o cenário, identifica as tecnologias adequadas e estrutura uma solução sob medida.</p><a className="button whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">Iniciar conversa no WhatsApp <ArrowRight size={18} /></a></div>
          <address className="contact-card"><a href="tel:+5511980195401"><Phone size={20} /><span><small>Telefone e WhatsApp</small>+55 11 98019-5401</span></a><a href="mailto:contato@cognitiasolucoes.com"><Mail size={20} /><span><small>E-mail</small>contato@cognitiasolucoes.com</span></a><a href="https://maps.google.com/?q=Av.+Paulista,+1106,+Bela+Vista,+S%C3%A3o+Paulo,+SP,+01310-914" target="_blank" rel="noreferrer"><MapPin size={20} /><span><small>Endereço</small>Av. Paulista, 1106 · 16º andar — sala 1<br />Bela Vista · São Paulo, SP</span></a></address>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
