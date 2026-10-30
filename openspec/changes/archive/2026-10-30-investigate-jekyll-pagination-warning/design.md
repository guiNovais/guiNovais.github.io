# Design

## Context

A evidência inicial está descrita aqui para orientar a investigação. O build local concluía apesar do aviso de `jekyll-paginate`. A configuração declarava `paginate: 5`, `paginate_path: /page:num/` e ativava o plugin. A raiz é `index.md`, com `permalink: /` e `layout: single`; não há `_posts` na raiz do site. Os diretórios `docs/` e `test/`, que contêm posts de documentação/fixtures, são excluídos no `_config.yml`. O layout `home` contém a lista e navegação paginada, mas não é usado pela homepage atual.

A versão instalada `jekyll-paginate` 1.1.0 considera como template somente uma página chamada exatamente `index.html` dentro da hierarquia do `paginate_path`. Portanto, `index.md` não é candidata, embora gere `/index.html` no destino.

## Goals / Non-Goals

**Goals:**
- Remover a configuração de paginação não utilizada e o aviso, preservando o conteúdo atual.
- Validar build e servidor localmente.

**Non-Goals:**
- Publicar o site ou alterar workflow/infraestrutura do GitHub Pages.
- Introduzir conteúdo de blog ou mudar a homepage para uma listagem de posts.
- Remover `jekyll-paginate` da dependência/plugin do tema; o gerador não emite aviso quando `paginate` não está configurado.

## Decisions

- Remover `paginate` e `paginate_path` de `_config.yml`. A investigação encontrou zero posts na raiz publicada, nenhuma listagem que use `paginator` e uma homepage de portfólio com `layout: single`; habilitar paginação não corresponde ao uso atual.
- Manter o plugin e a dependência como estão. O tema Minimal Mistakes inclui o plugin e seus componentes de paginação; remover a dependência seria desnecessário para resolver o aviso e poderia divergir da configuração base do tema.
- Se futuramente o site ganhar um arquivo paginado, essa página deve usar um arquivo-fonte `index.html` e o layout `home`, conforme a exigência do plugin.

## Risks / Trade-offs

- [Posts adicionados sem uma listagem paginada configurada] → atualmente não há posts publicados; caso um blog seja introduzido, configurar explicitamente uma página `index.html` e validar suas rotas.
- [Silenciar o aviso sem preservar a homepage] → comparar as seções da saída gerada e consultar a homepage servida localmente; ambas mantiveram o conteúdo esperado.

## Migration Plan

1. Remover as duas opções `paginate` e `paginate_path`.
2. Executar `jekyll build` e `jekyll serve` localmente; verificar a resposta HTTP da homepage e suas seções.

Rollback: restaurar essas duas opções em `_config.yml` se o site passar a exigir paginação; nesse caso, também será necessário fornecer um template `index.html` adequado.

## Resultado da validação

O build para `/tmp/jekyll-pagination-fixed` concluiu sem o aviso. O servidor local também iniciou sem o aviso, respondeu à requisição HTTP da raiz e entregou as seções Experiência profissional, Educação, Certificações e Habilidades técnicas. Nenhuma rota paginada era esperada para o conteúdo atual.
