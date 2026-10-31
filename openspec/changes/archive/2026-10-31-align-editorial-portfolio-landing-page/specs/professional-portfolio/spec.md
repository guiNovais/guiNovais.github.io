# Spec Delta

## MODIFIED Requirements

### Requirement: Apresentação profissional e navegação
O site SHALL apresentar o perfil profissional em português brasileiro em uma estrutura editorial composta por introdução, ações principais e seções claramente tituladas, além de oferecer navegação clara entre as seções principais do portfólio.

#### Scenario: Visitante acessa a página inicial
- **WHEN** um visitante abre a página inicial publicada
- **THEN** encontra o nome, uma apresentação profissional introdutória, ações de contato e navegação para experiência, formação, certificações e habilidades

#### Scenario: Conteúdo da primeira versão
- **WHEN** o conteúdo do portfólio é publicado
- **THEN** os textos apresentados estão em português brasileiro, o documento declara o idioma `pt-BR` e a página mantém uma hierarquia de títulos e listas que permite leitura editorial escaneável

### Requirement: Coluna lateral de perfil
A página inicial SHALL apresentar, em desktop, uma coluna lateral à esquerda do conteúdo principal, contendo um avatar genérico temporário, o nome, uma descrição breve e links profissionais derivados do perfil publicado.

#### Scenario: Visitante acessa a landing page em desktop
- **WHEN** o visitante abre a página inicial em uma viewport ampla
- **THEN** encontra a coluna de perfil à esquerda e o conteúdo editorial do portfólio à direita, com separação visual clara e sem duplicar fatos fora do YAML

#### Scenario: Avatar temporário é exibido
- **WHEN** a página renderiza a coluna de perfil antes da definição de uma imagem definitiva
- **THEN** exibe um avatar genérico com texto alternativo descritivo, sem depender de imagem externa ou de arquivos da documentação do tema

#### Scenario: Visitante acessa a landing page em mobile
- **WHEN** o visitante abre a página em uma viewport estreita
- **THEN** a coluna lateral é empilhada em ordem lógica antes do conteúdo principal, permanecendo legível e sem rolagem horizontal

#### Scenario: Visitante navega pela coluna usando teclado
- **WHEN** uma pessoa percorre a coluna lateral somente com o teclado
- **THEN** os links são alcançáveis em ordem lógica, têm nomes discerníveis e exibem foco visível

### Requirement: Fidelidade visual ao tema de referência
A página inicial SHALL preservar a aparência e o comportamento visual nativos do Minimal Mistakes, sem customizações de estilo posteriores ao commit-base que alterem a composição de referência.

#### Scenario: Estilos posteriores ao commit-base são revisados
- **WHEN** a implementação compara o estado atual com `5a5b646987ba8ed8530cb227ac8afdda2316ae89`
- **THEN** customizações visuais posteriores são removidas, exceto o markup e os dados necessários para a coluna de perfil personalizada

#### Scenario: Página final é comparada à referência
- **WHEN** a landing page é renderizada após a restauração dos estilos
- **THEN** mantém a composição, espaçamento, tipografia e comportamento responsivo do tema de referência, sem estilos locais adicionais que criem uma aparência divergente

## ADDED Requirements

### Requirement: Ações de contato da apresentação
A página inicial SHALL oferecer ações de contato com nomes discerníveis, usando os canais profissionais disponíveis no perfil publicado.

#### Scenario: Visitante escolhe um canal profissional
- **WHEN** o visitante consulta a introdução da página inicial
- **THEN** encontra links identificáveis para o perfil do LinkedIn e para contato por e-mail

#### Scenario: Visitante navega por teclado
- **WHEN** uma pessoa percorre as ações de contato usando somente o teclado
- **THEN** cada link é alcançável em ordem lógica e possui indicação visual de foco
