# Proposal

## Why

O perfil já possui um canal WhatsApp configurado, mas o template o renderiza fora da lista de contatos controlada por `.author__urls-wrapper`. Isso deixa o canal separado do menu de contatos do perfil e torna a apresentação inconsistente com os demais links profissionais.

## What Changes

- Adicionar o WhatsApp como item da lista de contatos dentro de `.author__urls-wrapper`.
- Reutilizar os dados configurados em `author.whatsapp` para URL, rótulo e ícone.
- Renderizar o item somente quando houver uma URL configurada, mantendo o link identificável e seguro.
- Remover a renderização duplicada do WhatsApp fora do wrapper.

## Capabilities

### New Capabilities

Nenhuma.

### Modified Capabilities

- `professional-portfolio`: a coluna lateral deve incluir o WhatsApp na lista de links profissionais do perfil quando esse canal estiver configurado.

## Impact

- `_includes/author-profile.html`: markup Liquid da lista de contatos do perfil.
- `_config.yml`: os dados existentes de WhatsApp continuam sendo a fonte de configuração; não é necessário alterar a URL atual.
- A aparência deve continuar usando as classes e o comportamento nativos do tema, sem nova dependência ou alteração de infraestrutura.
