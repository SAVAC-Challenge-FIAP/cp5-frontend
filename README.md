# Melodia — Checkpoint V (Front-End)

Landing page do aplicativo de músicas **Melodia**. Site estático e responsivo,
construído com HTML5, CSS3 e Tailwind CSS.

- **Site (GitHub Pages):** https://savac-challenge-fiap.github.io/cp5-frontend/

## Sobre o projeto

O Melodia é um app de streaming de música voltado para quem gosta de descobrir
novos artistas. A landing page apresenta o produto e captura e-mails para as
campanhas de marketing.

- **Público-alvo:** amantes de música, jovens e pessoas em busca de novas descobertas musicais
- **Estilo visual:** moderno, clean, com cores vibrantes e elementos musicais

## Seções da página

| Seção | Descrição |
| --- | --- |
| Hero | Título, descrição curta do app e CTA "Ouvir Agora" |
| Apresentação | Principais benefícios, com ícones do Font Awesome |
| Funcionalidades | Cards com as principais funcionalidades do app |
| Depoimentos | Citações e fotos de perfil de usuários |
| Contato | Formulário de captura de e-mails |
| Rodapé | Contato, redes sociais e política de privacidade |

## Tecnologias

- HTML5 semântico
- CSS3 (`css/style.css`)
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- Google Fonts — Nunito
- Font Awesome (ícones)
- JavaScript (menu fixo com transparência e demais interações)

## Estrutura

```
.
├── index.html            # Landing page
├── css/
│   └── style.css         # tokens e estilos que não vêm do Tailwind
├── js/
│   └── main.js           # interações da página (player da lista de músicas)
├── audio/                # faixas de demonstração (MP3)
└── img/                  # imagens, ícones e favicon
```

## Como rodar

O projeto é estático, sem build. Basta abrir o `index.html` no navegador
(ou servir a pasta com qualquer servidor estático).

## Créditos dos áudios

As faixas em `audio/` são de Kevin MacLeod ([incompetech.com](https://incompetech.com)),
licenciadas sob [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/):
*Monkeys Spinning Monkeys*, *Sneaky Snitch*, *Local Forecast - Elevator*,
*Pixel Peeker Polka - faster*, *Carefree* e *Fluffing a Duck*. Foram usadas só como
demonstração no lugar das músicas da lista, que têm direitos autorais.

## Integrantes

| Nome | RM |
| --- | --- |
| Ana Beatriz Da Cruz Silva | 572278 |
| Arthur Carvalho Gomes Da Costa | 570387 |
| Carolina Kiyomi Hada | 571664 |
| Sávio Pessôa Afonso | 570789 |
| Victor Paes Pontes | 572781 |
