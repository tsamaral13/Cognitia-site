# Site Cognitia

Nova versão institucional da Cognitia, estruturada para apresentar com clareza as duas linhas de atuação da empresa:

- segurança e operações inteligentes;
- produtos digitais e software sob medida.

## Requisitos

- Node.js 22.13 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

O site ficará disponível em `http://localhost:3000`.

## Validar a versão de produção

```bash
npm run build
```

## Páginas

- `/` — página inicial
- `/solucoes/seguranca-operacional`
- `/solucoes/drones-automatizados`
- `/solucoes/software-sob-medida`
- `/cases/usemetta`
- `/sobre`
- `/privacidade`
- `/robots.txt`
- `/sitemap.xml`

## Publicação pelo GitHub

Envie todo o conteúdo desta pasta para o repositório, exceto os itens ignorados pelo `.gitignore`. A plataforma de hospedagem deve executar `npm install` e `npm run build`.

O domínio público esperado nos metadados é `https://cognitiasolucoes.com`. Caso o endereço definitivo seja outro, atualize `metadataBase`, URLs canônicas, sitemap e robots nos arquivos da pasta `app`.
