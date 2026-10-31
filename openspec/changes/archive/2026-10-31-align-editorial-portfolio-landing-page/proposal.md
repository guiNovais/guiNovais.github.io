# Proposal

## Why

A página inicial já apresenta o conteúdo profissional necessário, mas sua composição atual ainda não aproveita a estrutura editorial demonstrada em `docs/_pages/about.md`. A landing page deve oferecer uma leitura mais natural e escaneável, com introdução, ações de contato, seções claramente tituladas e listas estruturadas, sem transformar a página de documentação em dependência do site publicado.

## What Changes

- Reorganizar a página inicial para seguir a estrutura editorial de `docs/_pages/about.md`: front matter descritivo, introdução em prosa, ações principais e seções hierárquicas.
- Adicionar uma coluna lateral esquerda personalizada, inspirada na composição de duas colunas da página de referência do Minimal Mistakes, com avatar genérico temporário, nome, descrição breve e links profissionais.
- Apresentar ações de contato para LinkedIn e e-mail, usando os links já disponíveis nos dados do portfólio.
- Manter as seções de experiência profissional, formação, certificações e habilidades técnicas com seus dados provenientes de `_data/portfolio/pt-BR.yml`.
- Preservar as âncoras de navegação existentes para experiência, educação, certificações e habilidades.
- Aplicar a estrutura semântica do `layout: single`, mantendo o idioma `pt-BR`, metadados da página e compatibilidade com Jekyll/GitHub Pages.
- Ajustar a apresentação responsiva e os estados de foco para que a organização editorial permaneça legível e navegável em telas estreitas e por teclado.
- Fazer a coluna lateral empilhar-se de forma legível em telas estreitas, sem rolagem horizontal nem dependência de JavaScript.
- Desfazer todas as customizações de estilo introduzidas em commits posteriores a `5a5b646987ba8ed8530cb227ac8afdda2316ae89`, preservando apenas o conteúdo personalizado necessário para o portfólio.
- Manter o layout final compatível visualmente com a referência do Minimal Mistakes, usando as estruturas e estilos nativos do tema sempre que possível.
- Não incluir a galeria, os textos demonstrativos, os créditos ou os links de documentação presentes no `about.md`; eles são específicos da documentação do tema.

## Capabilities

### New Capabilities

### Modified Capabilities

- `professional-portfolio`: altera a estrutura editorial, as ações de contato e a hierarquia de apresentação da página inicial, preservando o conteúdo profissional, a navegação e os requisitos de acessibilidade.

## Impact

- Página inicial `index.md`.
- Restauração dos estilos Sass e da composição visual ao estado de referência a partir do commit-base `5a5b646987ba8ed8530cb227ac8afdda2316ae89`.
- Verificação de `_data/navigation.yml` para manter as âncoras existentes.
- Build estático Jekyll e HTML gerado, sem alteração do fluxo de publicação ou de dependências externas.
