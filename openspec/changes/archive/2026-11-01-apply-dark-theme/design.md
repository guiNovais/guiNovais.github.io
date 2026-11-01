# Design

## Context

O site é um Jekyll baseado no Minimal Mistakes. `assets/css/main.scss` importa a skin cujo nome vem de `site.minimal_mistakes_skin`, e `_config.yml` atualmente seleciona `default`. A skin `_dark.scss` já existe no repositório e define a paleta completa, incluindo fundo, texto, links, bordas, formulários e rodapé.

## Goals / Non-Goals

**Goals:**

- Selecionar a skin escura nativa do tema.
- Preservar markup, conteúdo, layout, responsividade e infraestrutura de publicação.
- Validar visualmente a página e verificar legibilidade e foco de teclado.

**Non-Goals:**

- Criar alternância entre tema claro e escuro.
- Adicionar JavaScript, dependências ou preferências persistidas do usuário.
- Redesenhar a identidade visual ou alterar os dados do portfólio.

## Decisions

- **Usar a skin `dark` do Minimal Mistakes.** Ela já está disponível e é carregada pelo pipeline Sass existente. Isso é preferível a sobrescrever variáveis em CSS local, pois mantém os componentes do tema coerentes e reduz manutenção.
- **Alterar somente a configuração de skin inicialmente.** A mudança deve começar em `minimal_mistakes_skin: dark`; ajustes locais só serão considerados se a renderização revelar um problema concreto de contraste ou legibilidade.
- **Validar em desktop e mobile.** A página possui coluna lateral e conteúdo editorial responsivo; a inspeção deve cobrir ambas as composições, além de links de contato, navegação e estados de foco.

## Risks / Trade-offs

- **[Contraste inesperado em markup personalizado]** -> Conferir a renderização dos elementos `portfolio-*` e ajustar apenas estilos locais estritamente necessários.
- **[Diferença visual em componentes compartilhados do tema]** -> Usar a própria paleta e os tokens da skin, evitando cores fixas independentes.
- **[Build sem ferramenta visual disponível]** -> Validar ao menos a compilação Jekyll e inspecionar o CSS gerado; registrar qualquer validação visual pendente.

## Migration Plan

1. Alterar a seleção da skin para `dark`.
2. Compilar o site e revisar a página inicial em tamanhos desktop e mobile.
3. Corrigir somente problemas de legibilidade comprovados.
4. Reverter a seleção para `default` caso o build ou a revisão revele regressão não resolvida.
