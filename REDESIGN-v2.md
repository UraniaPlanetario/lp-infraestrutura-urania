# LP Infra Urânia — Redesign v2 (Manifesto)

**Data**: 2026-04-09
**Versão**: v2 — refundação baseada no Manifesto de Posicionamento e Folder físico

---

## Contexto

A v1 da LP estava posicionada como peça **informativa** para nurture de leads do CRM. Após revisão dos documentos institucionais (Manifesto de Posicionamento e Folder Físico), ficou claro que esta LP é, na verdade, a **versão digital do manifesto** — uma peça de **posicionamento institucional** que reposiciona a Urânia na cabeça de gestores e professores.

### O que mudou na compreensão

| Antes (v1) | Agora (v2) |
|---|---|
| Brochure descritiva | Manifesto institucional |
| Tom explicativo | Tom assertivo, ruptura |
| Foco em features | Foco em posicionamento (anti-evento) |
| Audiência: leads frios | Audiência: leads no CRM, professor primeiro, gestor segundo |
| CTA: ausente | CTA único: agendar videochamada |
| Formato: 6 seções (4 dark + 2 white) | Formato: 8 seções com pilares nomeados |

---

## Posicionamento (Manifesto)

**Frase-âncora**: *"A Urânia não faz eventos. Nós somos a plataforma definitiva que conecta a sua escola ao universo."*

**Anti-posicionamento explícito**: rompe com o mercado de "tendas infláveis e atividades pontuais" — o inimigo declarado.

**3 pilares oficiais do ecossistema**:
1. **Imersão Física** — frota de domos fulldome 4K
2. **Engajamento Contínuo** — laboratório de conteúdo digital, jornada pré/pós
3. **Autoridade Científica** — webinars NASA/KSC, lives Prof. Calil, astronautas

---

## Audiência

**Primária**: professores. Entrada emocional via dor da ciência abstrata. São quem fazem ponte com decisores na escola.

**Secundária**: diretores, coordenadores, decisores administrativos. Precisam sentir autoridade institucional, profundidade, ROI.

**Estratégia de tom**: começa **emocional + educacional** (ressoa com professor) → escala pra **institucional + autoridade** (ressoa com gestor). Os dois lêem do início ao fim e se reconhecem.

---

## Arquitetura final (8 seções, sem TopBar)

```
1. Hero                  — manifesto + vídeo + CTA agendar
2. AntiPositioning       — "O Inimigo": mercado vs Urânia
3. Technology            — Pilar 1 · Imersão Física (specs + 4 eixos)
4. Journey               — Pilar 2 · Engajamento Contínuo (timeline 3 fases)
5. ScienceConnection     — Pilar 3 · Autoridade Científica (3 cards)
6. AboutUrania           — Quem é a Urânia (card + stats embutidos)
7. EcosystemPrograms     — 3 cards (Clube + Encontro + App Urânia Class)
8. FinalCTA              — recap manifesto + agendar videochamada
+ Footer                 — padrão Urânia (logo + tagline + ícones)
```

**Ritmo de fundo**: Dark (Hero) → White (Anti) → Dark gradient (Pilar 1) → Dark (Pilar 2) → White (Pilar 3) → White (About) → Dark (Programs) → Dark (CTA) → Dark (Footer)

---

## Decisões de copy

### Hero
- **Microtexto**: "URÂNIA PLANETÁRIOS E OBSERVATÓRIOS"
- **Headline**: *"A Urânia não faz eventos. Construímos a 1ª Infraestrutura de Educação Espacial do Brasil."* (manifesto literal)
- **Sub**: "A infraestrutura definitiva para educação espacial e científica na sua escola. Um ecossistema completo que transforma conceitos abstratos em memória visual e impacto intelectual duradouro."
- **Stats inline**: 20 Estados / +2.000.000 Alunos / 10 Anos
- **CTA**: "Agendar conversa com a Urânia"
- **Sem badge NASA** no topo (decisão do cliente — parceria KSC é só visita + webinar, não sustenta um selo institucional grande no Hero)
- **Sem TopBar** na LP

### O Inimigo (AntiPositioning)
- **Headline**: *"O mercado aluga tendas. Nós construímos um ecossistema."* (mescla das opções A + C)
- Bloco comparativo 2 colunas: "O mercado oferece" (X, riscado) vs "A Urânia entrega" (✓, destacado)
- Frase de fechamento: *"A próxima geração precisa olhar pro céu novamente — não com nostalgia, com método."*

### Pilares
- **Pilar 1**: *"A quadra da escola vira um portal pro cosmos."*
- **Pilar 2**: *"Antes, durante e depois. A jornada não acaba quando o domo desmonta."*
- **Pilar 3**: *"A ciência de verdade entra na sua sala de aula."*

### CTA Final
- **Headline**: *"A próxima geração precisa olhar pro céu novamente."* (frase final do manifesto)
- **Sub**: "Conversa direta com o nosso time. Sem proposta padronizada, sem compromisso."
- **CTA**: "Agendar videochamada"
- **Microcopy**: "15 minutos · Sem compromisso · Diretamente com nosso time"

---

## Arquivos da refatoração

### Criados (4)
- `src/lib/constants.ts` — placeholders `AGENDAMENTO_URL` e `APP_URANIA_CLASS_URL`
- `src/components/sections/AntiPositioning.tsx`
- `src/components/sections/FinalCTA.tsx`
- `REDESIGN-v2.md` (este arquivo)

### Refatorados (8)
- `src/App.tsx` — sem TopBar, nova ordem
- `src/components/sections/Hero.tsx` — refeito do zero, coluna única centralizada
- `src/components/sections/Technology.tsx` — virou Pilar 1, absorveu eixos do antigo ValueProposition
- `src/components/sections/Journey.tsx` — virou Pilar 2 (eyebrow + headline)
- `src/components/sections/ScienceConnection.tsx` — virou Pilar 3 (eyebrow + headline + cards refinados)
- `src/components/sections/AboutUrania.tsx` — subtítulo ajustado
- `src/components/sections/EcosystemPrograms.tsx` — adicionado 3º card App Urânia Class, grid 3 colunas
- `src/components/sections/Footer.tsx` — refeito anteriormente seguindo padrão das outras LPs Urânia

### Deletados (2)
- `src/components/sections/TopBar.tsx` — TopBar removida da LP
- `src/components/sections/ValueProposition.tsx` — substituído pela nova arquitetura (eixos foram pra Pilar 1, diferenciais redundantes com O Inimigo)

---

## Pendências

### Conteúdo / Mídia
- [ ] Substituir `{{video-hero-institucional}}` por vídeo real (15-30s) no Hero
- [ ] Substituir `{{foto-domo-quadra-escola}}` por foto real no Pilar 1
- [ ] Definir `AGENDAMENTO_URL` em `src/lib/constants.ts` (Cal.com, Calendly ou similar)
- [ ] Definir `APP_URANIA_CLASS_URL` em `src/lib/constants.ts` quando LP do app estiver no ar

### Iteração
- [ ] Revisão pontual seção a seção após primeiro view no navegador
- [ ] Possível afinação de espaçamentos no Hero (stats vs vídeo)
- [ ] Possível ajuste visual no AntiPositioning (impacto da comparação)
- [ ] Validação dos claims numéricos (20 estados, 2M alunos, 10 anos) com a operação

### Segunda fase (planejado, não no escopo da v2)
- [ ] Rota de tráfego pago com formulário (rota separada, mesmo conteúdo + form)
- [ ] LP separada para público secundário (hotéis, shoppings, eventos) — se justificar volume
- [ ] Analytics (GA4/GTM)
- [ ] SEO on-page completo (meta tags, OG, JSON-LD)

---

## Documentos de referência

- `C:\Users\rapha\Downloads\Manifesto de Posicionamento.pdf` — manifesto completo
- `C:\Users\rapha\Downloads\Folder 05-03-infraestrutura-espacial-urania.pdf` — folder tri-fold físico
- `DESIGN.md` — design doc da v1 (histórico)
- `CLAUDE.md` — regras do projeto (atualizado com posicionamento v2)
