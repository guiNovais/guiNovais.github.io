# Design

## Context

O template `_includes/author-profile.html` percorre `author.links` e, depois, renderiza um bloco adicional quando `author.email` está definido. O perfil atual preenche ambas as fontes com o mesmo endereço. Além disso, `index.md` renderiza um parágrafo `profile-contact` com localização, telefone e website, embora esses dados já estejam na coluna lateral. O mesmo arquivo também renderiza o bloco `portfolio-actions` com links para o LinkedIn e envio de email, duplicando canais já disponíveis na coluna lateral.

## Goals / Non-Goals

**Goals:**

- Manter o email da lista `author.links` como o único link visível de email na coluna.
- Preservar o campo `author.email` para metadados semânticos e usos fora da lista visual.
- Não alterar os outros canais de contato.
- Remover a repetição de localização, telefone e website do conteúdo principal.
- Remover as ações de LinkedIn e email do conteúdo principal, mantendo esses canais na coluna lateral.

**Non-Goals:**

- Não reorganizar a coluna de perfil.
- Não modificar os dados de contato, URLs ou estilos do site.
- Não alterar a infraestrutura de publicação.

## Decisions

- Remover o bloco de renderização dedicado a `author.email` no template e preservar o metadado `itemprop="email"` em um ponto não visual do perfil, se necessário, para evitar perder informação semântica.
- Manter a entrada `Email` em `author.links`, pois ela segue o mesmo padrão visual dos demais canais e é a primeira ocorrência apresentada.
- Remover o parágrafo `profile-contact` de `index.md`, pois localização, telefone e website já são apresentados na coluna lateral.
- Remover o bloco `portfolio-actions` de `index.md`, pois LinkedIn e email já são apresentados na coluna lateral.
- Validar a saída compilada ou o markup do template para garantir exatamente um link `mailto:` visível na coluna.

## Risks / Trade-offs

- [Risco] Remover o bloco inteiro pode eliminar o microdata do email. -> [Mitigação] Preservar o `meta itemprop="email"` em posição não visual, se necessário, durante a implementação.
- [Risco] A remoção do parágrafo pode reduzir a visibilidade imediata dos contatos no conteúdo principal. -> [Mitigação] Confirmar que a coluna lateral permanece presente e acessível em desktop e mobile.
- [Risco] A remoção das ações pode reduzir os atalhos de contato no conteúdo principal. -> [Mitigação] Confirmar que LinkedIn e email continuam disponíveis na coluna lateral.
- [Risco] Testes existentes podem esperar o bloco dedicado. -> [Mitigação] Atualizar apenas as expectativas relacionadas à contagem de links de email.
