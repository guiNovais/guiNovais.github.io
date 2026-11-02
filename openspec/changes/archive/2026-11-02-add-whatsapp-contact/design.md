# Design

## Context

O `_config.yml` já expõe `author.whatsapp` com `label`, `icon` e `url`. No estado atual, `_includes/author-profile.html` renderiza esse contato em um bloco separado antes de `.author__urls-wrapper`, enquanto os demais canais são itens de `.author__urls.social-icons`. A solução deve permanecer compatível com o Minimal Mistakes e não exigir novos estilos ou dependências.

## Goals / Non-Goals

**Goals:**

- Renderizar o WhatsApp como um `<li>` dentro de `.author__urls.social-icons` quando `author.whatsapp.url` existir.
- Preservar o rótulo e o ícone configuráveis, com valores padrão para instalações que omitam esses campos.
- Manter os atributos de segurança, identidade e acessibilidade usados pelos links sociais existentes.
- Garantir que exista apenas uma entrada visual para o WhatsApp.

**Non-Goals:**

- Alterar o número, a URL ou os demais dados do perfil.
- Criar estilos específicos, JavaScript, dependências ou mudanças no fluxo de publicação.
- Alterar a ação de contato da introdução da página.

## Decisions

- **Usar a lista social existente:** inserir o item condicional de WhatsApp dentro de `.author__urls.social-icons`, aproveitando o layout, o menu responsivo e os estilos já fornecidos pelo tema. Criar um bloco paralelo exigiria tratamento visual adicional e manteria o problema de agrupamento.
- **Manter a configuração em `author.whatsapp`:** o template continuará consumindo `url`, `icon` e `label` da configuração existente, com defaults equivalentes aos usados hoje. Isso evita duplicar o número no markup.
- **Remover o bloco standalone:** o bloco `author__whatsapp` atual será removido para evitar duas entradas do mesmo canal. A alternativa de manter ambos não atende ao agrupamento esperado e pode confundir visitantes e tecnologias assistivas.
- **Preservar semântica e segurança do tema:** o novo link usará `<li>`, `rel="nofollow noopener noreferrer me"`, `itemprop="sameAs"`, ícone decorativo com `aria-hidden="true"` e um `<span class="label">` discernível, alinhado aos links existentes.

## Risks / Trade-offs

- [Configuração ausente ou incompleta] → condicionar o item à presença de `author.whatsapp.url` e aplicar defaults para rótulo e ícone.
- [Duplicidade durante a implementação] → remover explicitamente o bloco standalone e validar que o template contém somente uma referência renderizável ao contato.
- [Mudança visual inesperada] → reutilizar exclusivamente as classes nativas da lista social e não alterar Sass.

## Migration Plan

1. Ajustar o include do perfil conforme o design.
2. Compilar o site e inspecionar a coluna lateral para confirmar um único item WhatsApp dentro do menu.
3. Verificar o comportamento quando a configuração existe e quando a URL é omitida.
4. Reverter o commit do include caso a validação revele regressão; nenhuma migração de dados é necessária.
