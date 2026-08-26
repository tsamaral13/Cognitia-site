import React, { useEffect } from 'react';
import {
  Activity, AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, Clock3,
  Eye, FileChartColumn, HeartPulse, MapPinned, Radio, ShieldCheck,
  Users, Video, Workflow, Wrench,
} from 'lucide-react';
import Logo from '@/components/Logo';
import SiteFooter from '@/components/SiteFooter';

const operationSteps = [
  {
    icon: MapPinned,
    number: '01',
    title: 'Mapear a planta',
    text: 'O ambiente é representado na plataforma e organizado em áreas operacionais, zonas seguras, restritas e críticas.',
  },
  {
    icon: Radio,
    number: '02',
    title: 'Conectar pessoas e ativos',
    text: 'Cartões, tags e dispositivos compatíveis permitem acompanhar identidades, equipes e ativos dentro da cobertura planejada.',
  },
  {
    icon: Workflow,
    number: '03',
    title: 'Aplicar regras',
    text: 'Limites de acesso, proximidade, permanência e movimentação são configurados conforme o perfil e o risco de cada zona.',
  },
  {
    icon: AlertTriangle,
    number: '04',
    title: 'Alertar e responder',
    text: 'Quando ocorre um desvio, a central recebe posição, horário, regra violada e evidências disponíveis para orientar a resposta.',
  },
];

const useCases = [
  {
    icon: Users,
    title: 'Proteção de pessoas',
    text: 'Acompanhamento de equipes, contratados e visitantes nas áreas cobertas, com regras diferentes para cada perfil.',
  },
  {
    icon: Wrench,
    title: 'Visibilidade de ativos',
    text: 'Localização de equipamentos móveis, ferramentas ou recursos críticos conforme a necessidade operacional.',
  },
  {
    icon: HeartPulse,
    title: 'Sensores e condições de trabalho',
    text: 'Integração opcional com dispositivos compatíveis para sinais de imobilidade, homem caído ou indicadores definidos no projeto.',
  },
  {
    icon: FileChartColumn,
    title: 'Indicadores e auditoria',
    text: 'Histórico de movimentações, acessos, alertas e desvios para apoiar análises de risco e ações corretivas.',
  },
];

const analyticsItems = [
  'Uso ou ausência de EPI em pontos monitorados',
  'Quedas, invasões e permanência indevida',
  'Presença em zonas de carga suspensa ou áreas controladas',
  'Concentração de pessoas e mudanças relevantes no ambiente',
];

const benefits = [
  'Alertas com contexto de pessoa ou ativo, zona, horário e regra',
  'Resposta mais direcionada para segurança, brigada, operação e SESMT',
  'Visão compartilhada para diferentes áreas responsáveis pela segurança',
  'Evidências e histórico para aprimoramento contínuo dos processos',
];

export default function IndustrialSafetyArticlePage() {
  const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');

    document.title = 'Plataforma de segurança industrial | Cognitia';
    description?.setAttribute('content', 'Geolocalização RTLS, zonas inteligentes, sensores e análise de vídeo integrados para proteger pessoas e ativos em ambientes industriais.');

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
              <div className="max-w-5xl">
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-cyan"><span className="h-px w-8 bg-current opacity-60" />Plataforma de segurança inteligente</p>
                <h1 className="font-display text-4xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-5xl lg:text-7xl">Ambientes industriais que veem, localizam e reagem.</h1>
                <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300">A Cognitia oferece e integra uma solução completa de geolocalização inteligente para ampliar a segurança, reduzir riscos e dar maior visibilidade operacional às empresas — conectando pessoas, ativos, zonas, sensores, vídeo e regras em uma única plataforma.</p>
                <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[.12em] text-slate-400">
                  <span className="rounded-full border border-white/10 px-4 py-2">Geolocalização RTLS</span>
                  <span className="rounded-full border border-white/10 px-4 py-2">Zonas inteligentes</span>
                  <span className="rounded-full border border-white/10 px-4 py-2">Video Analytics</span>
                  <span className="rounded-full border border-white/10 px-4 py-2">Resposta operacional</span>
                </div>
              </div>

              <figure className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#061225] shadow-[0_30px_100px_rgba(0,0,0,.35)]">
                <img src={asset('industrial-field.webp')} alt="Profissional conectado a uma plataforma de localização e segurança industrial" width="1250" height="1250" fetchPriority="high" className="aspect-[16/10] h-auto w-full object-cover object-[center_42%]" />
                <figcaption className="border-t border-white/10 px-6 py-4 text-xs leading-5 text-slate-500">Conceito visual de uma operação que combina localização por infraestrutura dedicada, identificação do profissional, regras de acesso e análise inteligente de vídeo.</figcaption>
              </figure>
            </div>
          </section>

          <section className="py-20 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
              <div>
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-primary"><span className="h-px w-8 bg-current opacity-60" />O desafio operacional</p>
                <h2 className="font-display text-4xl font-semibold tracking-[-.04em]">O risco surge onde pessoas, máquinas e regras se encontram.</h2>
                <p className="mt-7 text-base leading-8 text-slate-300">Em plantas extensas ou complexas, saber apenas que existe um desvio não é suficiente. A resposta precisa considerar quem está envolvido, em qual área, há quanto tempo, qual autorização se aplica e quais evidências estão disponíveis.</p>
                <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/[.07] p-6">
                  <Eye className="h-6 w-6 text-cyan" />
                  <p className="mt-4 text-sm leading-7 text-slate-300"><strong className="text-white">A câmera vê. A localização contextualiza. A regra ajuda a decidir.</strong> A plataforma conecta essas camadas para transformar sinais dispersos em informação operacional.</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#061225]">
                <img src={asset('industrial-platform.webp')} alt="Visão conceitual de uma plataforma industrial integrada" loading="lazy" decoding="async" className="h-full min-h-[480px] w-full object-cover" />
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-[#030d1b] py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="max-w-4xl">
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-cyan"><span className="h-px w-8 bg-current opacity-60" />Como funciona</p>
                <h2 className="font-display text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Do mapeamento da planta ao alerta contextualizado.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">A solução é configurada conforme o ambiente, os riscos e os processos do cliente. Cada etapa acrescenta uma camada de informação para a decisão.</p>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {operationSteps.map(({ icon: Icon, number, title, text }) => (
                  <div key={title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] p-6">
                    <span className="absolute right-5 top-4 font-display text-4xl font-semibold text-white/[.04]">{number}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-cyan"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-slate-400">
                <span className="rounded-full border border-white/10 px-4 py-2">Localizar</span><ArrowRight className="h-4 w-4 text-primary" />
                <span className="rounded-full border border-white/10 px-4 py-2">Verificar</span><ArrowRight className="h-4 w-4 text-primary" />
                <span className="rounded-full border border-white/10 px-4 py-2">Correlacionar</span><ArrowRight className="h-4 w-4 text-primary" />
                <span className="rounded-full border border-white/10 px-4 py-2">Registrar e agir</span>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="max-w-4xl">
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-primary"><span className="h-px w-8 bg-current opacity-60" />Aplicações integradas</p>
                <h2 className="font-display text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Visibilidade para proteger pessoas e controlar a operação.</h2>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {useCases.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[.025] p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-cyan"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14 grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#061225] p-7 md:p-9">
                  <Video className="h-8 w-8 text-cyan" />
                  <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-.03em]">Análise inteligente de vídeo</h3>
                  <p className="mt-4 leading-7 text-muted">As câmeras verificam condições visuais e acrescentam evidência ao evento detectado pela localização.</p>
                  <div className="mt-7 grid gap-3">{analyticsItems.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />{item}</div>)}</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#061225] p-7 md:p-9">
                  <Activity className="h-8 w-8 text-cyan" />
                  <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-.03em]">Sensores e resposta a emergências</h3>
                  <p className="mt-4 leading-7 text-muted">Quando sensores compatíveis fazem parte do projeto, indicadores definidos podem ser associados à identidade e à posição do profissional para apoiar respostas mais rápidas.</p>
                  <div className="mt-7 rounded-2xl border border-amber-300/20 bg-amber-300/[.05] p-5 text-sm leading-7 text-slate-300">
                    <div className="flex items-center gap-3 font-bold text-amber-100"><HeartPulse className="h-5 w-5" />Monitoramento operacional, não diagnóstico médico.</div>
                    <p className="mt-2">Os recursos dependem dos dispositivos, integrações e protocolos definidos para cada aplicação.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-[#030d1b] py-20 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
              <div>
                <ShieldCheck className="h-9 w-9 text-cyan" />
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-.04em]">Dados transformados em proteção prática.</h2>
                <p className="mt-6 text-base leading-8 text-slate-300">A central deixa de trabalhar com informações fragmentadas e passa a compartilhar uma referência comum da operação.</p>
              </div>
              <div className="grid gap-3">
                {benefits.map((benefit) => <div key={benefit} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.025] p-5 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />{benefit}</div>)}
                <div className="mt-3 rounded-2xl border border-primary/25 bg-primary/[.07] p-6 text-sm leading-7 text-slate-300"><strong className="text-white">A tecnologia apoia a gestão de segurança e a rastreabilidade.</strong> A conformidade com normas depende também dos processos, responsabilidades, treinamentos e controles adotados pela organização.</div>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-28">
            <div className="mx-auto max-w-5xl px-5 md:px-8">
              <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-[linear-gradient(135deg,#071b37,#05101f)] p-8 md:p-12">
                <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                  <div><Clock3 className="h-8 w-8 text-cyan" /><h2 className="mt-6 font-display text-3xl font-semibold tracking-[-.035em] md:text-4xl">Uma implantação desenhada para a realidade da sua planta.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">A Cognitia mapeia o ambiente, avalia a infraestrutura existente, seleciona as tecnologias adequadas e integra localização, sensores, vídeo, regras e relatórios. A arquitetura pode aproveitar componentes compatíveis já instalados e evoluir por etapas.</p></div>
                  <a href="https://wa.me/5511980195401?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20plataforma%20de%20geolocaliza%C3%A7%C3%A3o%20e%20seguran%C3%A7a%20industrial." target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">Conversar com a Cognitia <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
                </div>
              </div>
              <p className="mt-8 text-xs leading-6 text-slate-500">As funcionalidades, a precisão de localização, a cobertura, os sensores e as integrações variam conforme o ambiente e o projeto técnico.</p>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
