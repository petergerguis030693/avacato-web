# UI Spec v1.5 — Avacato Service-Details befüllt (Index-ähnlich)

**Projekt:** مكتب الأفوكاتو · Live Avacato  
**Status:** Peter-Feedback Desktop leer / Content dünn · Design Studio · 2026-09-25  
**Basis:** Tokens/Chrome/Headers v1.3 · Conversion v1.2 · Freieres Home/Overview v1.4 **unverändert**  
**Scope:** alle **Service-Detail**-Routen (`/services/*` Detail) — befülltes Layout wie Index-Dichte, 2-Spalten Desktop, Motion  
**Out:** Home/Overview-Umbau · neue Routen · Fake-Jahre/Garantie-Claims · Touristen-Kitsch

**Copy-Pflicht:** Texter + Growth Desk → neue AR-EG Slots §4 (ohne die bleibt Layout hohl)  
**Build:** Coder nach Soft-Deploy-GO Hadrigan · **QA:** Bugs

**Problem (Peter + Screenshot المنفعة):** eine H2 + 1 Satz, Desktop links tot, keine Index-Dichte, keine Animation.

---

## 1) Layout-Prinzip Detail = befüllter Index

| Verboten | Pflicht |
|----------|---------|
| Einzelne Textzeile in riesigem Navy-Void | Section füllt Viewport-Breite sinnvoll |
| Nur 1 Spalte ~40% rechts, links leer | Desktop **2-Spalten** ab `lg` |
| „المنفعة“ allein als Seite | Mind. **6 Zonen** + CTA + verwandt (unten) |
| Statisch tot | Scroll-Reveal + dezente Hover (wie Moussa-Motion-Niveau, Legal-ruhig) |

**Max Content Width:** `min(1120px, 100% − gutter)` — Text darf **nicht** auf ~480px kleben und Rest leer lassen.

---

## 2) Desktop Grid (`lg+`, RTL)

```
┌─────────────────────────────────────────────────────────┐
│ Header-Bild v1.3 + H1 + Lead + Dual-CTA (volle Breite) │
├──────────────────────────────┬──────────────────────────┤
│ MAIN (≈62%)                  │ ASIDE (≈38%)             │
│ المنفعة (länger)             │ Sticky-ish CTA-Karte     │
│ إيه بنخلّص (6–8 Bullets)     │ Tel + واتساب             │
│ الإعداد (3 Steps)            │ Kurz: ليه الخدمة دي      │
│ لمين (Chips + Absatz)        │ 2–3 verwandte Links      │
│ FAQ mini 3 Items (optional)  │                          │
├──────────────────────────────┴──────────────────────────┤
│ Related Band + Final Dual-CTA (volle Breite)            │
└─────────────────────────────────────────────────────────┘
```

- Gap Spalten: 40–56px  
- Aside: sticky `top: 5.5rem` bis Footer (Mobile: Aside **unter** Hero als CTA-Band, dann Main)  
- Mobile: eine Spalte — Hero → CTA Dual → Zonen Stack → Related

---

## 3) Zonen (UI — Copy-Länge neu)

| Zone | UI Spec | Min. Copy-Tiefe |
|------|---------|----------------|
| Hero | Header v1.3 · H1 · Lead **2–3 Sätze** · Dual Tel\|واتساب | Lead nicht 1 Zeile |
| **المنفعة** | H2 Gold · **2–4 Sätze** oder 3 Benefit-Zeilen mit Gold-Rule | Kein Einzeiler |
| **إيه بنخلّص** | H2 · Liste **6–8** Items · Desktop 2-col Liste ok | ≥6 Bullets |
| **الإعداد** | H2 · **genau 3** Steps · Desktop 3-col / Mobile Stack · Nummern Gold | Titel+Body je Step |
| **لمين** | H2 · 4–6 Chips + 1 Absatz | Chips Pflicht |
| **أسئلة سريعة** | optional 3 Accordion (service-spezifisch) | Nice wenn Copy da |
| Aside CTA | Navy/Gold Panel · Tel Primary · واتساب · 2–3 Bullet „ليه“ | Kurz |
| **خدمات مرتبطة** | 3 Links als Featured-Zeilen-Stil (v1.4), nicht nackt | 3 Stück |
| Final CTA | volle Breite Dual wie Home | — |

**قضايا:** keine Gewinn-Garantie in Copy/UI (v1.1 Regel bleibt).

**Spacing:** Section `py` 48–72 Desktop / 40 Mobile — befüllt, aber nicht gequetscht. Alternating leichtes Band (navy-deep / navy) oder Gold/10 Divider.

---

## 4) Copy-Slots (Texter + Growth — AR-EG)

Pro Detail-Route **eine** Datei oder Block in `ar-eg-copy-v5-service-details.md`:

Für **jede** der 6 Services:

1. `lead` — 2–3 Sätze  
2. `benefit` — 2–4 Sätze **oder** 3 Benefit-Titel+Zeile  
3. `deliverables[]` — 6–8 Bullets  
4. `steps[3]` — Titel + 1 Satz  
5. `audience` — Absatz + 4–6 Chip-Labels  
6. `aside_why[2–3]` — kurze Gründe  
7. `faq[3]` optional — Q/A  
8. `related` — welche 3 Schwester-Services

Ton: ägyptisches Register, Nutzen+CTA, keine Floskeln, keine Fake-Stats.

---

## 5) Motion (Legal-ruhig)

| Effekt | Spec |
|--------|------|
| Scroll-Reveal | Main-Zonen + Aside: `opacity 0→1` + `translateY 12→0` · 400–500ms · einmalig · **re-bind bei Navigation** (Moussa-Fix `1ec49ab` Pattern) |
| Stagger | Bullets / Steps 40–60ms |
| Aside | leicht verzögert nach Hero |
| Hover Featured/Related | Gold-Underline / Opacity — kein Bounce |
| `prefers-reduced-motion` | Reveal instant / keine Stagger |

**Verbot:** Auto-Carousel, Glow-Loops, Elastic.

---

## 6) Smoke (Bugs)

Desktop + 390, Stichprobe ≥3 Details inkl. التراخيص + القضايا:

- [ ] Desktop: 2-Spalten, links **nicht** leer (Aside gefüllt)  
- [ ] المنفعة ≥2 Sätze / 3 Benefits — kein Einzeiler-Void  
- [ ] ≥6 Deliverable-Bullets · 3 Steps · Chips sichtbar  
- [ ] Dual CTA Sticky + Aside Tel/WA  
- [ ] Reveal nach Nav nicht opacity-0  
- [ ] reduced-motion respektiert  
- [ ] Conversion/Headers regressfrei  

---

## 7) Handoff / Reihenfolge

1. **Texter + Growth** — Copy v5 PASS (§4)  
2. **Design** — diese Spec (Assets: bestehende Header)  
3. **Hadrigan** — Soft-Deploy-GO wenn Spec+Copy da  
4. **Coder** — Grid+Zonen+Motion+Copy einbauen  
5. **Bugs** — Smoke §6  

**Spec-Pfad:** `/workspace/design-specs/avacato/ui-spec-v1.5-service-detail-filled.md`
