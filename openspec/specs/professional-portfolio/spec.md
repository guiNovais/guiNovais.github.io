# professional-portfolio Specification

## Purpose

Define o comportamento do portfólio profissional público de Guilherme Novais, permitindo que visitantes e sistemas automatizados encontrem e compreendam seu perfil, trajetória, formação, certificações e competências.

## Requirements

### Requirement: Apresentação profissional e navegação
O site SHALL apresentar o perfil profissional em português brasileiro em uma estrutura editorial composta por introdução, ações principais e seções claramente tituladas, além de oferecer navegação clara entre as seções principais do portfólio.

#### Scenario: Visitante acessa a página inicial
- **WHEN** um visitante abre a página inicial publicada
- **THEN** encontra o nome, uma apresentação profissional introdutória, ações de contato e navegação para experiência, formação, certificações e habilidades

#### Scenario: Conteúdo da primeira versão
- **WHEN** o conteúdo do portfólio é publicado
- **THEN** os textos apresentados estão em português brasileiro, o documento declara o idioma `pt-BR` e a página mantém uma hierarquia de títulos e parágrafos que permite leitura editorial escaneável

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

### Requirement: Ações de contato da apresentação
A página inicial SHALL oferecer ações de contato com nomes discerníveis, usando os canais profissionais disponíveis no perfil publicado.

#### Scenario: Visitante escolhe um canal profissional
- **WHEN** o visitante consulta a introdução da página inicial
- **THEN** encontra links identificáveis para o perfil do LinkedIn e para contato por e-mail

#### Scenario: Visitante navega por teclado
- **WHEN** uma pessoa percorre as ações de contato usando somente o teclado
- **THEN** cada link é alcançável em ordem lógica e possui indicação visual de foco

### Requirement: Histórico profissional
O portfólio SHALL apresentar cada experiência profissional com empresa, cargo, período e atividades descritas no PDF curricular indicado pelo usuário como fonte da verdade, sem acrescentar fatos profissionais não presentes nessa fonte.

#### Scenario: Visitante consulta uma experiência
- **WHEN** o visitante navega pela seção de experiência profissional
- **THEN** cada experiência pode ser identificada por empresa, cargo e período, e suas atividades são legíveis como parágrafos textuais estruturados

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

### Requirement: Formação, certificações e habilidades
O portfólio SHALL apresentar a formação acadêmica e as certificações com descrições editoriais associadas, conforme os dados disponíveis no PDF curricular indicado pelo usuário como fonte da verdade. A seção de habilidades técnicas não SHALL ser apresentada.

#### Scenario: Visitante consulta qualificações
- **WHEN** o visitante navega pelas seções de formação ou certificações
- **THEN** encontra os itens correspondentes agrupados sob títulos descritivos e em ordem de leitura compreensível

#### Scenario: Visitante consulta formação
- **WHEN** o visitante navega pela seção de educação
- **THEN** encontra cada formação com instituição, grau, período e uma descrição textual associada

#### Scenario: Visitante consulta certificações
- **WHEN** o visitante navega pela seção de certificações
- **THEN** encontra cada certificação com nome, período e uma descrição textual associada

#### Scenario: Conteúdo inicial usa preenchimento
- **WHEN** a mudança é publicada antes da redação definitiva das descrições
- **THEN** as descrições de educação e certificações exibem somente textos de preenchimento em estilo lorem ipsum

#### Scenario: Habilidades técnicas são removidas
- **WHEN** o visitante consulta a página inicial
- **THEN** não encontra uma seção de habilidades técnicas nem seus grupos de competências

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

#### Scenario: Solicitação do favicon na raiz
- **WHEN** um navegador ou crawler solicita `GET /favicon.ico` no site publicado
- **THEN** o servidor retorna o arquivo favicon com resposta bem-sucedida, em vez de um erro de recurso não encontrado

### Requirement: Paginação sem avisos de configuração
A configuração de paginação SHALL corresponder ao uso real do site: quando houver uma listagem paginada, suas páginas devem ser geradas; quando não houver conteúdo ou listagem que use paginação, o build não deve emitir aviso de paginação ignorada por falta de template.

#### Scenario: Site não usa listagem de posts paginada
- **WHEN** o site é compilado sem conteúdo que demande paginação
- **THEN** o build termina sem o aviso de que a paginação foi ignorada por falta de `index.html`

#### Scenario: Listagem paginada está configurada e há posts suficientes
- **WHEN** o site é compilado com posts acima do limite configurado para cada página
- **THEN** a página de listagem e suas páginas seguintes são geradas em rotas navegáveis
