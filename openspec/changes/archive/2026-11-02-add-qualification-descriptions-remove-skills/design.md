# Design

## Context

Veja `proposal.md` para a motivação. Atualmente `index.md` itera sobre `content.education`, `content.certifications` e `content.skills`, enquanto o YAML fornece apenas metadados básicos para educação e certificações.

## Goals / Non-Goals

**Goals:**

- Manter os dados editoriais no arquivo YAML existente.
- Renderizar as descrições com o mesmo pipeline Markdown já usado por `profile.summary` e `experience.highlights`.
- Remover completamente a fonte de dados e a apresentação de habilidades.

**Non-Goals:**

- Redigir conteúdo curricular definitivo.
- Alterar o layout, a skin, a navegação geral ou a infraestrutura Jekyll.
- Adicionar novas dependências ou alterar o schema de dados além dos campos descritos.

## Decisions

- **Campo `description` em cada item:** usar uma chave consistente em educação e certificações, permitindo substituir o lorem ipsum no futuro sem mudar o template. Uma alternativa seria manter textos fixos no template, mas isso misturaria conteúdo com apresentação.
- **Renderização com `markdownify`:** tratar as descrições como campos editoriais, preservando parágrafos e formatação futura. Exibir texto cru seria inconsistente com os campos editoriais existentes.
- **Remoção integral de `skills`:** apagar tanto o loop da página quanto o bloco YAML, evitando dados órfãos e mantendo o modelo de conteúdo coerente com a interface publicada.

## Risks / Trade-offs

- [Descrições lorem ipsum podem ser publicadas por engano] -> Documentar nos dados e nas tarefas que o texto é provisório e deve ser substituído em uma etapa posterior.
- [Remoção de habilidades reduz informação disponível para visitantes] -> Tratar como mudança intencional de escopo e atualizar a especificação para que testes não esperem mais essa seção.
