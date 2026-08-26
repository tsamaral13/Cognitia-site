# Cognitia — publicação pelo GitHub e Hostinger

## Estrutura recomendada

- `main`: código-fonte editável do site React/Vite.
- `hostinger`: versão compilada criada automaticamente pelo GitHub Actions.
- Hostinger: deve implantar a branch `hostinger` no diretório `public_html`.

## Primeira configuração

1. Envie este projeto completo para a branch `main` do repositório no GitHub.
2. Abra a aba **Actions** do repositório e aguarde a ação **Publicar site para a Hostinger** concluir.
3. A ação criará ou atualizará a branch `hostinger`.
4. No painel da Hostinger, altere a branch da implantação de `main` para `hostinger`.
5. Execute a implantação e limpe o cache da Hostinger.

Depois disso, cada alteração enviada para `main` gera automaticamente uma nova versão pronta na branch `hostinger`.

## Dados aplicados

Contato: `contato@cognitiasolucoes.com`  
WhatsApp: `+55 11 98019-5401`  
Endereço: Av. Paulista, 1106 · 16º andar — sala 1 · Bela Vista · São Paulo, SP · CEP 01310-914.

Os cases preservam nomes e métricas confidenciais. Publique apenas informações cuja divulgação esteja autorizada.
