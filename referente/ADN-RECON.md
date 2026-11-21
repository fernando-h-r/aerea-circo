# ADN Arquitectónico & Cinético: AEREA-CIRCO
> Fuente: https://www.circomedia.com/ | Viewports medidos: 1440x900 (Desktop) y 390x844 (Mobile)
> Arquetipo Cinético: [REVEAL_CHOREOGRAPHY]
> Mapa Visual: `referente-desktop.png` [S1] | `referente-scroll.png` [S2, S3] | `referente-scroll-2.png` [S4, S5] | `referente-scroll-3.png` [S6, S7] | `referente-scroll-4.png` [S8] | `referente-mobile.png`

## 0. Arquitectura del Sitio & Alcance Contractual
- **Tipo de Arquitectura:** `MULTI_PAGE` (Sitio Multi-Página con rutas independientes)
- **Modelo de Navegación:** `hybrid-nav`
- **Rutas y Plantillas Observadas:**
  - `/` -> **Portada / Landing**
  - `/introducing-our-academy/` -> **introducing-our-academy** (layout: `block`, cols: `N/A`, H1: `42px`)
  - `/the-btec-course/` -> **the-btec-course** (layout: `block`, cols: `N/A`, H1: `N/A`)
  - `/ba-hons-contemporary-circus-with-physical-theatre/` -> **ba-hons-contemporary-circus-with-physical-theatre** (layout: `block`, cols: `N/A`, H1: `N/A`)
- **Directiva de Alcance Forja:** Construir estructura multi-página: Home + 3 rutas dedicadas. Regla de Portada: el Home (`src/app/page.tsx` o `src/pages/index.astro`) respeta por defecto las 10 secciones medidas en la portada del referente (S1..S10), distribuyendo el resto de las áreas en sus rutas internas dedicadas, a menos que el prompt o brief.json indiquen específicamente cuántas y/o cuáles secciones debe tener el Home.

## 1. Stack & Motores en Runtime
- **Semilla Backend Sugerida [inferred] (`forja:new` / `forja:inject`):** `CHECKOUT` (Detectados controles de carrito, catálogo o intención transaccional en el DOM)
- **Motores Detectados:** CSS / Web Animations nativo
- **Superficie Gráfica:** DOM Puro / CSS
- **Fuentes Cargadas (`document.fonts`):** `Inter (100 900)`, `Roboto (400, 700)` (2 archivos `.woff2` en `raw-telemetry.json`)

## 2. Escala Tipográfica & Micro-Ritmo (Tensión H1/Body: 3.06x)
| Rol | Familia | Size (1440px) | Size (390px) | Weight | Line-Height | Tracking | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero)** | `Inter` | `55px` | `N/A` | `600` | `60.5px` | `normal` | `none` |
| **H2 (Sección)** | `Inter` | `N/A` | `—` | `N/A` | `N/A` | `0px` | `none` |
| **H3 (Card)** | `Inter` | `N/A` | `—` | `N/A` | `N/A` | `0px` | `none` |
| **Eyebrow** | `Roboto` | `16px` | `—` | `400` | `16px` | `normal` | `none` |
| **Body (P)** | `Roboto` | `18px` | `—` | `400` | `28.8px` | `normal` | `none` |
- **Taxonomía Visual Identificada:** Título: `Neo-Grotesque / Suizo Contemporáneo` | Cuerpo: `Sans-Serif Neutral`
- **Emparejamiento Google Fonts (ui-ux-pro-max):** Si las fuentes nativas son propietarias o no cargables, usar `Plus Jakarta Sans / Inter / DM Sans` para Display/Títulos y `Inter / Plus Jakarta Sans` para Lectura/Cuerpo.

## 3. Superficies, Morfología de Cards & CTA Primario
- **Lienzo Base:** Fondo `rgb(255, 255, 255)` | Texto `rgb(0, 0, 0)` | Hairline Divider: `none`
- **Secuencia Cromática de Secciones:** `S1: inherit` -> `S2: inherit` -> `S3: inherit` -> `S4: inherit` -> `S5: inherit` -> `S6: inherit` -> `S7: inherit` -> `S8: inherit` -> `S9: inherit` -> `S10: inherit`
- **Geometría del Hero (S1):** alto `720px` (`0.80vh`) | Anclaje de Contenido: `4% left / 30% top` | Ancho Bloque Texto: `43%` | Tratamiento de Medio: `none` | HERO_SIGNATURE Empírica: `[h1]`
- **Cards Reales & Editoriales (0 detectadas):**
  - Sin tarjetas detectadas en el viewport inicial
- **CTA Primario (Reposo):** `"My Account"` | alto `20px` | pad `0px 0px` | radius `0px` | bg `rgba(0, 0, 0, 0)` | color `rgb(255, 255, 255)` | border `none`
- **CTA Sonda `:hover`:** `sin delta medible`

## 4. Anatomía Estructural de Cabecera & Pie de Página (Header & Footer)
- **Hilo Invisible (Eje Maestro Izquierdo):** `4% (58px)`

### Cabecera (Header)
- **Alineación del Logo:** `unknown` | **Altura en Reposo:** `124px` (`14vh`) | **Filas:** `2` | **Relación con Hero:** `stacked`
- **Distribución Espacial Tripartita:** `[Nav] — [Espacio] — [Acciones]`
- **Modelo de Navegación:** `hybrid-nav` (Botón "", 13 enlaces inline: `My Account`, `Checkout`, `Newsletter Signup`, `Donate`, `About`, `Academy`, `Youth Circus`, `Classes`, `What’s On`, `Venue Hire`)
- **Cinta de Anuncio / Pre-header:** ⚠️ Presente
- **Estilo de Acciones / Utilidades:** `text-only` (Utilidades desktop en tipografía limpia — prohibido inventar íconos SVG)
- **Utilidades en Barra:** `My Account`, `Checkout`, `Newsletter Signup`, `Donate`, `Classes`, `What’s On`, `Venue Hire`, `Support Us`, `Supporting You`, `Jobs`

#### Especificación de Comportamiento del Navbar (Fases Cinéticas)
- **Estrategia General Detectada:** `flujo-normal` (Soporte Multi-Fase: Monofásico / Permanente)
- **Fase 1 (Reposo Y=0):** Altura `132px` | Posición `relative` | Fondo `rgb(29, 125, 80)` | Blur `none` | Superficie: `Borde a Borde` | Relación Hero: `stacked`
- **Fase 2 (Scroll Descendente):** Acción: `flujo-normal` | Altura `124px` | Fondo `rgb(29, 125, 80)` | Blur `none` | Superficie: `Borde a Borde` | ¿Oculta al bajar?: `No (Visible)`
- **Fase 3 (Scroll Ascendente / Retorno):** Reacción al subir: `reaparece-flotante` | Restauración en Y=0: `restaura-fase-1-en-y0`
- **Directiva Inviolable de Implementación en C3:** El componente de cabecera (`Header.tsx` o `Header.astro`) debe respetar el modelo `hybrid-nav` (renderizar obligatoriamente la navegación inline visible en desktop (13 enlaces medidos)). Implementar `data-nav-phase` ("top", "scrolled", "hidden") según las fases medidas y aplicar `handleHomeClick` sin enlaces de contacto duplicados.

### Pie de Página (Footer)
- **Presencia:** `38vh` | **Ancho útil:** `63%` | **Fuente máxima:** `28px`
- **Fondo / Superficie:** `rgb(29, 125, 80)` 
- **Arquetipo Estructural:** `split-bipartite`
- **Banner CTA en Footer:** Ausente (Sin bloque superior de llamada a la acción)
- **Columnas de Enlaces:** `10 enlaces totales (distribución plana / sin grupos de columnas)`
- **Palabras Destacadas:** `Instagram`, `TikTok`, `Facebook`, `YouTube`, `Vimeo`, `Donate`
- **Newsletter en Footer:** No integrado en footer
- **Selector de Región / Idioma:** Ausente
- **Wordmark Monumental en Base:** Ausente (PROHIBIDO agregar wordmark gigante simulado o text-[10vw] en la base del footer)
- **Directiva Inviolable de Fidelidad en C3:** El componente de pie de página (`Footer.tsx` o `Footer.astro`) debe respetar la anatomía medida en el referente. PROHIBIDO inventar columnas prefabricadas ("Ubicación", "Horario", "Contacto"), botones ficticios ("Volver arriba ↑") o enlaces repetidos que no figuren en la telemetría del referente. Todos los datos de negocio (marca, redes, enlaces, legal) deben consumirse exclusivamente desde `@/content/site.json`.

## 5. Mapa Anatómico Top-to-Bottom & Colapso Bimodal (1440px vs 390px)
| Sección | Presencia (Alto / Ancho Útil / Aire) | Layout Desktop | Layout Mobile | Padding (1440px -> 390px) | Fondo | Inventario Interno |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **S1** (`post-5586`) | `80vh` (`720px`) \| Contenedor: `43%` (`0.43w`) \| `92% aire` | `inline-block` (gap `normal`) | `inline-block` | `0px 0px 0px 0px` -> `0px 0px` | `inherit` | 1H, 0P, 0CTA, 0Media<br>📝 H: CIRCUS FOR EVERYONE |
| **S2** (`section-2`) | `58vh` (`523px`) \| Contenedor: `100%` (`1.00w`) \| `0% aire` | `block` (gap `normal`) | `block` | `0px 0px 0px 0px` -> `0px 0px` | `inherit` \| 📦 `css-bg (414x414)`, `css-bg (414x414)`, `css-bg (414x414)` | 3H, 0P, 2CTA, 0Media (+3 bg/mask CSS)<br>📝 H: STUDY WITH US · CTA: Find out more · H: WHAT'S ON |
| **S3** (`section-3`) | `58vh` (`523px`) \| Contenedor: `100%` (`1.00w`) \| `0% aire` | `block` (gap `normal`) | `block` | `0px 0px 0px 0px` -> `60px 0px` | `inherit` \| 📦 `css-bg (414x414)`, `css-bg (414x414)`, `css-bg (414x414)` | 3H, 0P, 2CTA, 0Media (+3 bg/mask CSS)<br>📝 H: YOUTH CIRCUS · H: PRIVATE HIRE · H: WEDDINGS |
| **S4** (`section-4`) | `48vh` (`432px`) \| Contenedor: `100%` (`1.00w`) \| `0% aire` | `block` (gap `normal`) | `flex-column` | `0px 0px 0px 0px` -> `N/A` | `inherit` | 1H, 4P, 0CTA, 0Media<br>📝 H: About us · P: Founded in 1984, Circomedia is a world-renowned centre for contemporary circus a · P: Our BTEC, Degree and Diploma courses combine technical and physical training wit |
| **S5** (`section-5`) | `60vh` (`536px`) \| Contenedor: `100%` (`1.00w`) \| `0% aire` | `block` (gap `normal`) | `flex-column` | `0px 0px 0px 0px` -> `N/A` | `inherit` \| 📦 `img (397x408)` | 1H, 3P, 2CTA, 2Media<br>📝 H: Introducing Our Academy · P: Circomedia Academy is a place to train, create and grow as a contemporary circus · P: City of Bristol College |
| **S6** (`section-6`) | `57vh` (`514px`) \| Contenedor: `100%` (`1.00w`) \| `0% aire` | `block` (gap `normal`) | `flex-column` | `0px 0px 0px 0px` -> `N/A` | `inherit` \| 📦 `img (503x386)` | 1H, 2P, 1CTA, 2Media<br>📝 H: Adult Classes · P: From complete beginners taking their first tentative steps into aerial, to those · P: Why not use our new classes menu page to explore all of our classes and search b |
| **S7** (`section-7`) | `63vh` (`570px`) \| Contenedor: `100%` (`1.00w`) \| `0% aire` | `block` (gap `normal`) | `flex-column` | `0px 0px 0px 0px` -> `N/A` | `inherit` \| 📦 `img (662x442)` | 1H, 1P, 1CTA, 2Media<br>📝 H: Hire Our Venue · P: Our dramatic Georgian church in the centre of Bristol offers a beautiful venue f · CTA: Find out more |
| **S8** (`section-8`) | `80vh` (`720px`) \| Contenedor: `100%` (`1.00w`) \| `0% aire` \| solape -64px | `block` (gap `normal`) | `flex-column` | `0px 0px 0px 0px` -> `N/A` | `inherit` | 1H, 2P, 1CTA, 0Media<br>📝 H: Youth Circus · P: Circomedia Youth Circus is one of the biggest in the UK with over 500 students.  · P: Led by our professional circus tutors, our after-school sessions offer a varied  |
| **S9** (`section-9`) | `45vh` (`409px`) \| Contenedor: `100%` (`1.00w`) \| `0% aire` | `block` (gap `normal`) | `flex-column` | `0px 0px 0px 0px` -> `N/A` | `inherit` \| 📦 `css-bg (300x300)`, `css-bg (300x300)`, `css-bg (300x300)`, `css-bg (300x300)` | 4H, 0P, 2CTA, 0Media (+4 bg/mask CSS)<br>📝 H: BTEC · CTA: Find out more · H: Undergraduate Course |
| **S10** (`section-10`) | `25vh` (`228px`) \| Contenedor: `100%` (`1.00w`) \| `0% aire` | `block` (gap `normal`) | `flex-column` | `0px 0px 0px 0px` -> `N/A` | `inherit` \| 📦 `img (315x100)`, `img (243x100)`, `img (99x100)` | 0H, 0P, 0CTA, 6Media |

## 6. Tokens Cinéticos & Dinámica de Scroll
- **Curvas Cubic-Bezier [declared] (11):** (mostrando 6 de 11) `cubic-bezier(.645,.045,.355,1)`, `cubic-bezier(.165,.84,.44,1)`, `cubic-bezier(.895,.03,.685,.22)`, `cubic-bezier(.55,.055,.675,.19)`, `cubic-bezier(.33333,.66667,.66667,1)`, `cubic-bezier(.215,.61,.355,1)`
- **Presupuestos de Duración [declared] (21):** (mostrando 6 de 21) `50ms` (8), `75ms` (35), `80ms` (5), `100ms` (62), `120ms` (10), `125ms` (28)
- **Estrategia Dinámica de Navbar [observed]:** `flujo-normal`
  - *Reposo (Y=0):* `pos: relative`, `bg: rgb(29, 125, 80)`, `blur: none`
  - *Scroll Down:* `top: -4806px`, `transform: none`, `bg: rgb(29, 125, 80)`, `blur: none`
- **Animaciones en Runtime [observed] (WAAPI: 2, CDP: 92):** `div.block card wow fadeInUp animated` (500ms, linear), `img.the-logos--single-logo wow fadeInUp animated lazyloaded` (500ms, linear)
- **Triggers GSAP / Scroll [observed]:** Ninguno
- **Parallax y Pins en Scroll [observed]:** Sin parallax angular detectado 
- **Scroll-Reveal Diferencial [observed]:** Detectado en `44 elementos` (S2, S3, S4, S5, S6, S7, S8, S9, S10) (duración: `js-driven`, curva: `scrub/spring`)
- **Transformaciones en Scroll [observed] (2):** `div.block card wow fadeInUp animated`, `img.the-logos--single-logo wow fadeInUp animated lazyloaded`

## 7. Receta de Transcripción Optimizada (60fps / Zero-Clutter)
- **Animación de Entrada (Scroll-Reveal):** *Hallazgo:* Reveal detectado en 44 elementos en S2, S3, S4, S5, S6, S7, S8, S9, S10 (js-driven, scrub/spring). -> *Directiva Forja:* Usar `whileInView` / `IntersectionObserver` (`once: true, amount: 0.2`) en S2, S3, S4, S5, S6, S7, S8, S9, S10 (js-driven scrub/spring). Hero S1 nace en `opacity: 1` y nunca dejar secciones en `opacity: 0` sin fallback SSR/hidratación ni `prefers-reduced-motion`.
- **Transiciones Quirúrgicas (Antipatrón transition: all):** *Hallazgo:* Se detectaron reglas activas con `transition: all` en hojas de estilo o nodos interactivos. -> *Directiva Forja:* Veto estricto a `transition: all`. Declarar propiedades explícitas (`transition: transform 160ms var(--ease-out), opacity 200ms ease`) y feedback táctil `active:scale-[0.97]`.
- **Carga Tipográfica Cero-CLS:** *Hallazgo:* 2 archivos WOFF2 interceptados por red en runtime. -> *Directiva Forja:* Servir WOFF2 en `/public/fonts/`, vía `next/font` o `@fontsource` / `<link>` con `display: swap` y ajuste de métricas para garantizar CLS = 0.

## 8. Navegación Móvil & Drawer Diff (390px)
- **Alertas de Telemetría:** 100% medible (0 advertencias)
- **Drawer / Overlay Detectado tras Clic:** No

- **Higiene de Scrollbar:** Body ScrollLock: `No` | Compensa salto de scrollbar: `No`

## 9. Muestreo Multi-Page (3 rutas internas)
- **`https://www.circomedia.com/introducing-our-academy/`** (`referente-introducing-our-academy.png`) -> display: `block` | cols: `N/A` | H1: `42px`
- **`https://www.circomedia.com/the-btec-course/`** (`referente-the-btec-course.png`) -> display: `block` | cols: `N/A` | H1: `N/A`
- **`https://www.circomedia.com/ba-hons-contemporary-circus-with-physical-theatre/`** (`referente-ba-hons-contemporary-circus-with-physical-theatre.png`) -> display: `block` | cols: `N/A` | H1: `N/A`
