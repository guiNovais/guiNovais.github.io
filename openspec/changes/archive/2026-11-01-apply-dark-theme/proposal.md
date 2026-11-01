# Proposal

## Why

O portfólio atualmente usa a skin clara padrão do Minimal Mistakes, o que não corresponde ao tema escuro desejado para sua identidade visual. A aplicação da skin escura nativa melhora a coerência visual e reduz a necessidade de estilos personalizados, preservando a estrutura e o comportamento atuais.

## What Changes

- Aplicar a skin `dark` nativa do Minimal Mistakes à página do portfólio.
- Preservar o conteúdo, a estrutura editorial, os links profissionais e o layout responsivo existentes.
- Verificar contraste, legibilidade, foco de teclado e aparência dos elementos da página após a mudança.
- Manter o build Jekyll e o fluxo atual de publicação sem alterações de infraestrutura.

## Capabilities

### New Capabilities

Nenhuma.

### Modified Capabilities

- `professional-portfolio`: a página inicial passará a apresentar uma aparência escura acessível, mantendo seu conteúdo e comportamento editorial.

## Impact

- Afeta `_config.yml`, alterando a seleção de `minimal_mistakes_skin`.
- Pode exigir ajustes mínimos em estilos locais caso a skin revele problemas de contraste em componentes específicos.
- Não altera APIs, dependências, dados do portfólio, navegação, infraestrutura de publicação ou URLs públicas.
