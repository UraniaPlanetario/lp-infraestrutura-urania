# LP Infra Educação Científica Espacial

## Sobre
Landing Page **institucional** da **Urânia Planetários e Observatórios** que apresenta a **1ª Infraestrutura de Educação Espacial do Brasil**. É a versão digital do Manifesto de Posicionamento e do folder físico institucional — não é uma LP de evento, não é nurture de CRM, é **posicionamento de marca** para gestores escolares e decisores institucionais.

## Posicionamento (manifesto)
- **A Urânia não faz eventos.** Rompe explicitamente com o mercado de "tendas infláveis e atividades pontuais" (o inimigo).
- Não vende ingressos, não aluga equipamentos. Entrega um **ecossistema** ponta a ponta.
- 3 pilares do ecossistema:
  1. **Imersão Física** — frota de domos fulldome 4K que transforma a quadra em portal pro cosmos
  2. **Engajamento Contínuo** — laboratório de conteúdo digital (App Urânia Class, pré/pós evento)
  3. **Autoridade Científica** — webinars com NASA/KSC, lives com Prof. Marcos Calil, Encontro com Astronauta
- Tom: assertivo, manifesto, autoridade institucional. Não é conversacional/comercial.
- Frase-âncora: *"A Urânia não faz eventos. Nós somos a plataforma definitiva que conecta a sua escola ao universo."*

## Audiência
Gestores escolares, diretores, coordenadores pedagógicos e decisores institucionais que precisam **avaliar autoridade e profundidade** da Urânia em segundos. Não estão buscando inscrição num evento — estão avaliando uma parceria institucional.

## Documentos de referência (fonte da verdade do conteúdo)
- `C:\Users\rapha\Downloads\Manifesto de Posicionamento.pdf` — manifesto completo
- `C:\Users\rapha\Downloads\Folder 05-03-infraestrutura-espacial-urania.pdf` — folder tri-fold físico

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS 3 + tailwindcss-animate + shadcn/ui
- Lucide React (ícones) + CVA (variants)
- Google Fonts: Montserrat (heading) + Open Sans (body)

## Design System
Seguir `DS LP Urânia v2.txt` rigorosamente. Referência rápida:
- Dark mode padrão (sempre ativo)
- Background: #0B0E17 (navy), Primary: #8B5CF6 (roxo), Accent: #EAB308 (dourado)
- Tokens via CSS variables em `src/index.css`
- Mobile-first, breakpoints: sm(640) md(768) lg(1024) xl(1280)
- Nunca usar `.container` do Tailwind — usar `mx-auto max-w-{size}` com padding explícito para seções de conteúdo
- TopBar e Footer: largura total da tela, sem max-width. Usar padding percentual: `px-[5%] lg:px-[6%] xl:px-[8%]` com `justify-between`
- Nunca usar emojis como ícones — usar Lucide
- Fontes mínimas: 12px (text-xs), 10px apenas para stats labels

## Estrutura
```
src/
  components/
    ui/          → Componentes reutilizáveis (StarryBackground, OutlineStars, CosmicCard, Button)
    sections/    → Seções da LP (Hero, ValueProposition, Journey, Technology, ScienceConnection)
  lib/
    utils.ts     → cn() helper
```

## Regras
- Sem rotas — página única
- Sem CTA de conversão por enquanto (será adicionado depois)
- Imagens são placeholders — serão substituídas
- Consultar DESIGN.md para decisões de design e conteúdo
