# Matriz de Tratamiento de Datos Personales — Aerea Circo
**Normativa aplicable:** Normativa vigente sobre Protección de Datos Personales y Privacidad.
**Responsable del Tratamiento:** Aerea Circo (contacto@aerea-circo.cl).
**Fecha de inventario:** 2026-11-21 | **Semilla Forja:** NONE

---

## 1. Inventario de Datos Capturados por el Sistema

| Dato Capturado | Finalidad Específica | Base de Licitud | Plazo de Retención | Almacenamiento & Destino |
| :--- | :--- | :--- | :--- | :--- |
| **Nombre Completo** | Identificar la solicitud y gestionar la relación precontractual o servicio | Consentimiento explícito / Ejecución de Contrato | Durante la gestión del requerimiento o 12 meses | SQLite local (`dev.db`) / PostgreSQL en producción |
| **Correo Electrónico** | Respuesta directa, cotización o envío de confirmación transaccional | Consentimiento explícito / Ejecución de Contrato | Durante la relación comercial o 12 meses | SQLite local (`dev.db`) / PostgreSQL en producción |

| **Consentimiento Legal** | Registro de trazabilidad y fecha de aceptación de términos | Obligación Legal / Consentimiento | Indefinido mientras se traten los datos del titular | Registro fechado (`consentidoAt` / `privacyVersion`) |

---

## 2. Procedimiento de Ejercicio de Derechos ARCO+
Los titulares pueden revocar su consentimiento o solicitar Acceso, Rectificación, Supresión, Oposición, Portabilidad o Bloqueo enviando un correo a:
`contacto@aerea-circo.cl`

**Plazo máximo de pronunciamiento y respuesta:** 30 días corridos.
