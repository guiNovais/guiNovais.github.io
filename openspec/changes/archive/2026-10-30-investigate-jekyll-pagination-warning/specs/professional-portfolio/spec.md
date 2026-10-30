# Spec Delta

## ADDED Requirements

### Requirement: Paginação sem avisos de configuração
A configuração de paginação SHALL corresponder ao uso real do site: quando houver uma listagem paginada, suas páginas devem ser geradas; quando não houver conteúdo ou listagem que use paginação, o build não deve emitir aviso de paginação ignorada por falta de template.

#### Scenario: Site não usa listagem de posts paginada
- **WHEN** o site é compilado sem conteúdo que demande paginação
- **THEN** o build termina sem o aviso de que a paginação foi ignorada por falta de `index.html`

#### Scenario: Listagem paginada está configurada e há posts suficientes
- **WHEN** o site é compilado com posts acima do limite configurado para cada página
- **THEN** a página de listagem e suas páginas seguintes são geradas em rotas navegáveis
