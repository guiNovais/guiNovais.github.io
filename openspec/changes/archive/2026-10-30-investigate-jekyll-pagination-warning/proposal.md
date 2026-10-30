# Proposal

## Why

Ao iniciar `bundle exec jekyll serve`, o plugin informa que não encontrou `index.html` como template e ignora a paginação. O build continua, mas a mensagem indica configuração de paginação não compatível com a homepage atual; esta mudança identifica a causa e aplica a correção quando o uso do site permite fazê-lo com segurança.

## What Changes

- Diagnosticar localmente o aviso e verificar o uso real de posts, listagens e paginação.
- Corrigir a configuração conforme o uso confirmado: remover opções de paginação não utilizadas ou configurar um template adequado se uma listagem paginada for necessária.
- Validar localmente que o aviso desapareceu e que a homepage e listagens necessárias continuam corretas.
- Registrar evidências e alternativas caso não haja solução segura sem decisão funcional.

## Capabilities

### New Capabilities

Nenhuma.

### Modified Capabilities

- `professional-portfolio`: especificar que a configuração de paginação deve corresponder às listagens efetivamente usadas e não gerar aviso quando não há conteúdo paginado.

## Impact

A mudança afeta a configuração Jekyll e, somente se a investigação exigir, a página/layout de arquivo. A validação é local; publicação e infraestrutura de deploy ficam fora do escopo.
