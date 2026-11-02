# Proposal

## Why

A apresentação já descreve a trajetória profissional, mas não oferece um acesso direto ao currículo completo. Adicionar um link de download após o parágrafo sobre o ChatGPT Go facilita que recrutadores e visitantes obtenham a versão atual do documento.

## What Changes

- Acrescentar um último parágrafo à apresentação em português brasileiro com o texto “Você pode baixar meu currículo aqui”.
- Transformar “aqui” em um hyperlink para o arquivo PDF do currículo publicado pelo site.
- Incluir o PDF no conjunto de arquivos estáticos do site para que o link funcione no GitHub Pages.
- Preservar a renderização existente de parágrafos Markdown e a navegação acessível por teclado.

## Capabilities

### New Capabilities

- Nenhuma.

### Modified Capabilities

- `professional-portfolio`: a apresentação passa a oferecer um link identificável para baixar o currículo em PDF.

## Impact

- Arquivo de dados editorial: `_data/portfolio/pt-BR.yml`.
- Novo recurso estático dentro do repositório, derivado de `/home/guilherme/Downloads/Guilherme Novais - Desenvolvedor de Software.pdf`.
- Build Jekyll/GitHub Pages: nenhuma alteração de infraestrutura prevista.
- A URL pública do PDF será um caminho estático relativo ao site, com o nome do arquivo codificado de forma segura.
