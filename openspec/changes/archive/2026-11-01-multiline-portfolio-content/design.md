# Design

## Context

`index.md` lê os dados de `_data/portfolio/pt-BR.yml`. O resumo já é enviado ao filtro `markdownify`, enquanto cada valor de `experience.highlights` é atualmente tratado como item de uma sequência YAML e inserido em uma lista HTML. A mudança usa o comportamento Markdown já disponível no Jekyll e não introduz dependências ou uma nova camada de conteúdo.

## Goals / Non-Goals

**Goals:**

- Representar `summary` e `highlights` como strings Markdown literais multilinha.
- Transformar linhas em branco em separação de parágrafos no HTML.
- Manter uma única fonte de conteúdo em `_data/portfolio/pt-BR.yml`.
- Deixar exemplos claros para edição posterior: `**negrito**`, `*itálico*`, `_ênfase_`, `[texto](https://exemplo.com)`, imagens, títulos, citações, listas ordenadas/não ordenadas e aninhadas, tabelas, listas de definição, notas de rodapé, blocos de código com linguagem e atributos/classes do Kramdown usados pelo tema, como `.notice` e `.btn`.
- Remover o conteúdo curricular apenas dos campos descritivos e usar lorem ipsum como conteúdo temporário neutro.
- Preservar os valores estruturais que organizam a landing page e permitem que ela continue apresentando suas seções sem mudanças adicionais.

**Non-Goals:**

- Redigir o conteúdo profissional definitivo.
- Transformar empresa, cargo, períodos, formação, certificações ou habilidades em lorem ipsum; esses valores continuam sendo dados estruturais nesta etapa.
- Converter as listas de habilidades, certificações ou outros campos do YAML.
- Adicionar um parser Markdown, dependência JavaScript ou estilo visual específico para os novos parágrafos.

## Decisions

### Usar strings YAML literais com Markdown

`summary` e cada `highlights` serão declarados com `|-`, preservando as quebras de linha necessárias para edição legível. Uma linha em branco separará parágrafos; uma quebra simples dentro do mesmo bloco não será usada como mecanismo de separação semântica.

Alternativa descartada: manter uma lista de strings, pois isso continuaria acoplando o conteúdo ao modelo de tópicos e impediria uma narrativa editorial contínua.

### Manter os nomes dos campos

Os campos continuarão se chamando `summary` e `highlights`. O segundo deixará de ser uma sequência e passará a ser uma string por experiência. Isso reduz a superfície da mudança e mantém os dados reconhecíveis para futuras edições.

Alternativa descartada: renomear `highlights` para `description`, pois exigiria uma migração conceitual maior sem benefício para o objetivo atual.

### Renderizar ambos com `markdownify`

`index.md` continuará usando `markdownify` para o resumo e passará a usá-lo diretamente para cada `experience.highlights`, removendo o `<ul>` e o loop de `<li>` fixos. Assim, a conversão de parágrafos, `**negrito**`, `*itálico*`, `_ênfase_`, links, listas e demais blocos Markdown permanece no mecanismo já utilizado pela página. Se o autor escrever uma lista dentro da string, ela será renderizada como lista Markdown; a mudança apenas remove a lista estrutural imposta pelo template.

### Registrar a superfície de formatação disponível

Os exemplos seguirão a documentação já presente no repositório para o Minimal Mistakes: títulos de `#` a `######`, blockquotes com citações, tabelas, listas ordenadas e não ordenadas com aninhamento, listas de definição, imagens com atributos, notas de rodapé, fenced code blocks com linguagem, além de atributos Kramdown para notices e botões. Elementos HTML demonstrados pelo tema, como `<kbd>`, `<abbr>`, `<sub>`, `<sup>`, `<ins>`, `<cite>` e `<q>`, serão tratados como recursos avançados e identificados como HTML inline, não como uma nova API do portfólio.

Alternativa descartada: implementar uma lista fechada de tags permitidas no template, pois isso duplicaria e limitaria o comportamento Markdown/Kramdown já fornecido pelo tema.

### Validar pelo HTML compilado

O build Jekyll deverá confirmar que os campos geram múltiplos elementos `<p>`, que os marcadores inline viram elementos HTML equivalentes e que não resta uma lista estrutural imposta pelo template nas experiências. Listas escritas explicitamente no Markdown devem continuar sendo renderizadas. A revisão também deve confirmar que o conteúdo continua legível no tema existente.

## Risks / Trade-offs

- **[Risco]** Uma string Markdown mal indentada pode alterar o valor YAML ou juntar parágrafos. **Mitigação:** usar `|-`, indentação consistente e linhas vazias explícitas nos exemplos.
- **[Risco]** A remoção da lista estrutural pode reduzir a escaneabilidade de experiências longas. **Mitigação:** manter parágrafos curtos e separados no conteúdo padrão; listas continuam disponíveis quando forem escritas explicitamente em Markdown.
- **[Risco]** Sintaxe Markdown inválida pode aparecer literalmente. **Mitigação:** incluir exemplos documentados no conteúdo temporário e verificar o HTML gerado no build.

## Migration Plan

1. Converter os campos editoriais do YAML para strings Markdown multilinha e substituir seu conteúdo curricular por lorem ipsum.
2. Ajustar o template uma única vez para renderizar `highlights` como Markdown, sem lista HTML estrutural.
3. Compilar o site e verificar parágrafos, formatação inline e ausência de erros YAML/Liquid.
4. Em uma atividade futura, substituir somente os valores descritivos do YAML pelo texto definitivo, sem alterar a estrutura da página.

Rollback: restaurar o loop de lista em `index.md` e os valores originais de `summary`/`highlights` no YAML, caso o build ou a revisão visual revele uma incompatibilidade.
