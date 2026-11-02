# Tasks

## 1. Template de contatos

- [x] 1.1 Mover o markup condicional de `author.whatsapp` para dentro de `.author__urls.social-icons` como um item `<li>` e verificar no arquivo que o link usa a URL, o rótulo e o ícone configurados.
- [x] 1.2 Remover o bloco standalone `author__whatsapp` e verificar que o template possui somente uma entrada renderizável para WhatsApp.
- [x] 1.3 Preservar os atributos `rel`, `itemprop`, `aria-hidden` e `label` do link e verificar que o nome “WhatsApp” permanece discernível para teclado e tecnologias assistivas.

## 2. Validação do site

- [x] 2.1 Compilar o site com a configuração atual e verificar que o build Jekyll termina com sucesso e produz o link WhatsApp dentro da lista de contatos.
- [x] 2.2 Validar o comportamento sem `author.whatsapp.url` em uma configuração de teste e verificar que nenhum item vazio ou quebrado de WhatsApp é renderizado.
- [x] 2.3 Executar a validação OpenSpec e verificar que os requisitos do delta e todas as tarefas estão satisfeitos antes do arquivamento.
