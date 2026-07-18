# link-bio

Página pessoal de links (estilo Linktree) do Bruno Eiji, feita com React + Vite + Tailwind CSS.

## Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/) para os ícones
- [Vercel Analytics](https://vercel.com/docs/analytics)

## Rodando localmente

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção em `dist/`
- `npm run preview` — serve o build de produção localmente
- `npm run lint` — roda o ESLint

## Estrutura

- `src/components/links.js` — lista de links exibidos (título, descrição, ícone, cor de destaque no hover)
- `src/components/` — componentes da página (Profile, LinkList/LinkCard, Footer, ThemeToggle)
- `src/index.css` — tokens de design (cores, fontes, tamanhos) e paleta do modo escuro

## Modo escuro

Alternável pelo botão no canto superior direito. A preferência é salva no `localStorage`; na primeira visita, segue o tema do sistema operacional.
