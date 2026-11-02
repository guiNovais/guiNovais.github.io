# Spec Delta

## MODIFIED Requirements

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
- **WHEN** uma pessoa percorre a coluna somente com o teclado
- **THEN** os links são alcançáveis em ordem lógica, têm nomes discerníveis e exibem foco visível

#### Scenario: Canais de contato não são duplicados
- **WHEN** o perfil publicado contém email em seus links profissionais e também possui um campo de email para metadados
- **THEN** a coluna lateral exibe um único link visível para email, preservando os demais canais de contato

#### Scenario: Dados da coluna lateral não são repetidos no conteúdo principal
- **WHEN** a página inicial exibe a coluna lateral com localização, telefone e website
- **THEN** o conteúdo principal não exibe um bloco adicional com esses mesmos dados nem ações duplicadas de LinkedIn ou email antes da seção de experiência profissional
