# Design

## Context

O campo `profile.summary` em `_data/portfolio/pt-BR.yml` aceita Markdown multilinha e é renderizado com `markdownify` em `index.md`. O currículo original está fora do repositório, em `/home/guilherme/Downloads/`, portanto não pode ser referenciado diretamente pela página publicada.

## Goals / Non-Goals

**Goals:**

- Publicar uma cópia do PDF dentro dos arquivos estáticos do site.
- Adicionar o parágrafo final ao `profile.summary`, usando um link Markdown apenas na palavra “aqui”.
- Usar um caminho público estável e compatível com GitHub Pages.
- Verificar a presença do arquivo e a renderização do link no build.

**Non-Goals:**

- Alterar o layout, o template de apresentação ou a infraestrutura de publicação.
- Criar um endpoint de download, rastreamento ou processamento do currículo.
- Manter sincronização automática com a pasta Downloads.

## Decisions

- **Ativo estático no repositório:** copiar o PDF para `assets/files/`, pois Jekyll/GitHub Pages publica ativos versionados e o arquivo precisa existir no deploy. Referenciar `/home/guilherme/Downloads/` não funcionaria para visitantes.
- **Nome público seguro:** usar um nome de arquivo sem espaços ou acentos, como `guilherme-novais-desenvolvedor-de-software.pdf`, para evitar problemas de escaping em URLs. O nome original pode ser preservado como origem local, mas não é necessário na URL.
- **Conteúdo no YAML:** inserir o novo parágrafo no final de `profile.summary`, aproveitando o suporte Markdown já existente e evitando alterações em `index.md`.
- **Link de download:** usar um link Markdown para o caminho estático publicado e, se compatível com o comportamento atual do site, o atributo HTML de download poderá ser adicionado apenas se a validação confirmar que não prejudica o GitHub Pages.

## Risks / Trade-offs

- [PDF desatualizado] -> A implementação deve copiar o arquivo atualmente presente em Downloads e registrar o nome público escolhido no change.
- [Arquivo omitido no deploy] -> Validar que o PDF está sob `assets/` e que o build gera o arquivo no destino público.
- [Mudança futura do currículo] -> Uma atualização posterior precisará substituir manualmente o ativo versionado.
