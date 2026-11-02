# Tasks

## 1. Ajustar a renderização do perfil

- [x] 1.1 Remover a segunda entrada visual de email em `_includes/author-profile.html`, mantendo a entrada `Email` proveniente de `author.links` e preservando o metadado semântico `itemprop="email"`; verificar por inspeção do template que existe apenas um link `mailto:` visível.
- [x] 1.2 Remover de `index.md` o parágrafo `profile-contact` com localização, telefone e website; verificar por inspeção que a seção de experiência profissional segue diretamente o conteúdo introdutório.
- [x] 1.3 Remover de `index.md` o bloco `portfolio-actions` com os links "Perfil no LinkedIn" e "Enviar e-mail"; verificar por inspeção que a seção de experiência profissional não é precedida por ações de contato duplicadas.

## 2. Validar a apresentação

- [x] 2.1 Compilar ou executar a validação disponível do site e verificar que a coluna lateral mantém email, telefone, website, LinkedIn e GitHub, enquanto o conteúdo principal não repete localização, telefone, website ou ações de LinkedIn e email.
- [x] 2.2 Executar `openspec validate --type change "remove-duplicated-email-contact"` e confirmar que a mudança atende à especificação e aos artefatos planejados.
