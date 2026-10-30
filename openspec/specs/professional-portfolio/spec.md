# professional-portfolio Specification

## Purpose

Define o comportamento do portfólio profissional público de Guilherme Novais, permitindo que visitantes e sistemas automatizados encontrem e compreendam seu perfil, trajetória, formação, certificações e competências.

## Requirements

### Requirement: Apresentação profissional e navegação
O site SHALL apresentar o perfil profissional em português brasileiro e oferecer navegação clara entre as seções principais do portfólio.

#### Scenario: Visitante acessa a página inicial
- **WHEN** um visitante abre a página inicial publicada
- **THEN** encontra o nome, uma apresentação profissional e navegação para experiência, formação, certificações e habilidades

#### Scenario: Conteúdo da primeira versão
- **WHEN** o conteúdo do portfólio é publicado
- **THEN** os textos apresentados estão em português brasileiro e o documento declara o idioma `pt-BR`

### Requirement: Histórico profissional
O portfólio SHALL apresentar cada experiência profissional com empresa, cargo, período e atividades descritas no PDF curricular indicado pelo usuário como fonte da verdade, sem acrescentar fatos profissionais não presentes nessa fonte.

#### Scenario: Visitante consulta uma experiência
- **WHEN** o visitante navega pela seção de experiência profissional
- **THEN** cada experiência pode ser identificada por empresa, cargo e período, e suas atividades são legíveis como conteúdo textual estruturado

### Requirement: Formação, certificações e habilidades
O portfólio SHALL apresentar a formação acadêmica, as certificações e as habilidades técnicas agrupadas por categoria conforme os dados disponíveis no PDF curricular indicado pelo usuário como fonte da verdade.

#### Scenario: Visitante consulta qualificações
- **WHEN** o visitante navega pelas seções de formação, certificações ou habilidades
- **THEN** encontra os itens correspondentes agrupados sob títulos descritivos e em ordem de leitura compreensível

### Requirement: Acessibilidade e adaptação a telas
O site SHALL permitir a navegação por teclado e a leitura por tecnologias assistivas, e SHALL adaptar o conteúdo a telas estreitas sem perda de informação ou necessidade de rolagem horizontal da página.

#### Scenario: Navegação por teclado
- **WHEN** uma pessoa usa somente o teclado para navegar
- **THEN** os links de navegação e contato são alcançáveis em ordem lógica e possuem indicação visível de foco

#### Scenario: Leitura em tela estreita
- **WHEN** o portfólio é visualizado em uma tela estreita
- **THEN** texto, navegação e listas permanecem legíveis e utilizáveis sem rolagem horizontal da página

### Requirement: Indexação e compartilhamento
O site SHALL expor título, descrição, URL canônica `https://guinovaes.github.io/` e metadados de compartilhamento coerentes com o perfil profissional, além de uma estrutura HTML semântica que permita identificar suas seções e conteúdos.

#### Scenario: Mecanismo de busca processa a página
- **WHEN** um coletor indexa a página inicial
- **THEN** encontra título, descrição, URL canônica `https://guinovaes.github.io/` e conteúdo principal em uma hierarquia semântica

### Requirement: Publicação no GitHub Pages
O site SHALL ser compilável como site estático Jekyll e publicado pelo fluxo existente de GitHub Actions e GitHub Pages, sem exigir alterações nessa infraestrutura como parte desta mudança.

#### Scenario: Publicação de uma revisão aprovada
- **WHEN** uma revisão do site é disponibilizada pelo fluxo existente de GitHub Actions
- **THEN** o GitHub Pages publica a versão compilada e a página inicial do portfólio fica acessível na URL do site

### Requirement: Paginação sem avisos de configuração
A configuração de paginação SHALL corresponder ao uso real do site: quando houver uma listagem paginada, suas páginas devem ser geradas; quando não houver conteúdo ou listagem que use paginação, o build não deve emitir aviso de paginação ignorada por falta de template.

#### Scenario: Site não usa listagem de posts paginada
- **WHEN** o site é compilado sem conteúdo que demande paginação
- **THEN** o build termina sem o aviso de que a paginação foi ignorada por falta de `index.html`

#### Scenario: Listagem paginada está configurada e há posts suficientes
- **WHEN** o site é compilado com posts acima do limite configurado para cada página
- **THEN** a página de listagem e suas páginas seguintes são geradas em rotas navegáveis
