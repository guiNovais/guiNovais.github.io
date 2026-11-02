# Tasks

## 1. Atualizar os dados editoriais

- [x] 1.1 Adicionar `description` com lorem ipsum em português ao item de educação e verificar que o YAML continua válido e contém instituição, grau e período originais.
- [x] 1.2 Adicionar `description` com lorem ipsum em português a cada certificação e verificar que cada item mantém nome e período originais.
- [x] 1.3 Remover o bloco `skills` de `_data/portfolio/pt-BR.yml` e verificar que não restam dados órfãos de habilidades.

## 2. Atualizar o template da página

- [x] 2.1 Renderizar `education.description` e `certification.description` com `markdownify` em suas respectivas seções e verificar que as descrições aparecem como conteúdo textual na página compilada.
- [x] 2.2 Remover de `index.md` o título, o loop e o markup da seção de habilidades e verificar que a página não contém o título ou os grupos de habilidades.

## 3. Verificar a integração

- [x] 3.1 Executar o build Jekyll existente e verificar que o site compila sem erros ou avisos relacionados aos dados removidos.
- [x] 3.2 Inspecionar a página gerada e verificar as seções de educação e certificações, a ausência de habilidades e a preservação da navegação e do layout existentes.
