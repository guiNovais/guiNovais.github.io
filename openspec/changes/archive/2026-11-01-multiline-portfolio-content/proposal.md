# Proposal

## Why

O conteúdo editorial do portfólio está limitado a um resumo em parágrafo único e a listas de destaques profissionais. Isso dificulta substituir o texto por uma narrativa mais descritiva e manter a formatação Markdown diretamente no arquivo de dados; a página precisa aceitar parágrafos independentes enquanto o conteúdo definitivo ainda será escrito em uma etapa posterior.

## What Changes

- Alterar `profile.summary` no `_data/portfolio/pt-BR.yml` para uma string Markdown multilinha, com parágrafos separados por linhas em branco.
- Alterar `experience.highlights` para strings Markdown multilinha, substituindo a estrutura de lista por parágrafos separados.
- Renderizar `summary` e `highlights` por meio de `markdownify`, preservando a separação em parágrafos no HTML publicado.
- Remover das áreas descritivas de `_data/portfolio/pt-BR.yml` o texto atual baseado no currículo e substituí-lo integralmente por textos temporários em estilo lorem ipsum.
- Manter os campos estruturais necessários para a landing page — identificação, empresa, cargo, períodos, formação, certificações e categorias de habilidades — sem convertê-los em texto lorem ipsum.
- Preparar a estrutura uma única vez para que futuras substituições do conteúdo descritivo ocorram somente em `_data/portfolio/pt-BR.yml`, sem novos ajustes em `index.md` ou em outros arquivos da página.
- Documentar no planejamento e na implementação os formatos Markdown suportados pelo tema, incluindo `**negrito**`, `*itálico*`, `_ênfase_`, links, imagens, títulos, citações, listas ordenadas e não ordenadas (inclusive aninhadas), tabelas, listas de definição, notas de rodapé, blocos de código com syntax highlighting e atributos/classes como `.notice` e `.btn`.

## Capabilities

### New Capabilities

Nenhuma.

### Modified Capabilities

- `professional-portfolio`: a apresentação editorial deve aceitar e exibir resumo e descrições de experiência como conteúdo Markdown composto por múltiplos parágrafos, mantendo a legibilidade e a semântica da página.

## Impact

- `_data/portfolio/pt-BR.yml`: mudança do formato dos campos editoriais e substituição do conteúdo curricular descritivo por lorem ipsum.
- `index.md`: adaptação única da renderização do resumo e das experiências, removendo a dependência de listas para `highlights`; depois disso, não será necessário alterar sua estrutura para trocar os textos.
- `openspec/specs/professional-portfolio/spec.md`: inclusão dos comportamentos esperados para conteúdo multilinha e Markdown.
- Documentação nos próprios dados e no planejamento: exemplos de sintaxe para edição futura do conteúdo.
- Não há alteração de dependências, APIs, infraestrutura de publicação ou demais seções estruturais do portfólio.
