<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>

<br/><br/>

```
██████╗  ██████╗  █████╗ ██████╗ ██████╗ ███████╗ ██████╗ ██╗███╗   ██╗███╗   ██╗███████╗██████╗
██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝ ██║████╗  ██║████╗  ██║██╔════╝██╔══██╗
██████╔╝██║   ██║███████║██║  ██║██████╔╝█████╗  ██║  ███╗██║██╔██╗ ██║██╔██╗ ██║█████╗  ██████╔╝
██╔══██╗██║   ██║██╔══██║██║  ██║██╔══██╗██╔══╝  ██║   ██║██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══██╗
██║  ██║╚██████╔╝██║  ██║██████╔╝██████╔╝███████╗╚██████╔╝██║██║ ╚████║██║ ╚████║███████╗██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
```

# 🗼 Tóquio Sem Mistérios

### Landing Page · Guia de Viagem para Iniciantes

*"O guia definitivo para quem nunca saiu do país mas sonha com o Japão."*

<br/>

[![Status](https://img.shields.io/badge/status-concluído-00ff88?style=flat-square)](#)
[![Licença](https://img.shields.io/badge/licença-MIT-blue?style=flat-square)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](#)
[![Google Fonts](https://img.shields.io/badge/Fonts-Bebas_Neue_+_Inter-orange?style=flat-square&logo=googlefonts&logoColor=white)](#)

</div>

---

## 📖 Sobre o projeto

O **RoadBeginner** é uma SPA desenvolvida como projeto acadêmico para a disciplina de Aplicações para internet.

A proposta é simples: entregar um **guia de viagem completo para Tóquio** ao viajante de primeira viagem, com curadoria focada e uma estratégia de *lead magnet* — o visitante recebe um PDF gratuito em troca do seu contato.

> 💡 **Problema que resolve:** Viajantes iniciantes se perdem no excesso de informação dispersa na internet. O RoadBeginner entrega curadoria, confiança e organização em uma única página.

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 🧭 **Navbar fixa** | Header com glassmorphism, opacidade dinâmica ao rolar e menu âncora responsivo |
| 🌆 **Hero Section** | Banner full-screen com foto noturna de Tóquio, título de impacto e CTA para Google Flights |
| 🏆 **Ranking de lugares** | Lista ordenada com os 5 pontos turísticos imperdíveis |
| 🎒 **Checklist de bagagem** | Lista não ordenada com itens que iniciantes costumam esquecer |
| 📩 **Formulário de captação** | Campos de Nome e E-mail com validação em tempo real via JavaScript puro |
| ✅ **Página de confirmação** | Redirecionamento automático para `obrigado.html` após conversão |

---

## ⚙️ Técnicas aplicadas

### HTML
- Semântica correta com `<header>`, `<main>`, `<section>`, `<footer>`
- Atributos de acessibilidade: `aria-label`, `aria-required`, `aria-describedby`, `aria-live`
- Imagens via CDN Unsplash com parâmetros de otimização (`?w=1600&q=80&auto=format`)

### CSS
- **CSS Custom Properties** (Design Tokens) para cores, espaçamento e transições
- **Glassmorphism** na navbar com `backdrop-filter: blur()`
- **Tipografia fluida** com `clamp()` — responsiva sem media queries
- **Efeito glow** nos cards com `box-shadow` animado no `hover`
- **`prefers-reduced-motion`** — animações desativadas para usuários que precisam

### JavaScript
- **IIFE** `(function(){ 'use strict'; })()` — escopo isolado, sem poluição global
- Navbar dinâmica com classe `.scrolled` via listener de `scroll` passivo
- Smooth scroll com cálculo de offset do header fixo
- Validação em três camadas: `input` (limpa erro), `blur` (valida ao sair), `submit` (revalida tudo)
- Regex de e-mail: `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`
- Feedback visual no botão (spinner) antes do `window.location.href`

---

## 📋 Requisitos atendidos

### Requisitos Funcionais (PRD)

| ID | Requisito | Status |
|---|---|:---:|
| RF01 | Header fixo com logo e menu âncora | ✅ |
| RF02 | Hero com título, subtítulo e CTA externo (Google Flights) | ✅ |
| RF03 | Listas em duas colunas (ranking `<ol>` + checklist `<ul>`) | ✅ |
| RF04 | Formulário com validação em tempo real via JavaScript | ✅ |
| RF05 | Redirect para `obrigado.html` após validação positiva | ✅ |

### Requisitos Não Funcionais

| ID | Requisito | Status |
|---|---|:---:|
| RNF01 | Responsividade via grade Bootstrap 5 | ✅ |
| RNF02 | Paleta escura com acentos neon | ✅ |
| RNF03 | Imagens otimizadas via Unsplash CDN | ✅ |
| — | Código limpo, sem CSS/JS inline | ✅ |
| — | Acessibilidade básica | ✅ |

---


## 👨‍💻 Autor

Desenvolvido por **Anderson Ramalho** — Sistemas para Internet

<div>
  <a href="https://github.com/seu-usuario">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://linkedin.com/in/seu-usuario">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
</div>

---

<div align="center">
  <sub>Copyright © 2026 — RoadBeginner Inc. · Feito com muita cafeína</sub>
</div>
