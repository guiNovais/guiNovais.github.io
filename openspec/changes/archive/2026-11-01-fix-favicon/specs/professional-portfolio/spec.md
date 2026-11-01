# Spec Delta

## MODIFIED Requirements

### Requirement: Publicação no GitHub Pages
O site SHALL ser compilável como site estático Jekyll e publicado pelo fluxo existente de GitHub Actions e GitHub Pages, sem exigir alterações nessa infraestrutura como parte desta mudança.

#### Scenario: Publicação de uma revisão aprovada
- **WHEN** uma revisão do site é disponibilizada pelo fluxo existente de GitHub Actions
- **THEN** o GitHub Pages publica a versão compilada e a página inicial do portfólio fica acessível na URL do site

#### Scenario: Solicitação do favicon na raiz
- **WHEN** um navegador ou crawler solicita `GET /favicon.ico` no site publicado
- **THEN** o servidor retorna o arquivo favicon com resposta bem-sucedida, em vez de um erro de recurso não encontrado
