# Tasks

## 1. Diagnóstico

- [x] 1.1 Reproduzir o aviso com `bundle exec jekyll serve` e confirmar que a homepage é servida normalmente.
- [x] 1.2 Inspecionar a lógica da versão instalada de `jekyll-paginate` e registrar por que não reconhece o template atual.
- [x] 1.3 Verificar existência de posts, arquivos de listagem, referências a `paginator` e rotas paginadas esperadas; documentar qual cenário se aplica.

### Achados

- `jekyll-paginate` 1.1.0 considera uma página candidata somente quando `page.name == 'index.html'` e ela está na hierarquia de `paginate_path`; a homepage atual é `index.md`.
- `jekyll serve` reproduziu o aviso, inicializou e respondeu HTTP 200 na homepage.
- Não há `_posts` na raiz publicada. Os diretórios `docs/` e `test/` que contêm posts estão excluídos da configuração. A homepage usa `layout: single`; apenas o layout `home`, não usado atualmente, consome `paginator`.
- Não há listagem paginada necessária no site atual. A correção é remover `paginate` e `paginate_path`; o plugin permanece instalado/registrado como dependência do tema.

## 2. Correção

- [x] 2.1 Remover `paginate` e `paginate_path` da configuração do site e confirmar por build local que o aviso desaparece sem afetar a homepage.

## 3. Validação local

- [x] 3.1 Executar build Jekyll local e confirmar ausência do aviso após a correção escolhida.
- [x] 3.2 Inspecionar a homepage gerada e confirmar que as seções do portfólio permanecem presentes; não há rotas paginadas esperadas neste cenário.
- [x] 3.3 Registrar no resumo da change os arquivos alterados e resultados da validação; não publicar nem modificar a infraestrutura de deploy.

### Resultado

`BUNDLE_PATH=/tmp/prof-portfolio-bundle bundle exec jekyll build --destination /tmp/jekyll-pagination-fixed` concluiu sem aviso de paginação. `jekyll serve` também iniciou sem o aviso; a raiz local respondeu HTTP 200 e incluiu Experiência profissional, Educação, Certificações e Habilidades técnicas. A alteração de aplicação ficou restrita à remoção de `paginate` e `paginate_path` em `_config.yml`. Nenhuma publicação ou alteração de deploy foi feita.
