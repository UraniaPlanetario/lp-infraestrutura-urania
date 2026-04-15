# Changelog — LP Infra Educação Científica Espacial

Log de ajustes feitos na LP, do mais recente ao mais antigo.

## 2026-04-15

### Hero — reorganização e polimento
- Removida frase "A Urânia não faz eventos." do headline
- Headline em 2 linhas no desk via `lg:block` + `whitespace-nowrap`, com tamanho reduzido (`lg:text-4xl xl:text-5xl`) e container ampliado (`lg:max-w-7xl`)
- Subheadline em 2 linhas no desk (split entre as 2 frases com `lg:block`)
- Ordem nova: microtexto → título → subheadline → vídeo → stats → CTA
- Respiro entre elementos reduzido (~25-30%): padding da seção `pt/pb-14 md:16`, mts menores em todos os blocos
- Vídeo -10% no desk (`lg:max-w-[690px]`)

### Paleta — troca de roxo por azul Pantone 2728C
- `--primary` virou azul fosco/denim em `hsl(220 58% 42%)` (tom visualmente alinhado ao Pantone 2728C sem ficar elétrico)
- Tokens neutros (`--card`, `--muted`, `--border`) realinhados pro hue 220° pra combinar
- Roxo preservado como acento pontual em locais-chave:
  - Título da seção AntiPositioning (`text-purple-300`)
  - Palavra "método" no fechamento do manifesto
  - Palavra "ecossistema" na seção EcosystemPrograms
  - Pilar 3 (Conteúdo Digital) no Technology
- Sombras hardcoded de roxo em `Button.tsx` e `EcosystemPrograms.tsx` atualizadas para azul
- Cards de Áreas do Saber (Tech): Anatomia rose → indigo, Paleontologia amber → violet

### Glow -30% geral
- Botões, CTAs, blurs de fundo, shadows em cards e animações `badge-glow`/`pulse-glow` no `tailwind.config.js`
- Valores reduzidos proporcionalmente (ex: `shadow-primary/40` → `/28`, `bg-primary/20` → `/14`)

### Logo
- Arquivo `/public/logo-urania.png` substituído pela versão com gradient azul→roxo→rosa
- Wrapper do card em AboutUrania ajustado: removido gradient redundante, adicionado `overflow-hidden` e `object-cover w-full h-full` pra preencher o círculo sem gap

### Estrelas decorativas (OutlineStars)
- Tamanho -30% (14-24px → 10-17px)
- Preenchidas (`fill`) em vez de outline (`stroke`)
- Mix de 3 cores: ~30% amarelo accent, ~35% roxo claro, ~35% roxo escuro
- Opacidade levemente elevada (0.18-0.36) pra compensar o tamanho menor

### EcosystemPrograms
- `OutlineStars` substituído por `StarryBackground` (efeito de fundo estrelado do Hero/Journey)

### Fix — logo do Footer
- Footer voltou a usar o logo original (restaurado do commit `264e0ca`)
- Novo logo com gradient salvo como `/logo-urania-gradient.png`, usado apenas no card de AboutUrania

### Infra
- Repo inicial publicado em `github.com/UraniaPlanetario/lp-infraestrutura-urania` (commit `d281bce`)
- Segundo commit com todos os ajustes acima: `4d270ed`
