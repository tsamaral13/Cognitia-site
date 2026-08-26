import React, { useEffect } from 'react';
import {
  AlertTriangle, ArrowLeft, ArrowRight, BadgeCheck, CheckCircle2, ExternalLink,
  Eye, MapPinned, Network, Radio, ScanFace, ShieldCheck, Video, Workflow,
} from 'lucide-react';
import Logo from '@/components/Logo';
import SiteFooter from '@/components/SiteFooter';

const ecosystemSteps = [
  {
    icon: Radio,
    number: '01',
    title: 'Cartão e dispositivos conectados',
    text: 'O profissional porta um dispositivo identificado que pode transmitir SOS, status e pequenos pacotes de dados pela rede LoRa.',
  },
  {
    icon: Network,
    number: '02',
    title: 'Rede e cobertura planejadas',
    text: 'Gateways, antenas e a camada de localização são dimensionados conforme a arena, as zonas críticas e o nível de precisão necessário.',
  },
  {
    icon: Workflow,
    number: '03',
    title: 'Plataforma operacional',
    text: 'Identidade, posição, perfil, permissões e regras de cada área convergem em uma visão única para a central de comando.',
  },
  {
    icon: Video,
    number: '04',
    title: 'Vídeo com inteligência',
    text: 'As câmeras e os sistemas de Video Analytics acrescentam evidência visual, validam ocorrências e apoiam respostas mais rápidas.',
  },
];

const videoCapabilities = [
  'Reconhecimento facial e verificação de identidade quando aplicáveis ao projeto',
  'Detecção de invasão, permanência indevida, aglomeração e fluxo de pessoas',
  'Associação entre alerta, zona, câmera relacionada e equipe mais próxima',
  'Registro de evidências, trilha operacional e acompanhamento em tempo real',
];

export default function ArenaSecurityArticlePage() {
  const asset = (name) => `${import.meta.env.BASE_URL}${name}`;

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');

    document.title = 'Ecossistema de segurança para arenas | Cognitia';
    description?.setAttribute('content', 'Como a Cognitia integra localização, análise inteligente de vídeo, dispositivos e plataforma operacional em uma solução completa para arenas e eventos.');

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
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-cyan"><span className="h-px w-8 bg-current opacity-60" />Ecossistema de segurança integrada</p>
                <h1 className="font-display text-4xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-5xl lg:text-7xl">A localização informa onde. O vídeo ajuda a entender o que está acontecendo.</h1>
                <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300">Integramos localização, vídeo e sistemas conectados para transformar alertas em respostas mais rápidas, contextualizadas e coordenadas.</p>
                <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[.12em] text-slate-400">
                  <span className="rounded-full border border-white/10 px-4 py-2">Localização &amp; contexto</span>
                  <span className="rounded-full border border-white/10 px-4 py-2">Análise inteligente de vídeo</span>
                  <span className="rounded-full border border-white/10 px-4 py-2">Plataforma operacional</span>
                  <span className="rounded-full border border-white/10 px-4 py-2">Resposta coordenada</span>
                </div>
              </div>

              <figure className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#061225] shadow-[0_30px_100px_rgba(0,0,0,.35)]">
                <img src={asset('arena-command.webp')} alt="Central integrada de segurança e análise de vídeo para uma arena" width="1600" height="900" fetchPriority="high" className="aspect-video h-auto w-full object-cover" />
                <figcaption className="border-t border-white/10 px-6 py-4 text-xs leading-5 text-slate-500">Conceito visual de uma central que combina mapa operacional, localização, câmeras, alertas e equipes em uma referência comum.</figcaption>
              </figure>
            </div>
          </section>

          <section className="py-20 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#061225]">
                <img src={asset('arena-network.webp')} alt="Arena conectada por localização, dispositivos, câmeras e uma plataforma operacional" loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-primary"><span className="h-px w-8 bg-current opacity-60" />Integração em evidência</p>
                <h2 className="font-display text-4xl font-semibold tracking-[-.04em]">Muito além de um dispositivo: uma visão operacional unificada.</h2>
                <p className="mt-6 text-base leading-8 text-slate-300">Selecionamos e integramos plataformas avançadas de localização, análise de vídeo e reconhecimento facial conforme cada cenário. Combinamos as melhores tecnologias compatíveis, sem prender a solução a um único fabricante.</p>
                <div className="mt-8 grid gap-3">
                  {videoCapabilities.map((capability) => <div key={capability} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.025] p-4 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />{capability}</div>)}
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-[#030d1b] py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="max-w-4xl">
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-cyan"><span className="h-px w-8 bg-current opacity-60" />Do sinal à resposta</p>
                <h2 className="font-display text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Uma cadeia integrada de contexto e decisão.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">Em vez de entregar componentes desconectados, integramos cada camada à resposta operacional.</p>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {ecosystemSteps.map(({ icon: Icon, number, title, text }) => (
                  <div key={title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] p-6">
                    <span className="absolute right-5 top-4 font-display text-4xl font-semibold text-white/[.04]">{number}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-cyan"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-slate-400">
                <span className="rounded-full border border-white/10 px-4 py-2">Dispositivo</span><ArrowRight className="h-4 w-4 text-primary" />
                <span className="rounded-full border border-white/10 px-4 py-2">Rede e localização</span><ArrowRight className="h-4 w-4 text-primary" />
                <span className="rounded-full border border-white/10 px-4 py-2">Regra e câmera</span><ArrowRight className="h-4 w-4 text-primary" />
                <span className="rounded-full border border-white/10 px-4 py-2">Alerta contextualizado</span>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#061225]">
                <img src={asset('sos-device.webp')} alt="Dispositivo de segurança com botão SOS conectado à operação" loading="lazy" decoding="async" className="h-full min-h-[520px] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020914] via-[#020914]/85 to-transparent p-7 pt-24 md:p-10 md:pt-32">
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan">Uma das camadas do ecossistema</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold">O dispositivo conecta a pessoa. A integração conecta a operação.</h3>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="mb-5 flex items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.24em] text-primary"><span className="h-px w-8 bg-current opacity-60" />Curiosidades técnicas</p>
                <h2 className="font-display text-4xl font-semibold tracking-[-.04em]">Onde a tecnologia LoRa entra no ecossistema?</h2>
                <div className="mt-7 space-y-5 text-base leading-8 text-slate-300">
                  <p><strong className="text-white">LoRa, de Long Range, é uma tecnologia de rádio de longo alcance e baixo consumo de energia.</strong> Ela pode conectar sensores e dispositivos que enviam pequenas mensagens, mesmo em ambientes amplos ou com obstáculos.</p>
                  <p>LoRaWAN é o protocolo de rede normalmente utilizado para organizar essa comunicação entre dispositivos, gateways e aplicações. Em uma arena, pode transportar sinais como identificação do dispositivo, acionamento de SOS, status e telemetria.</p>
                  <p><strong className="text-cyan">LoRa não transmite as imagens das câmeras.</strong> O vídeo utiliza a infraestrutura apropriada de rede e processamento. O valor da solução está justamente em integrar essas diferentes camadas na mesma plataforma.</p>
                </div>
                <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/[.05] p-6 text-sm leading-7 text-slate-300">
                  <div className="flex items-center gap-3 font-bold text-amber-100"><AlertTriangle className="h-5 w-5" />A precisão da localização depende do projeto.</div>
                  <p className="mt-3">Cobertura, gateways, antenas, zonas e tecnologias complementares são definidos conforme a arquitetura do local. LoRa é uma camada de comunicação — não uma solução completa isoladamente.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-[#030d1b] py-20 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
              <div>
                <ScanFace className="h-9 w-9 text-cyan" />
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-.04em]">Reconhecimento facial com critério, não como recurso isolado.</h2>
              </div>
              <div className="space-y-6 text-base leading-8 text-slate-300">
                <p>Em projetos que envolvem biometria, a qualidade do software é apenas parte da decisão. A arquitetura precisa considerar finalidade, base legal, transparência, controle de acesso, retenção, segurança da informação, análise de acurácia e revisão humana.</p>
                <p>Integramos a tecnologia ao processo do cliente com governança e parâmetros operacionais claros. Dados biométricos são dados pessoais sensíveis; por isso, cada implantação deve ser avaliada de acordo com a LGPD e com o contexto específico da operação.</p>
                <div className="rounded-2xl border border-primary/25 bg-primary/[.07] p-6">
                  <ShieldCheck className="h-6 w-6 text-cyan" />
                  <p className="mt-4 text-sm leading-7"><strong className="text-white">Mais tecnologia exige mais responsabilidade.</strong> Alertas e correspondências devem apoiar profissionais autorizados, com regras de confirmação e resposta definidas no projeto.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-28">
            <div className="mx-auto max-w-5xl px-5 md:px-8">
              <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-[linear-gradient(135deg,#071b37,#05101f)] p-8 md:p-12">
                <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                  <div><BadgeCheck className="h-8 w-8 text-cyan" /><h2 className="mt-6 font-display text-3xl font-semibold tracking-[-.035em] md:text-4xl">Leve inteligência contextual <em className="font-normal text-cyan">para dentro da sua operação.</em></h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">Apresentamos e intermediamos uma plataforma que combina Video Analytics e geolocalização por antenas para proteger pessoas, controlar zonas de risco e acelerar a resposta.</p></div>
                  <a href="https://wa.me/5511980195401?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20integrada%20de%20LoRa%2C%20localiza%C3%A7%C3%A3o%20e%20an%C3%A1lise%20de%20v%C3%ADdeo." target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">Conversar com a Cognitia <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-500">Referências técnicas e de proteção de dados</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                  <a href="https://blog.lora-alliance.org/what-is-lorawan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white">LoRa Alliance — O que é LoRaWAN <ExternalLink className="h-4 w-4" /></a>
                  <a href="https://www.gov.br/anpd/pt-br/assuntos/noticias/biometria-e-tema-do-segundo-volume-da-serie-radar-tecnologico" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white">ANPD — Biometria e reconhecimento facial <ExternalLink className="h-4 w-4" /></a>
                  <a href="https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-nota-tecnica-sobre-projeto-estadio-seguro" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white">ANPD — Projeto Estádio Seguro <ExternalLink className="h-4 w-4" /></a>
                </div>
                <p className="mt-5 text-xs leading-6 text-slate-500">Conteúdo informativo atualizado em agosto de 2026. A arquitetura, os recursos e as exigências de proteção de dados dependem do ambiente, da finalidade e das características de cada projeto.</p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
