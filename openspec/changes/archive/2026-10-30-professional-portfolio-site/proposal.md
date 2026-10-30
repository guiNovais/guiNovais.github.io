# Proposal

## Why

O repositório ainda se apoia no tema Minimal Mistakes e precisa apresentar de forma clara e profissional a trajetória, a formação e as competências de Guilherme Novais. Um portfólio em português, estruturado para leitura por pessoas e sistemas automatizados, dará contexto às informações profissionais e servirá como presença pública publicada pelo GitHub Pages.

## What Changes

- Transformar a página inicial em um portfólio profissional responsivo, com apresentação, experiência profissional, formação acadêmica, certificações e habilidades técnicas.
- Organizar o conteúdo exclusivamente em português brasileiro nesta versão e manter os dados de conteúdo separados da apresentação para facilitar uma futura internacionalização.
- Configurar metadados e estrutura semântica para indexação e compartilhamento, e atender a práticas de acessibilidade na navegação e leitura.
- Definir `https://guinovaes.github.io/` como URL canônica e compatibilizar a saída do site com a publicação existente pelo GitHub Actions e GitHub Pages, preservando essa infraestrutura sem alterações.
- Usar a implementação da branch `backup/minimal-mistakes` como referência de conteúdo e configuração, avaliando cada escolha em vez de copiá-la automaticamente.

## Capabilities

### New Capabilities

- `professional-portfolio`: Apresentação pública do perfil profissional em português, incluindo histórico de trabalho, formação, certificações e habilidades, com navegação acessível, layout responsivo, metadados para mecanismos de busca e publicação estática no GitHub Pages.

### Modified Capabilities

Nenhuma. O projeto não possui especificações existentes.

## Impact

- Site Jekyll baseado no tema Minimal Mistakes: configuração, página inicial, navegação, dados do portfólio e estilos de apresentação, conforme necessário.
- Metadados de página, idioma do documento e estrutura HTML semântica relacionados a SEO, acessibilidade e indexação automatizada.
- Metadados de URL do site para o domínio canônico `guinovaes.github.io`, mantendo o processo existente de build e publicação do GitHub Actions/GitHub Pages como infraestrutura fora do escopo de mudança.
- O conteúdo profissional será baseado no currículo fornecido; esta entrega não inclui tradução, enriquecimento narrativo das experiências nem conteúdo além das informações disponíveis.
