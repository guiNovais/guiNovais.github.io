# Spec Delta

## MODIFIED Requirements

### Requirement: Apresentação profissional e navegação
O site SHALL apresentar o perfil profissional em português brasileiro em uma estrutura editorial composta por nome no header, posicionamento profissional, competências de destaque, introdução, ações principais e seções claramente tituladas, além de oferecer navegação clara entre as seções principais do portfólio. O nome não SHALL ser repetido no conteúdo da introdução.

#### Scenario: Visitante acessa a página inicial
- **WHEN** um visitante abre a página inicial publicada
- **THEN** encontra no header o nome `Guilherme Novais`, além do posicionamento `Desenvolvedor de Softwares`, das competências `Java`, `Spring Boot`, `SAGA`, `Axon Framework` e `OpenSpec`, de uma apresentação profissional introdutória, ações de contato e navegação para experiência, formação, certificações e habilidades, sem uma segunda ocorrência do nome no conteúdo da introdução

#### Scenario: Conteúdo da primeira versão
- **WHEN** o conteúdo do portfólio é publicado
- **THEN** os textos apresentados estão em português brasileiro, o documento declara o idioma `pt-BR` e a página mantém uma hierarquia de títulos e parágrafos que permite leitura editorial escaneável
