# Design

## Context

A página inicial `index.md` já usa `layout: single`, declara `locale: pt-BR` e gera o conteúdo profissional a partir de `_data/portfolio/pt-BR.yml`. Atualmente, porém, começa diretamente pelo resumo e usa uma sequência linear de blocos. A página de referência `docs/_pages/about.md` organiza uma página editorial com front matter descritivo, texto introdutório, ação destacada e seções Markdown com títulos e listas. A pasta `docs/` não deve ser necessária para renderizar a landing page publicada.

## Goals / Non-Goals

The landing page will use the theme's reference composition: a personalized left profile area and the editorial portfolio content as the main column, with visual styling inherited from the baseline theme.

**Goals:**

- Dar à landing page uma sequência editorial clara: apresentação, contato, experiência, formação, certificações e habilidades.
- Exibir uma coluna lateral esquerda com avatar genérico, nome, descrição breve e links profissionais personalizados.
- Manter uma única fonte de dados para o conteúdo factual, usando os loops Liquid existentes ou equivalentes.
- Preservar os IDs das seções usados por `_data/navigation.yml`.
- Reaproveitar a infraestrutura do `layout: single`, do tema e do Sass local, com comportamento responsivo e foco visível.
- Empilhar a coluna lateral antes do conteúdo principal em mobile, preservando a ordem de leitura e o fluxo de foco do tema.
- Restaurar os estilos ao estado do commit-base `5a5b646987ba8ed8530cb227ac8afdda2316ae89`, mantendo apenas o markup e os dados necessários para personalizar o perfil.

**Non-Goals:**

- Reproduzir a galeria, os créditos, os links de documentação ou os textos do tema presentes no `about.md`.
- Criar uma nova página `/about/` ou alterar o conteúdo de documentação do Minimal Mistakes.
- Adicionar dependências JavaScript, imagens externas, backend, uma nova infraestrutura de publicação ou estilos locais que substituam o comportamento visual do tema; o avatar temporário deve ser local ou CSS/SVG inline.
- Alterar os fatos profissionais armazenados no YAML.

## Decisions

### Estrutura editorial no documento existente

Manter `index.md` como a página raiz e `layout: single`, adicionando uma introdução explícita com o nome/headline do perfil, o resumo e ações de LinkedIn/e-mail antes das seções profissionais. Isso segue o modelo editorial de `about.md` sem introduzir um layout paralelo.

Alternativas consideradas:

- Criar uma página separada e redirecionar `/`: adicionaria uma rota e uma camada desnecessária.
- Usar `layout: archive`: favoreceria listagens de conteúdo, mas não representa um perfil profissional editorial.

### Conteúdo orientado por dados

Continuar lendo `site.data.portfolio["pt-BR"]` para experiência, formação, certificações e habilidades. O Markdown e o HTML semântico devem apenas organizar e apresentar os valores, evitando duplicação factual no documento.

### Coluna lateral personalizada

Adicionar uma região de perfil à esquerda do conteúdo principal, usando as classes e o comportamento responsivo nativos do tema quando possível. A região deve ler `profile.name`, `profile.headline`, `profile.summary` e os links profissionais do YAML, além de apresentar um avatar genérico temporário com `alt` descritivo. Em telas estreitas, a região deve ocupar a largura disponível e aparecer antes do conteúdo editorial.

### Ações de contato

Usar os links `profile.links.linkedin` e `profile.email` como ações nomeadas e discerníveis. O telefone e o website podem permanecer como informações complementares, mas não serão tratados como novos requisitos de contato nesta change.

### Estilo e responsividade

Usar os estilos já existentes do tema e remover regras Sass locais introduzidas após o commit-base que alterem tipografia, espaçamento, largura, botões, colunas ou foco. A composição deve seguir o comportamento responsivo da referência, sem larguras fixas que provoquem rolagem horizontal.

### Navegação e semântica

Preservar os IDs `experiencia-profissional`, `educacao`, `certificacoes` e `habilidades-tecnicas`. Usar títulos em ordem, listas para os destaques e links com texto identificável, mantendo a ordem de foco coerente com a ordem de leitura.

## Risks / Trade-offs

- **[Risco]** A quantidade de destaques profissionais pode deixar a página longa. **Mitigação:** preservar o conteúdo completo, mas usar headings, parágrafos de metadados e listas para facilitar a varredura visual.
- **[Risco]** Estilos locais podem divergir do tema em futuras atualizações. **Mitigação:** limitar a customização às classes da landing page e evitar alterações nos parciais centrais do Minimal Mistakes.
- **[Risco]** Ações de contato podem perder destaque em telas estreitas. **Mitigação:** mantê-las como links claramente nomeados, com espaçamento adequado e foco visível, verificando a saída mobile no build/revisão visual.

## Migration Plan

1. Atualizar a estrutura editorial de `index.md` sem modificar os dados do portfólio.
2. Ajustar somente os estilos locais necessários e confirmar as âncoras da navegação.
3. Executar o build Jekyll e revisar o HTML gerado, links de contato, idioma e comportamento responsivo.
4. Se houver regressão, reverter `index.md` e os estilos específicos da página; não há migração de dados ou infraestrutura.
