# Spec Delta

## MODIFIED Requirements

### Requirement: Apresentação profissional e navegação
O site SHALL apresentar o perfil profissional em português brasileiro em uma estrutura editorial composta por introdução, ações principais e seções claramente tituladas, além de oferecer navegação clara entre as seções principais do portfólio.

#### Scenario: Visitante acessa a página inicial
- **WHEN** um visitante abre a página inicial publicada
- **THEN** encontra o nome, uma apresentação profissional introdutória, ações de contato e navegação para experiência, formação, certificações e habilidades

#### Scenario: Conteúdo da primeira versão
- **WHEN** o conteúdo do portfólio é publicado
- **THEN** os textos apresentados estão em português brasileiro, o documento declara o idioma `pt-BR` e a página mantém uma hierarquia de títulos e parágrafos que permite leitura editorial escaneável

### Requirement: Histórico profissional
O portfólio SHALL apresentar cada experiência profissional com empresa, cargo, período e atividades descritas no PDF curricular indicado pelo usuário como fonte da verdade, sem acrescentar fatos profissionais não presentes nessa fonte.

#### Scenario: Visitante consulta uma experiência
- **WHEN** o visitante navega pela seção de experiência profissional
- **THEN** cada experiência pode ser identificada por empresa, cargo e período, e suas atividades são legíveis como parágrafos textuais estruturados

## ADDED Requirements

### Requirement: Conteúdo editorial Markdown multilinha
Os campos editoriais `profile.summary` e `experience.highlights` SHALL aceitar Markdown multilinha e SHALL preservar seus parágrafos e formatação inline na página publicada.

#### Scenario: Resumo possui múltiplos parágrafos
- **WHEN** `profile.summary` contém blocos de texto separados por linhas em branco
- **THEN** a introdução renderiza cada bloco como um parágrafo HTML independente

#### Scenario: Experiência possui múltiplos parágrafos
- **WHEN** `experience.highlights` contém blocos de texto separados por linhas em branco
- **THEN** a experiência renderiza os blocos como parágrafos, sem convertê-los em itens de uma lista

#### Scenario: Campo editorial contém listas Markdown
- **WHEN** `profile.summary` ou `experience.highlights` contém uma lista ordenada, não ordenada ou aninhada escrita em Markdown
- **THEN** a página renderiza a lista correspondente, sem impor uma lista adicional ao redor do conteúdo

#### Scenario: Campo editorial contém recursos avançados do tema
- **WHEN** um campo editorial contém títulos, citações, tabelas, listas de definição, imagens, notas de rodapé, blocos de código com linguagem ou atributos Kramdown documentados pelo tema
- **THEN** a página processa esses recursos com o comportamento padrão do Markdown/Kramdown usado pelo Minimal Mistakes

#### Scenario: Conteúdo usa formatação Markdown inline
- **WHEN** um campo editorial contém `**negrito**`, `*itálico*`, `_ênfase_` ou links Markdown
- **THEN** a página renderiza a formatação correspondente sem exibir os marcadores Markdown como texto literal

#### Scenario: Conteúdo temporário é publicado
- **WHEN** a mudança é aplicada antes da redação do conteúdo definitivo
- **THEN** `summary` e `highlights` exibem somente textos de preenchimento em estilo lorem ipsum, sem reproduzir o conteúdo curricular descritivo anterior

#### Scenario: Dados estruturais permanecem disponíveis
- **WHEN** o conteúdo descritivo é substituído por lorem ipsum
- **THEN** a página preserva os valores estruturais de identificação, empresa, cargo, períodos, formação, certificações e habilidades necessários para compor suas seções

#### Scenario: Conteúdo definitivo é substituído no arquivo de dados
- **WHEN** uma atividade futura troca os textos temporários de `summary` e `highlights`
- **THEN** a landing page apresenta os novos textos sem exigir alterações em sua estrutura ou em outros arquivos de template
