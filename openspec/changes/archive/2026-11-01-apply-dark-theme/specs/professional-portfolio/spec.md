# Spec Delta

## MODIFIED Requirements

### Requirement: Fidelidade visual ao tema de referência
A página inicial SHALL preservar a aparência e o comportamento visual nativos do Minimal Mistakes, usando a skin escura `dark` como tema visual da página e sem customizações de estilo posteriores que alterem sua composição.

#### Scenario: Skin escura é selecionada
- **WHEN** a página inicial é compilada
- **THEN** o fundo, o texto, os links, os controles e o rodapé usam a paleta escura nativa da skin `dark` do Minimal Mistakes

#### Scenario: Estilos posteriores ao commit-base são revisados
- **WHEN** a implementação compara o estado atual com `5a5b646987ba8ed8530cb227ac8afdda2316ae89`
- **THEN** customizações visuais posteriores são removidas, exceto o markup e os dados necessários para a coluna de perfil personalizada

#### Scenario: Página final é comparada à referência
- **WHEN** a landing page é renderizada após a aplicação da skin escura
- **THEN** mantém a composição, espaçamento, tipografia e comportamento responsivo do tema de referência, com a paleta escura aplicada e sem estilos locais adicionais que criem uma aparência divergente

#### Scenario: Conteúdo permanece legível no tema escuro
- **WHEN** o visitante consulta a página em uma viewport desktop ou mobile
- **THEN** os textos, links, ações de contato, navegação, listas e indicadores de foco permanecem distinguíveis do fundo e utilizáveis
