# DESIGN MATRIX & GOVERNANCE: Aerea Circo

## 1. Matriz de Alcance del Encargo (Compuerta 2 / GEMINI.md §1.2.2)
- **CALIBRATION_STATUS:** calibrated
- **TRANSFORM_MODE:** adaptation
- **PALETTE_POLICY:** reference-matched
- **FUNCTIONAL_SCOPE:** none
- **HERO_SIGNATURE:** [h1]
- **NAV_MODEL:** hybrid-nav
- **REFERENCE_URL:** https://www.circomedia.com/
- **MOTION_INTENSITY:** 5
- **TOKEN_SOURCE:** forja-parametric-oklch
- **LOCKED_ATTRIBUTES:**
  - Geometría, layout, bordes, superficies, espaciados y anatomía de navegación del referente (`[geometry, layout, borders, surfaces, spacing, nav_anatomy]`).
  - HERO_SIGNATURE: Firma anatómica obligatoria y cerrada de hijos directos del Hero ([h1]). Prohibido cualquier nodo hermano previo al <h1> (chips, pills, 'New/Beta') o botón interactivo adicional no registrado en la telemetría.
  - HEADER_HERO_RELATION: stacked (Cabecera apilada normal.)
  - HEADER_ACTION_STYLE: text-only (Utilidades desktop en texto limpio. Prohibido inventar íconos SVG como lupas o badges circulares en desktop.)
  - FOOTER_MONUMENTAL_WORDMARK: Sin wordmark monumental requerido.
  - Contrato cinético :active en botones y tarjetas interactivos (<= 160ms, scale(0.97)).
  - Relación de contraste WCAG AA (>= 4.5:1 texto normal, >= 3.0:1 texto grande).
  - Tap targets táctiles >= 44x44px en viewport móvil (<= 768px).
  - Raíces en Server Components puros (app/**/page.tsx, layout.tsx); cero 'use client' en páginas.
- **ADAPTED_ATTRIBUTES:**
  - Contenido textual, fotografía de dominio y paleta cromática sectorial (`[content, palette]`) calibrados a la identidad de Aerea Circo.
- **VISUAL_DIRECTIVES_BRIEF:**
  - Notas de adaptación: N/A
  - Vetos de cliente: N/A

## 2. Parámetros Cromáticos Paramétricos OKLCH
- **SEED_HUE:** 260
- **BG_TOKEN:** oklch(0.98 0.008 260)
- **PALETTE_STATUS:** derived-from-slug
- **ACCENT_TOKEN:** oklch(0.36 0.120 260)

## 3. Direcciones de Diseño y Composición (Compuerta 2)
- **Atmosphere & Visual Tension:** Derivada 100% de la telemetría anatómica de Recon (ADN-RECON.md). Prohibido 'design-taste-frontend', 'ui-ux-pro-max' e 'impeccable' (craft-floor/layout/adapt).
- **Typography Scale:** Escala tipográfica exacta medida en Recon (ADN-RECON.md §2).
- **Component Behaviors:** Definir estados deterministas (default, hover, focus-visible, active, disabled, loading).
- **Anti-Patterns Vetoed:** Cero 'transition: all', cero scale(0), cero bento grids cliché, cero banda beige/crema genérica IA (L 0.84-0.97, C < 0.06, H 40-100).

## 4. Anatomía de Superficies y Contenedores (RECON)
> [!IMPORTANT]
> **Precedencia Absoluta de la Orden del Operador (GEMINI.md §1.2.2 y ADR-001):**
> Las cotas geométricas y topológicas de Recon registradas a continuación son vinculantes por defecto. Sin embargo, si el operador humano emite una instrucción explícita distinta, la orden del operador prevalece inmediatamente sobre cualquier medición empírica de Recon.

- **CONTAINER_MAX_WIDTH:** 1324px
- **SECTION_PADDING_Y:** N/A
- **HEADER_HEIGHT_RESTING:** 124px
- **HEADER_HERO_RELATION:** stacked
- **HEADER_BG_RESTING:** rgb(29, 125, 80)
- **HEADER_ACTION_STYLE:** text-only
- **FOOTER_MONUMENTAL_WORDMARK:** ausente
- **CARD_WIDTH:** N/A
- **CARD_ASPECT_RATIO:** N/A
- **CARD_PADDING:** 0px
- **CARD_BORDER:** none
- **CARD_RADIUS:** 0px
- **CARD_SHADOW:** none
- **OPERATOR_OVERRIDES:** ninguno (rige telemetría de Recon)
- **Directiva de Superficie:** El referente opera con módulos/ítems SIN bordes perimetrales ni cajas contenedoras (border: none). Queda TERMINANTEMENTE PROHIBIDO envolver productos, libros o tarjetas en cajas con border, rounded-* o shadow-* tipo SaaS, salvo instrucción contraria explícita del operador.
