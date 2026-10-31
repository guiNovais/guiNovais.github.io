# Tasks

## 1. Estrutura editorial da landing page

- [x] 1.1 Reorganizar `index.md` para apresentar nome/headline, resumo, ações de LinkedIn e e-mail e as seções editoriais de experiência, educação, certificações e habilidades; verificar que a página continua usando `layout: single`, `locale: pt-BR` e os dados de `_data/portfolio/pt-BR.yml`.
- [x] 1.2 Preservar os IDs `experiencia-profissional`, `educacao`, `certificacoes` e `habilidades-tecnicas`, mantendo headings em ordem, listas para atividades/competências e marcação semântica para períodos e qualificações; verificar os links correspondentes em `_data/navigation.yml`.
- [x] 1.3 Manter os fatos profissionais exclusivamente orientados pelo YAML, sem copiar a galeria, os créditos ou os links de documentação do `about.md`; verificar a ausência de conteúdo demonstrativo do tema na página inicial gerada.

## 2. Apresentação, estilos e acessibilidade

- [x] 2.1 Aplicar apenas os estilos locais necessários para a hierarquia editorial e as ações de contato, aproveitando o tema existente; verificar que os links possuem nomes discerníveis, espaçamento utilizável e foco visível.
- [x] 2.2 Validar a composição em viewport desktop e mobile, verificando que a introdução, as listas e as seções permanecem legíveis sem rolagem horizontal.
- [x] 2.3 Percorrer a landing page somente com teclado e verificar a ordem lógica entre navegação, ações de contato e âncoras das seções, incluindo indicação visual de foco.

## 3. Integração e verificação da publicação

- [x] 3.1 Executar o build Jekyll existente e verificar que a página raiz é gerada sem novos erros de Liquid, Sass ou configuração.
- [x] 3.2 Inspecionar o HTML gerado da página inicial e verificar título, descrição, idioma `pt-BR`, links de LinkedIn/e-mail, âncoras e presença de todos os dados profissionais.
- [x] 3.3 Validar que a página inicial não depende de arquivos em `docs/` para renderizar e que o fluxo existente de publicação permanece inalterado.

## 4. Coluna lateral personalizada

- [x] 4.1 Implementar na landing page uma coluna lateral à esquerda com avatar genérico temporário, nome, headline, descrição breve e links profissionais orientados por `_data/portfolio/pt-BR.yml`.
- [x] 4.2 Aplicar layout responsivo de duas colunas no desktop e empilhamento da coluna lateral antes do conteúdo principal em mobile, sem rolagem horizontal e sem dependências externas.
- [x] 4.3 Garantir texto alternativo do avatar, nomes discerníveis dos links, ordem lógica de teclado e foco visível em toda a coluna lateral.
- [x] 4.4 Executar o build Jekyll e inspecionar o HTML gerado para confirmar a coluna lateral, os dados personalizados, a imagem temporária e a preservação das seções e âncoras existentes.

## 5. Restauração visual da referência

- [x] 5.1 Auditar `assets/css/main.scss`, `_sass/` e demais arquivos de estilo contra `5a5b646987ba8ed8530cb227ac8afdda2316ae89` e remover customizações posteriores que alterem a aparência do tema; verificar o diff resultante.
- [x] 5.2 Ajustar a composição da landing page para conservar somente o markup e os dados personalizados da coluna de perfil, removendo classes e regras visuais próprias que substituam o layout nativo; verificar que a coluna continua presente.
- [x] 5.3 Comparar a página renderizada com a referência do Minimal Mistakes em desktop e mobile, verificando tipografia, espaçamento, largura, navegação, foco e ausência de rolagem horizontal.
- [x] 5.4 Executar o build Jekyll e inspecionar o HTML/CSS gerado para confirmar que os estilos posteriores ao commit-base foram desfeitos sem remover os dados, links, acessibilidade e âncoras do portfólio.
