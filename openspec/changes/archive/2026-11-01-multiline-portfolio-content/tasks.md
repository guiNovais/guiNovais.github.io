# Tasks

## 1. Migrar o modelo editorial no YAML

- [x] 1.1 Converter `profile.summary` para um bloco YAML literal `|-`, remover o resumo curricular atual e inserir somente parágrafos lorem ipsum com exemplos visíveis de `**negrito**`, `*itálico*`, `_ênfase_`, `[link](https://exemplo.com)`, lista, citação e tabela; verificar que o YAML continua válido, que o valor é uma string e que o texto curricular anterior não permanece no campo.
- [x] 1.2 Converter `experience.highlights` de sequências para strings YAML literais `|-`, remover as descrições curriculares atuais e inserir somente texto lorem ipsum com parágrafos separados por linhas em branco; verificar que todas as experiências carregam `highlights` como string, que o conteúdo contém mais de um parágrafo e que os metadados estruturais da experiência permanecem intactos.
- [x] 1.3 Adicionar uma anotação curta no próprio arquivo de dados explicando que linhas em branco separam parágrafos e que Markdown/Kramdown pode ser usado para títulos, listas ordenadas/não ordenadas, tabelas, citações, imagens, notas de rodapé, blocos de código e classes `.notice`/`.btn`; verificar que a anotação não altera os dados carregados.

## 2. Ajustar a renderização da página

- [x] 2.1 Manter a renderização de `profile.summary` com `markdownify` e ajustar a seção de experiência para renderizar `experience.highlights | markdownify` diretamente, removendo o loop de itens e o elemento `<ul>`; verificar no template que não há conversão de `highlights` em `<li>`.
- [x] 2.2 Confirmar que o HTML gerado contém um `<p>` para cada bloco de texto, converte os exemplos inline em elementos HTML equivalentes (`<strong>`, `<em>` e `<a>`) e preserva listas, tabelas, blockquotes e blocos de código explicitamente escritos no conteúdo; verificar a saída compilada com busca direcionada no arquivo da página inicial.

## 3. Validar a integração

- [x] 3.1 Executar o build Jekyll em um diretório temporário e verificar que termina sem erro de YAML, Liquid ou Markdown.
- [x] 3.2 Revisar a página compilada em desktop e mobile, verificando que os parágrafos lorem ipsum permanecem legíveis, que listas só aparecem quando declaradas no Markdown, que os demais recursos não causam rolagem horizontal e que as outras seções do portfólio continuam presentes sem alterações estruturais adicionais.
