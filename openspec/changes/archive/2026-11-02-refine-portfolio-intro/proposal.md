# Proposal

## Why

A apresentação no topo da landing page repete o nome de Guilherme Novais e destaca apenas o cargo de backend, sem comunicar imediatamente as tecnologias e abordagens mais relevantes do perfil profissional. A mudança melhora a clareza da identidade, do posicionamento profissional e das competências procuradas por recrutadores, mantendo o nome visível somente no header.

## What Changes

- Alterar o título da página para `Guilherme Novais`.
- Alterar o headline exibido na introdução para `Desenvolvedor de Softwares`.
- Substituir o terceiro texto repetido do nome por uma linha de competências destacadas: `Java`, `Spring Boot`, `SAGA`, `Axon Framework` e `OpenSpec`.
- Preservar `Guilherme Novais` como nome do header/coluna lateral e como dado de identidade do perfil, sem repeti-lo no conteúdo da introdução.
- Manter a descrição SEO existente, salvo os ajustes necessários para manter coerência com a apresentação.

## Capabilities

### New Capabilities

### Modified Capabilities

- `professional-portfolio`: atualizar os requisitos da apresentação profissional para refletir a nova hierarquia textual e as competências de destaque.

## Impact

- Afeta `index.md` e `_data/portfolio/pt-BR.yml`.
- Não altera APIs, dependências, infraestrutura de publicação ou a estrutura das demais seções do portfólio.
- Pode exigir um novo campo de dados para as competências de destaque, evitando reutilizar o campo de nome do perfil.
