# Design

## Context

O repositório na branch atual contém o tema Minimal Mistakes e uma página inicial de demonstração, mas ainda não possui uma fonte estruturada com os dados do currículo. O PDF `/home/guilherme/Downloads/Guilherme Novais - Desenvolvedor de Software.pdf` é a fonte da verdade para o conteúdo profissional. A mudança deverá criar uma fonte de dados em português brasileiro separada da apresentação, conforme a capacidade especificada. A branch `backup/minimal-mistakes` contém uma versão personalizada que serve como referência, junto com saída compilada (`_site`) e dependências vendorizadas; esses artefatos não devem ser tratados como fonte do site.

O repositório não versiona um workflow de GitHub Actions nem declara `url` e `baseurl` na configuração examinada. O usuário definiu `https://guinovaes.github.io/` como URL canônica e confirmou que a publicação por GitHub Actions e GitHub Pages é infraestrutura existente a ser mantida. A ausência de workflow versionado é uma dependência externa: não se deve adicionar ou modificar workflow, configuração de Pages, ambiente ou dependências de publicação. A mudança ajustará os metadados de URL do site e verificará a compatibilidade com o fluxo externo quando disponível. Também não há especificações OpenSpec anteriores. A motivação e o escopo funcional estão em `proposal.md`; os comportamentos esperados estão em `specs/professional-portfolio/spec.md`.

## Goals / Non-Goals

**Goals:**

- Consolidar o conteúdo do portfólio em uma página pública, com hierarquia semântica e compatível com o layout responsivo do Minimal Mistakes.
- Preservar a separação entre dados em português e a apresentação, permitindo acrescentar conteúdo de outro idioma no futuro sem introduzir alternância de idioma nesta versão.
- Usar os recursos de SEO e acessibilidade já disponíveis no tema antes de considerar substituí-los ou duplicá-los.
- Preservar a publicação estática existente pelo GitHub Actions e GitHub Pages e fornecer conteúdo compatível com ela.

**Non-Goals:**

- Tradução ou seletor de idioma nesta entrega.
- Reescrever ou substituir o tema Minimal Mistakes.
- Criar backend, API, formulários dinâmicos, analytics ou sistema de comentários.
- Expandir as experiências para além do conteúdo aprovado do currículo.
- Copiar `_site` ou `vendor/bundle` da branch de referência como conteúdo-fonte ou dependências do projeto.

## Decisions

### Manter Minimal Mistakes e estender a estrutura existente

Usar os layouts, componentes, estilos responsivos, skip links e metadados de SEO fornecidos pelo Minimal Mistakes, personalizando a configuração, a navegação e o conteúdo do portfólio.

**Alternativas consideradas:** substituir o tema por uma implementação própria ou copiar integralmente a branch de backup. A primeira opção aumenta o trabalho de acessibilidade e responsividade; a segunda pode trazer conteúdo gerado e dependências vendorizadas sem necessidade. A branch será consultada para comparar configuração e conteúdo, e cada elemento será reaproveitado apenas quando fizer sentido para os requisitos.

### Manter os dados de conteúdo fora do template

Organizar os textos e listas do primeiro idioma em dados sob uma chave/localidade `pt-BR`, deixando a página responsável pela estrutura e renderização. Na primeira versão, a página e o conteúdo disponíveis permanecem somente em português brasileiro. Um futuro idioma poderá acrescentar sua própria fonte de conteúdo e rota sem exigir misturar traduções nos mesmos campos.

**Alternativas consideradas:** manter todos os textos embutidos na página ou adicionar agora um framework/plugin de internacionalização. Textos embutidos dificultam manter traduções alinhadas; o plugin adicionaria dependência e comportamento multilíngue fora do escopo atual.

### Usar HTML semântico e os metadados do tema

Representar as seções com títulos hierárquicos, listas para atividades e habilidades e elementos de conteúdo apropriados. Configurar idioma, título, descrição e URL canônica, aproveitando os templates de SEO, sitemap e dados estruturados existentes no tema, evitando uma segunda implementação de metadados.

**Alternativas consideradas:** apresentar as seções como texto visual sem estrutura ou duplicar manualmente os recursos de SEO. Essas opções pioram a leitura automatizada ou criam metadados inconsistentes.

### Preservar o fluxo existente de GitHub Actions e Pages

Reutilizar o fluxo de publicação já existente por GitHub Actions e GitHub Pages sem alterar workflows, configurações do ambiente de Pages, permissões ou dependências relacionadas ao deploy. Definir a URL do site como `https://guinovaes.github.io`, com `baseurl` vazio para a raiz, e gerar metadados canônicos para `https://guinovaes.github.io/`.

**Alternativas consideradas:** adicionar um workflow ao repositório ou migrar a configuração atual para outro método de publicação. Essas opções duplicariam ou alterariam uma infraestrutura que o usuário confirmou como existente e fora do escopo desta mudança.

### Validar acessibilidade e responsividade no site gerado

Na implementação, verificar os fluxos com teclado, foco visível, links de salto, contraste e organização de headings; verificar também a leitura em larguras pequenas e ausência de rolagem horizontal. Priorizar ajustes de configuração, conteúdo e estilos locais antes de alterar componentes internos do tema.

**Alternativas consideradas:** assumir que o tema garante conformidade completa. O tema oferece uma base útil, mas conteúdo, navegação e personalizações ainda podem introduzir barreiras.

## Risks / Trade-offs

- [A branch de referência contém artefatos gerados e dependências vendorizadas] → Usar apenas arquivos de configuração e conteúdo como referência; reconstruir a publicação a partir do código-fonte mantido.
- [A configuração do fluxo de publicação não está versionada neste repositório] → Tratar Actions/Pages como infraestrutura externa e não verificá-la neste change; validar apenas o build local e os metadados/content gerados, sem publicar nem acessar a URL pública.
- [O tema fornece padrões, mas não garante sozinho acessibilidade do conteúdo final] → Validar a página renderizada com navegação por teclado e inspeção responsiva durante a implementação.
- [A separação por idioma pode evoluir para páginas divergentes] → Manter estrutura e campos equivalentes entre futuras fontes de dados localizadas, quando uma tradução for adicionada.

## Migration Plan

1. Configurar o conteúdo, a apresentação e os metadados canônicos do portfólio sem alterar a fonte para artefatos de build.
2. Executar localmente o build Jekyll e corrigir inconsistências de configuração e links.
3. Validar localmente o HTML gerado, o conteúdo curricular, a estrutura semântica, SEO, acessibilidade e responsividade. Publicação e validação da URL pública permanecem fora deste change.

Para reverter, restaurar os metadados de URL anteriores e reverter as alterações de conteúdo/configuração do site. Nenhum dado persistente nem infraestrutura de publicação é migrado ou alterado.
