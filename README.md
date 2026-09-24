# Hotel Template

Fundacao frontend para um site institucional de hospedagem/studio, criada com
React, TypeScript, Vite e Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
npm run validate
npm run build
npm run preview
```

- `npm run dev`: inicia o Vite em modo desenvolvimento.
- `npm run validate`: executa lint, checagem de formatacao e build.
- `npm run build`: gera a versao estatica em `dist/`.
- `npm run preview`: serve localmente o build gerado para conferencia.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm run format`
- `npm run format:check`
- `npm run validate`

## Adaptando o template para outro hotel

A configuracao principal da demo fica em `src/data/hotel.ts`. Para adaptar o
site para outro hotel, pousada, flat ou studio, comece por esse arquivo e
substitua os assets quando necessario.

1. Troque nome, `shortName`, `wordmark`, descricao curta e dados de SEO em
   `name`, `shortName`, `wordmark` e `seo`.
2. Troque os textos das secoes em `hero`, `introduction`, `studios`,
   `amenities`, `gallery`, `reviews`, `location`, `booking` e `footer`.
3. Troque imagens importadas no topo de `src/data/hotel.ts` e ajuste `src`,
   `alt`, `width`, `height` e `isPlaceholder` nas secoes correspondentes.
4. Configure endereco em `address`, mantendo campos inexistentes como `null`.
5. Configure Google Maps em `maps.embedUrl` usando apenas o valor `src` do
   iframe oficial do Google Maps. Configure `maps.directionsUrl` somente quando
   tiver um link real.
6. Configure canais de reserva em `booking.channels`, preservando `id`, `name`,
   `url`, `enabled` e `logo` quando houver asset oficial.
7. Adicione contatos reais em `contact.phone`, `contact.whatsapp`,
   `contact.email`, `contact.instagram` ou `socialLinks.instagram`. Links vazios
   nao sao renderizados.
8. Revise `index.html` para fallback estatico de SEO. Em runtime, o React aplica
   `hotel.seo` em title, description, Open Graph, Twitter Card, canonical,
   locale e JSON-LD.
9. Valide a adaptacao com `npm run lint`, `npm run format:check` e
   `npm run build`.

## SEO e publicacao

O projeto e uma SPA em Vite. O `index.html` mantem metadata estatica generica
como fallback, e a Home aplica em runtime os valores de `hotel.seo` para
`title`, `description`, Open Graph, Twitter Card, canonical e JSON-LD. Em
ambientes onde crawlers nao executam JavaScript, a metadata dinamica pode nao
ser lida; para SEO maximo, finalize `canonicalUrl`, `ogImage` e avalie uma
solucao de pre-render/SSG antes de campanhas publicas.

Enquanto nao houver dominio de producao, `canonicalUrl` e `ogImage` devem ficar
como `null`. O projeto inclui `public/robots.txt`, mas nao gera `sitemap.xml`
sem dominio real para evitar URLs falsas. Como a Home usa anchors e nao possui
roteamento client-side, nao ha fallback especial de SPA ou React Router neste
template.

Checklist rapido:

- [ ] Identidade
- [ ] Hero
- [ ] Textos
- [ ] Imagens
- [ ] Comodidades
- [ ] Avaliacoes
- [ ] Endereco
- [ ] Google Maps
- [ ] Reservas
- [ ] Contatos
- [ ] SEO
- [ ] npm run lint
- [ ] npm run format:check
- [ ] npm run build

## Checklist antes de publicar

- [ ] Revisar hotel.ts
- [ ] Substituir imagens placeholder
- [ ] Revisar avaliacoes
- [ ] Configurar contatos
- [ ] Configurar Maps
- [ ] Configurar canais de reserva
- [ ] Definir dominio
- [ ] Configurar canonicalUrl
- [ ] Configurar OG image
- [ ] Revisar title/description
- [ ] Gerar/revisar sitemap
- [ ] Revisar robots.txt
- [ ] npm run lint
- [ ] npm run format:check
- [ ] npm run build

## Modo demonstracao

A demo atual usa `publication.status = 'demo'` em `src/data/hotel.ts`. Nesse
modo, o site:

- exibe o aviso `Projeto demonstrativo — site não oficial.`;
- aplica `noindex, nofollow`;
- bloqueia crawling em `public/robots.txt`;
- nao gera JSON-LD `LodgingBusiness`;
- nao deve usar dominio temporario do Netlify como canonical.

Quando o cliente aprovar:

1. Obtenha autorizacao e material oficial.
2. Substitua fotos.
3. Insira contatos oficiais.
4. Insira avaliacoes autorizadas/reais quando aplicavel.
5. Configure dominio.
6. Configure `hotel.seo.canonicalUrl`.
7. Configure `hotel.seo.ogImage`.
8. Altere `publication.status` para `'production'`.
9. Revise `public/robots.txt`.
10. Gere sitemap.
11. Execute `npm run validate`.
12. Realize novo deploy.

Nunca coloque o site em `production` apenas para remover visualmente o aviso.
`production` significa que dados e materiais foram revisados para publicacao
oficial.

## Deploy no Netlify

O projeto esta preparado para deploy estatico no Netlify usando `netlify.toml`.
A configuracao final usa:

- build command: `npm run build`
- publish directory: `dist`
- Node: `22` no ambiente do Netlify

### Forma 1 - Git

1. Suba o projeto para o GitHub.
2. Crie ou importe um site no Netlify.
3. Selecione o repositorio.
4. Confirme o build command `npm run build`.
5. Confirme o publish directory `dist`.
6. Realize o deploy.

### Forma 2 - deploy manual

Execute `npm run build` e utilize o conteudo gerado em `dist/` no fluxo de
deploy manual quando aplicavel.

## Configurando dominio

Quando houver um dominio real:

1. Configure o dominio no Netlify.
2. Atualize `hotel.seo.canonicalUrl`.
3. Configure `hotel.seo.ogImage`.
4. Revise a metadata.
5. Gere `sitemap.xml`.
6. Revise `public/robots.txt`.
7. Execute rebuild/deploy.

Nao use dominio falso para canonical, sitemap ou OG image.

## Criando um site para um novo cliente

1. Duplique o template.
2. Altere `src/data/hotel.ts`.
3. Substitua imagens.
4. Configure comodidades.
5. Configure avaliacoes reais.
6. Configure endereco.
7. Configure Google Maps.
8. Configure canais de reserva.
9. Configure contatos.
10. Revise SEO.
11. Defina dominio.
12. Otimize imagens finais.
13. Execute validacoes.
14. Publique.

## Imagens finais

Antes da publicacao do cliente, otimize imagens finais, evite arquivos de varios
MB, prefira dimensoes adequadas ao uso e considere WebP/AVIF quando apropriado,
preservando a qualidade fotografica.

## Ambiente

O template nao exige `.env` atualmente. A configuracao publica do site fica em
`src/data/hotel.ts`. Nao inclua secrets em projetos frontend estaticos, pois todo
conteudo usado pelo cliente pode ir para o bundle.
