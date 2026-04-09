# LP Infra Educação Científica Espacial — Design Document

**Data**: 2026-03-31
**Status**: Em implementação

---

## Resumo

Landing Page informativa sobre a infraestrutura de educação científica espacial da Urânia Labs. Será enviada para leads já presentes no CRM — sem necessidade de rota externa, sem conversão agressiva.

---

## Público-alvo

- **Gestores/diretores de escolas** — decisores de compra
- **Professores** — influenciadores, quem usa no dia a dia

---

## Objetivo

- **Primeiro momento**: informar e apresentar a proposta de valor
- **Futuro**: sistema de feedback para CRM, agendamento de reunião (a definir)

---

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS 3 + tailwindcss-animate
- shadcn/ui (componentes base)
- Lucide React (ícones)
- class-variance-authority (CVA)
- Google Fonts: Montserrat + Open Sans

---

## Design System

Urânia Cosmic Theme v2 (arquivo: `DS LP Urânia v2.txt`)
- Dark mode como padrão
- Cores: navy (#0B0E17), roxo (#8B5CF6), dourado (#EAB308)
- Mobile-first responsivo

---

## Estrutura da Página (6 seções)

| # | Dobra | Fundo | Conteúdo |
|---|-------|-------|----------|
| 1 | **Hero** | Dark | Headline "A ciência que rompe as barreiras da sala de aula" + sub + placeholder planetário (sem badge) |
| 2 | **Proposta de Valor + Eixos do Conhecimento** | White | 3 cards diferenciais + 4 cards eixos (Cosmologia, Bio Marinha, Anatomia, Paleontologia) |
| 3 | **A Jornada em 3 Fases** | Dark | Timeline: Pré-evento → Dia do Planetário → Pós-evento |
| 4 | **Tecnologia FullDome 4K** | Dark (variação gradiente) | Specs técnicas + placeholder imagem imersiva |
| 5 | **Conexão com a Fronteira da Ciência** | White | 3 cards: NASA, Prof. Marcos Calil, Interação ao vivo |
| 6 | **Footer** | Dark | Logo, contato, redes sociais, estrelas decorativas |

**TopBar fixa** com logo + hamburger (sempre visível) + dropdown de navegação. Fade-on-scroll. Padding percentual full-width, sem max-width.

**Footer** padrão Urânia: 11 estrelas fixas, grid 3 colunas (logo | tagline | ícones contato), dividers top/bottom. Padding percentual full-width.

**Ritmo visual**: Dark → White → Dark → Dark → White → Dark

---

## Status da Implementação

### Concluído
- [x] Scaffold Vite + React + TS
- [x] Tailwind CSS 3 + tokens do DS configurados
- [x] Componentes compartilhados (StarryBackground, OutlineStars, CosmicCard, Button)
- [x] Hero (dark) — headline + sub + placeholder + CTA scroll
- [x] Proposta de Valor + Eixos do Conhecimento (white) — 3 + 4 cards
- [x] Jornada em 3 Fases (dark) — timeline visual
- [x] Tecnologia FullDome 4K (dark gradiente) — specs + placeholder
- [x] Conexão com a Fronteira da Ciência (white) — 3 cards
- [x] TopBar (hamburger, fade-on-scroll, click-outside/ESC)
- [x] Footer (padrão Urânia — estrelas, grid, ícones)
- [x] Favicon Urânia (PNG)
- [x] Logo Urânia no TopBar e Footer
- [x] Build limpo, sem erros/warnings

### Pendente
- [ ] Substituir placeholders por imagens reais
- [ ] Revisão de copy final
- [ ] Deploy Vercel
- [ ] Iterações futuras (CTA, CRM, analytics)

---

## Conteúdo Base (do Folder)

### Headlines (manter do folder)
- "A ciência que rompe as barreiras da sala de aula"
- "A infraestrutura definitiva para a educação espacial e científica na sua instituição"
- "Muito além do entretenimento: Uma Imersão no Saber"
- "Uma Jornada Científica em Três Dimensões"
- "Tecnologia FullDome 4K: Onde a Teoria Ganha Vida"
- "Conexão com a Fronteira da Ciência"

### Proposta de Valor
- Não é entretenimento — é imersão educacional
- Transforma conceitos abstratos em memória visual e impacto intelectual duradouro
- O aluno deixa de ser espectador e se torna explorador

### Jornada em 3 Fases
1. **Pré-evento**: Curadoria e repertório — oficinas online para professores + materiais de apoio
2. **Dia do Planetário**: Imersão cognitiva — sessões com planetaristas, linguagem adaptada por grupo
3. **Pós-evento**: Fronteira digital — interações ao vivo com especialistas, conteúdos de aprofundamento

### Tecnologia
- Planetário inflável com projeção imersiva 360°
- Experiência cinematográfica em 4K
- Padrão internacional de difusão científica

### Eixos de Conhecimento
- Cosmologia e Astronomia
- Biologia Marinha
- Anatomia Humana
- Paleontologia

### Conexão com a Ciência
- **Reconhecimento nacional** — autoridade para gestores, potencial investigativo dos alunos
- **Conexão global** — webinars mensais com profissionais da NASA
- **Observação científica guiada** — lives semanais com Prof. Marcos Calil (astronomia observacional)
- **Interação em tempo real** — dúvidas e trocas diretas com especialistas

### Contato
- uraniaplanetario.com.br
- urania@uraniaplanetario.com.br
- @uraniaplanetario
- (48) 9 9690-0363

---

## Decision Log

| # | Decisão | Alternativas | Motivo |
|---|---------|-------------|--------|
| 1 | Página única sem rotas | SPA com rotas | LP informativa simples, enviada por link direto do CRM |
| 2 | 6 seções (4 dark + 2 white) | 7 seções (4 dark + 3 white) | 3 whites diluíam a identidade cósmica; dark deve dominar |
| 3 | Merge Proposta de Valor + Eixos | Seções separadas | Respondem à mesma pergunta ("o que oferecemos") — juntos mais persuasivos |
| 4 | FullDome no dark (não white) | FullDome em white | Imagens imersivas ganham dramaticidade em fundo escuro |
| 5 | Copy: manter headlines, expandir corpo | Reescrever tudo / Copiar tudo | Headlines do folder são fortes; corpo precisa de expansão para formato web |
| 6 | Sem CTA de conversão por enquanto | CTA agressivo | Leads já no CRM, fase de consideração — baixo atrito |
| 7 | Deploy Vercel | Outros | Gratuito, simples, estático |
| 8 | Placeholders para imagens | Imagens finais | Substituição posterior com acervo real |
| 9 | TopBar/Footer full-width com padding % | Container centralizado | Padding percentual escala com viewport; padrão das outras LPs Urânia |
| 10 | TopBar estreito, respiro no Hero | TopBar padrão | pt-28/pt-32 no Hero compensa a TopBar fixa |
| 11 | Sem badge no Hero | Badge "Reconhecimento Nacional" | Removido a pedido — hero mais limpo |

---

## Premissas

- Imagens serão placeholders (substituídas depois)
- Sem backend — tudo estático
- Mobile-first responsivo
- SEO básico (boa prática, não precisa rankear agora)
- Analytics será adicionado depois

---

## Evolução Futura

- [ ] CTAs de conversão (agendar demonstração, fale com consultor)
- [ ] Sistema de feedback para CRM
- [ ] Agendamento de reunião
- [ ] Analytics (GA4/GTM)
- [ ] SEO avançado (se necessário)
