# Direcao Visual

A referencia visual em `docs/design/xavi-home-reference.png` e este documento
formam a fonte de verdade visual do projeto. Alteracoes relevantes na direcao
visual, paleta, tipografia ou linguagem dos componentes nao devem ser feitas sem
solicitacao explicita.

## Objetivo visual

O site deve comunicar uma hospedagem boutique/studio de forma elegante,
contemporanea e acolhedora. A composicao deve favorecer respiro, fotografia em
destaque, titulos editoriais e poucos elementos enquadrados.

## Paleta

- Fundo principal: off-white quente, evitando branco puro em excesso.
- Texto: grafite/preto suave para leitura confortavel.
- Apoio: bege, taupe e marrons naturais discretos.
- Destaque: marrom/dourado queimado, usado com moderacao em CTAs, labels e
  pequenos detalhes.

## Tipografia

- Display: Cormorant Garamond para H1, H2 e chamadas editoriais.
- Texto/UI: Inter para corpo, navegacao, botoes, labels e informacoes.

As fontes foram escolhidas por serem gratuitas, legiveis e proximas da
sofisticacao editorial da referencia.

## Espacamentos e containers

O layout usa gutters fluidos e um container maximo de `75rem`. Secoes futuras
devem preservar bastante espaco em branco, com ritmo vertical amplo e sem
empilhar todo o conteudo dentro de cards.

## Responsividade

A base e mobile-first. Os componentes devem se adaptar sem largura fixa que
gere overflow horizontal, usando containers fluidos, imagens com `object-fit` e
tipografia responsiva quando fizer sentido.

## Botoes

Botoes e links de acao devem ser discretos, com raio pequeno, contraste claro,
foco visivel e uso moderado da cor de destaque. CTAs primarios usam o tom
marrom/dourado queimado; variacoes secundarias devem permanecer leves.

## Imagens

Fotografias serao protagonistas nas proximas etapas. Devem ter corte cuidadoso,
boa escala, `object-fit: cover` quando necessario e `alt` definido conforme o
conteudo real da imagem.

## Componentes

Criar componentes pequenos, sem abstracoes prematuras. Cards devem ser
reservados para itens repetidos ou blocos realmente enquadrados, mantendo a
sensacao editorial e premium da referencia.
