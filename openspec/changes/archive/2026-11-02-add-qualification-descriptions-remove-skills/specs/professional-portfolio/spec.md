# Spec Delta

## MODIFIED Requirements

### Requirement: Formação, certificações e habilidades
O portfólio SHALL apresentar a formação acadêmica e as certificações com descrições editoriais associadas, conforme os dados disponíveis no PDF curricular indicado pelo usuário como fonte da verdade. A seção de habilidades técnicas não SHALL ser apresentada.

#### Scenario: Visitante consulta qualificações
- **WHEN** o visitante navega pelas seções de formação ou certificações
- **THEN** encontra os itens correspondentes agrupados sob títulos descritivos e em ordem de leitura compreensível

#### Scenario: Visitante consulta formação
- **WHEN** o visitante navega pela seção de educação
- **THEN** encontra cada formação com instituição, grau, período e uma descrição textual associada

#### Scenario: Visitante consulta certificações
- **WHEN** o visitante navega pela seção de certificações
- **THEN** encontra cada certificação com nome, período e uma descrição textual associada

#### Scenario: Conteúdo inicial usa preenchimento
- **WHEN** a mudança é publicada antes da redação definitiva das descrições
- **THEN** as descrições de educação e certificações exibem somente textos de preenchimento em estilo lorem ipsum

#### Scenario: Habilidades técnicas são removidas
- **WHEN** o visitante consulta a página inicial
- **THEN** não encontra uma seção de habilidades técnicas nem seus grupos de competências

## REMOVED Requirements

### Requirement: Apresentação de habilidades técnicas
**Reason**: A nova organização do portfólio remove habilidades técnicas do conteúdo publicado.
**Migration**: Remover o bloco de dados `skills` e o markup que renderiza seus grupos; não há substituição nesta mudança.
