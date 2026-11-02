# Proposal

## Why

As seções de educação e certificações atualmente exibem apenas identificação e período, o que limita o contexto editorial disponível para visitantes. A seção de habilidades também não faz mais parte do escopo desejado do portfólio e deve ser removida junto com seus dados.

## What Changes

- Adicionar o campo editorial `description` aos itens de educação.
- Adicionar o campo editorial `description` aos itens de certificações.
- Preencher inicialmente essas descrições com texto lorem ipsum em português.
- Renderizar as descrições na página como Markdown multilinha.
- **BREAKING** Remover a seção de habilidades técnicas da página inicial.
- **BREAKING** Remover os dados `skills` do arquivo de conteúdo do portfólio.
- Atualizar o contrato do portfólio para deixar de exigir a apresentação de habilidades e exigir descrições em educação e certificações.

## Capabilities

### New Capabilities

Nenhuma.

### Modified Capabilities

- `professional-portfolio`: alterar o comportamento editorial das seções de formação e certificações e remover a seção de habilidades técnicas.

## Impact

- `index.md`: markup e renderização das qualificações e remoção da seção de habilidades.
- `_data/portfolio/pt-BR.yml`: novos campos `description` e remoção do bloco `skills`.
- Especificação `professional-portfolio`: requisitos e cenários de qualificações atualizados.
- Não há alterações em APIs, dependências ou infraestrutura de publicação.
