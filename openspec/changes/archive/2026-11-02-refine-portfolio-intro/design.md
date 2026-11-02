# Design

## Context

A página inicial usa `index.md` como template Jekyll e obtém os textos da introdução a partir de `_data/portfolio/pt-BR.yml`. Atualmente, o template exibe `profile.headline` e `profile.name`; o campo `profile.name` também alimenta a identidade da coluna lateral.

## Goals / Non-Goals

**Goals:**

- Exibir a nova hierarquia textual no topo sem duplicar o nome; o nome deve ficar restrito ao header/sidebar.
- Manter o campo de nome como dado de identidade reutilizável na coluna lateral.
- Manter as competências editáveis no arquivo de dados, fora do markup do template.
- Preservar a responsividade e o estilo nativo já existente.

**Non-Goals:**

- Alterar a coluna lateral, a descrição SEO ou as demais seções do portfólio.
- Criar uma seção completa de habilidades técnicas.
- Adicionar dependências, scripts ou mudanças na infraestrutura de publicação.

## Decisions

- Adicionar um campo de dados dedicado para as competências de destaque e renderizá-lo como segundo elemento da introdução, após o headline. Isso evita alterar `profile.name`, que possui uso independente no header/sidebar.
- Não renderizar `profile.name` no conteúdo da introdução, evitando que o nome apareça uma segunda vez fora do header/sidebar.
- Usar uma apresentação textual simples das competências, separadas por `·`, para preservar a leitura escaneável e evitar transformar a introdução em uma seção técnica extensa.
- Alterar o front matter `title` de `index.md` para `Guilherme Novais`, pois esse valor controla o título principal da página e os metadados derivados pelo tema.
- Atualizar `profile.headline` para `Desenvolvedor de Softwares`, mantendo a origem dos dados no YAML.

## Risks / Trade-offs

- [Linha de competências extensa em telas estreitas] → Manter o conteúdo como texto fluido e validar a renderização em viewport mobile; não usar uma estrutura que force largura fixa.
- [Inconsistência entre o título da página e a descrição existente] → Preservar a descrição porque ela continua descrevendo corretamente o perfil backend, Java e sistemas distribuídos.

## Migration Plan

1. Atualizar o título do front matter, o headline e o novo campo de competências.
2. Renderizar o headline e as competências na introdução, sem renderizar `profile.name` nela.
3. Compilar o site e verificar a presença do nome somente no header, seguida do headline e da linha de competências.

Para rollback, remover o novo campo e sua renderização e restaurar os valores anteriores do título e do headline.
