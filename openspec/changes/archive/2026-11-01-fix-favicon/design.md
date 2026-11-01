# Design

## Context

O site usa Jekyll com arquivos estáticos na raiz do repositório e já possui um include de cabeçalho personalizado, mas atualmente não contém um `favicon.ico`. A requisição convencional `/favicon.ico` deve ser atendida diretamente pelo arquivo estático, sem depender de template ou plugin.

## Goals / Non-Goals

**Goals:**

- Publicar o favicon fornecido na rota `/favicon.ico`.
- Preservar o fluxo atual de Jekyll e GitHub Pages.
- Validar a presença do arquivo no output gerado.

**Non-Goals:**

- Gerar variantes PNG, SVG, manifestos ou ícones específicos para dispositivos.
- Alterar o layout, a aparência ou os metadados do portfólio.
- Modificar GitHub Actions, dependências ou configuração de infraestrutura.

## Decisions

- **Usar um arquivo estático na raiz:** o arquivo será colocado em `favicon.ico` no diretório raiz do site, pois Jekyll publica esse caminho como `/favicon.ico` sem configuração adicional.
- **Usar o arquivo fornecido pelo usuário:** evita transformação ou perda de compatibilidade do formato ICO e mantém a identidade visual escolhida.
- **Não adicionar markup obrigatório ao cabeçalho:** navegadores já solicitam `/favicon.ico` automaticamente; uma tag `<link>` pode ser adicionada futuramente se forem necessárias variantes, mas não é necessária para corrigir o erro atual.

## Risks / Trade-offs

- [Arquivo inválido ou incompatível] -> Validar o tipo e a existência do arquivo no output após o build.
- [Arquivo não incluído na publicação] -> Confirmar que `favicon.ico` está na raiz do diretório gerado e testar a rota final.
