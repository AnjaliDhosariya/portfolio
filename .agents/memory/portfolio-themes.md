---
name: Portfolio Theme System
description: Documentation for the Cyberpunk and Minimalist themes used in the Anjali Dhosariya portfolio.
---

## Theme System

The portfolio has two themes:
- **Cyberpunk** (default): Dark neon aesthetic for AI/ML engineer vibe
- **Minimalist** (secondary): Clean, high-contrast editorial design

### Cyberpunk Theme (Default)

- **Background**: #050505 (near-black)
- **Foreground**: #F0F0F0 (off-white)
- **Primary**: #FF00A0 (neon pink)
- **Secondary**: #00F0FF (electric cyan)
- **Border**: #1F2937 (dark gray)
- **Muted Text**: #6B7280 (medium gray)
- **Card Background**: #0A0A0A
- **Font**: JetBrains Mono (monospace) + Outfit (sans-serif)
- **Key Effects**: Glitch text animation, neon glow, code rain canvas, terminal aesthetic

### Minimalist Theme

Activated via `.light` class on `<html>` (or `theme: "minimalist"` in ThemeProvider).

- **Background**: #FAF8F5 (warm off-white)
- **Foreground**: #0A1929 (deep navy)
- **Primary**: #0A1929 (deep navy)
- **Secondary**: #FF6B6B (soft coral)
- **Border**: #E5E7EB (light gray)
- **Muted Text**: #9CA3AF (medium gray)
- **Font**: Space Grotesk (sans-serif)
- **Key Effects**: Clean cards, subtle shadows, minimal animations

### CSS Implementation

The CSS uses `:root` for Cyberpunk and `.light` for Minimalist. The `ThemeProvider` toggles the `.light` class when switching to Minimalist.

### Files
- `artifacts/portfolio/src/index.css` — Theme variables and animations
- `artifacts/portfolio/src/components/theme/ThemeProvider.tsx` — 2-way theme toggle
- `artifacts/portfolio/src/components/layout/Navbar.tsx` — Theme toggle button
