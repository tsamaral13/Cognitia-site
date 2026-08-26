import React, { useEffect } from 'react';
import {
  AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, Eye, ExternalLink,
  Radio, Route, ShieldCheck, Video, Workflow,
} from 'lucide-react';
import Logo from '@/components/Logo';
import SiteFooter from '@/components/SiteFooter';

const operationSteps = [
  {
    icon: Route,
    title: 'Missão e rota programadas',
    text: 'A plataforma organiza trajetos, horários, pontos de inspeção e zonas que precisam de maior atenção.',
  },
  {
    icon: Video,
    title: 'Vigilância aérea recorrente',
    text: 'O drone executa rondas supervisionadas e transmite imagens e telemetria durante a operação.',
  },
  {
    icon: AlertTriangle,
    title: 'Análise e geração de alertas',
    text: 'Recursos integrados de análise podem sinalizar invasões, anomalias, focos de calor ou mudanças no ambiente.',
  },
  {
    icon: Eye,
    title: 'Acompanhamento remoto',
    text: 'Equipes autorizadas visualizam imagens, posição, histórico e alertas por meio de uma plataforma operacional.',
  },
];

const regulationPoints = [
  'O piloto remoto continua diretamente responsável pela condução segura da aeronave.',
  'Durante a operação normal, deve ser possível a intervenção do piloto remoto em qualquer fase do voo.',
  'O piloto requerido deve permanecer na estação de pilotagem durante todas as fases da operação.',
  'Operações de maior risco podem exigir avaliação, autorização operacional e aprovação de projeto.',
];

export default function DroneArticlePage() {
  const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');

    document.title = 'Drones automatizados na indústria | Cognitia';
    description?.setAttribute('content', 'Como a Cognitia integra drones, plataformas, análise de imagens e alertas para vigilância industrial supervisionada.');

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <a href={`${import.meta.env.BASE_URL}#top`} aria-label="Voltar para o início da Cognitia"><Logo /></a>
          <a href={`${import.meta.env.BASE_URL}#projetos`} className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-primary/60 hover:bg-primary/10">
            <ArrowLeft className="h-4 w-4" /> Voltar aos projetos
          </a>
        </div>
      </header>

      <main>
        <article>
          <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-16 md:pb-24 md:pt-24">
            <div className="section-glow -right-40 top-0" />
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
              <div className="max-w-4xl">
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-cyan"><span className="h-px w-8 bg-current opacity-60" />Projeto &amp; Insight</p>
                <h1 className="font-display text-4xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-5xl lg:text-7xl">Drones automatizados na indústria: segurança, supervisão e o limite da autonomia.</h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">A Cognitia integra drones, câmeras, comunicação, análise de imagens e plataformas operacionais para viabilizar rondas industriais mais frequentes, rastreáveis e conectadas — sempre com supervisão humana e observância das autorizações aplicáveis.</p>
                <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[.12em] text-slate-400">
                  <span className="rounded-full border border-white/10 px-4 py-2">Automação supervisionada</span>
                  <span className="rounded-full border border-white/10 px-4 py-2">Vigilância industrial</span>
                  <span className="rounded-full border border-white/10 px-4 py-2">Monitoramento remoto</span>
                </div>
              </div>
              <figure className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#061225] shadow-[0_30px_100px_rgba(0,0,0,.35)]">
                <img src={asset('drone-industrial-vigilancia.png')} alt="Drone de vigilância seguindo uma rota virtual sobre uma instalação industrial" width="1664" height="936" fetchPriority="high" className="aspect-video h-auto w-full object-cover" />
                <figcaption className="border-t border-white/10 px-6 py-4 text-xs leading-5 text-slate-500">Conceito visual de uma ronda aérea automatizada, com rota e pontos de inspeção programados, supervisão humana e integração a uma plataforma de análise, monitoramento remoto e geração de alertas.</figcaption>
              </figure>
            </div>
          </section>

          <section className="py-20 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
              <div>
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-primary"><span className="h-px w-8 bg-current opacity-60" />A solução integrada</p>
                <h2 className="font-display text-4xl font-semibold tracking-[-.04em]">Uma operação conectada do voo à tomada de decisão.</h2>
                <div className="mt-7 rounded-2xl border border-primary/25 bg-primary/[.07] p-6">
                  <Workflow className="h-6 w-6 text-cyan" />
                  <p className="mt-4 text-sm leading-7 text-slate-300"><strong className="text-white">A Cognitia integra sistemas e também desenvolve software sob medida.</strong> Selecionamos e conectamos equipamentos, comunicação e tecnologias de parceiros qualificados. Quando necessário, criamos as camadas de software, painéis e fluxos que unificam a operação.</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {operationSteps.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[.025] p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-cyan"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-[#030d1b] py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-5 md:px-8">
              <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-cyan"><span className="h-px w-8 bg-current opacity-60" />Regulamentação brasileira</p>
              <h2 className="font-display text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Drones 100% autônomos são proibidos?</h2>
              <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
                <p>A resposta exige precisão. O RBAC nº 100, publicado pela ANAC em junho de 2026, não proíbe toda forma de automação. O regulamento permite o uso de recursos automáticos, mas preserva a responsabilidade, a autoridade e a capacidade de intervenção do piloto remoto.</p>
                <p>Na prática, uma aeronave que opere sem supervisão e sem qualquer possibilidade de intervenção humana não atende ao modelo operacional normal previsto atualmente. A proposta viável é a <strong className="text-white">automação supervisionada</strong>: o sistema executa tarefas programadas e apoia a análise, enquanto uma pessoa autorizada acompanha a missão e mantém o controle operacional.</p>
              </div>
              <div className="mt-10 grid gap-3">
                {regulationPoints.map((point) => <div key={point} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.025] p-4 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />{point}</div>)}
              </div>

              <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/[.05] p-6 text-sm leading-7 text-slate-300">
                <div className="flex items-center gap-3 font-bold text-amber-200"><ShieldCheck className="h-5 w-5" />Cada operação precisa ser analisada individualmente.</div>
                <p className="mt-3">Voos além da linha de visada visual, próximos de terceiros ou em cenários de maior risco podem exigir avaliação de risco, autorização da ANAC e autorização de acesso ao espaço aéreo pelo DECEA.</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="https://www.anac.gov.br/assuntos/legislacao/legislacao-1/boletim-de-pessoal/2026/bps-v-21-no-24-15-a-19-06-2026/rbac-100-emd-00/visualizar_ato_normativo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white">Consultar o RBAC nº 100 <ExternalLink className="h-4 w-4" /></a>
                <a href="https://www.decea.mil.br/drone/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white">Portal Drone do DECEA <ExternalLink className="h-4 w-4" /></a>
              </div>
              <p className="mt-8 text-xs leading-6 text-slate-500">Conteúdo informativo atualizado em agosto de 2026. As exigências dependem das características da aeronave, da missão, do local e do risco operacional.</p>
            </div>
          </section>

          <section className="py-20 md:py-28">
            <div className="mx-auto max-w-5xl px-5 md:px-8">
              <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-[linear-gradient(135deg,#071b37,#05101f)] p-8 md:p-12">
                <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                  <div><Radio className="h-8 w-8 text-cyan" /><h2 className="mt-6 font-display text-3xl font-semibold tracking-[-.035em] md:text-4xl">Quer avaliar essa solução para sua operação?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">A Cognitia mapeia o cenário, identifica os componentes adequados, coordena a integração entre voo, vídeo, dados e alertas e desenvolve as camadas de software necessárias para conectar a operação.</p></div>
                  <a href="https://wa.me/5511980195401?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20integra%C3%A7%C3%A3o%20de%20drones%20para%20vigil%C3%A2ncia%20industrial." target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">Conversar com a Cognitia <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
