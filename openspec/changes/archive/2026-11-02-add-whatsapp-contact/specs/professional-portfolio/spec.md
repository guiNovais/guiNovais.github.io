# Spec Delta

## MODIFIED Requirements

### Requirement: Ações de contato da apresentação
A página inicial SHALL oferecer ações de contato com nomes discerníveis, usando os canais profissionais disponíveis no perfil publicado, incluindo o WhatsApp quando esse canal estiver configurado.

#### Scenario: Visitante escolhe um canal profissional
- **WHEN** o visitante consulta a introdução da página inicial
- **THEN** encontra links identificáveis para o perfil do LinkedIn e para contato por e-mail

#### Scenario: Visitante acessa os contatos do perfil
- **WHEN** o visitante abre a lista de contatos da coluna lateral e existe uma URL de WhatsApp configurada
- **THEN** encontra um item identificável como “WhatsApp” dentro da lista `.author__urls-wrapper`, com ícone correspondente e link para o canal configurado

#### Scenario: WhatsApp não está configurado
- **WHEN** o perfil não possui uma URL de WhatsApp
- **THEN** a lista de contatos não exibe um item vazio ou quebrado para WhatsApp

#### Scenario: Visitante navega por teclado
- **WHEN** uma pessoa percorre as ações de contato usando somente o teclado
- **THEN** cada link é alcançável em ordem lógica e possui indicação visual de foco
