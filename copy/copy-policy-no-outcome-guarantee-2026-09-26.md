# Copy policy — no court-outcome guarantees

**Date:** 2026-09-26  
**Owner:** Peter (site owner)  
**Applies to:** all live Arabic marketing copy (`lib/site.ts`, pages, components) and current copy sources under `copy/`.

## Rule

Do **not** mention guaranteeing a court-case outcome — positively or negatively.

- Delete the wording. Do not rewrite it into a softer disclaimer.
- Delete the entire FAQ item if the question is about guaranteeing / winning a case. Leave no empty shell.
- Do not invent replacement outcome-disclaimer text.
- Do not add fake success rates or unproven win claims.

Forbidden families (and close variants):

- لا نضمن كسب القضية
- لا ضمان لنتيجة القضية
- من دون ضمان نتيجة قضية / من دون ضمان نتيجة
- هل تضمنون كسب القضية؟ / هل يمكن ضمان كسب القضية؟
- لا يمكن ضمان نتيجة أي قضية
- بلا وعود فارغة (when tied to case or process outcomes)
- Meta / title / description / OG / JSON-LD that mention ضمان نتيجة or كسب القضية

## Allowed after deletion

Trim the remaining clause so Arabic stays grammatical. Keep other SEO (services, process, contact).

Peter-approved litigation narrative (diligence / working toward the best possible result — **not** a win guarantee):

- ندرس قضيتك بعناية ونعمل معك لتحقيق أفضل النتائج
- في مكتب الأفوكاتو، نولي كل قضية الاهتمام الذي تستحقه، ونحرص على دراسة جميع التفاصيل والمستندات والأدلة بعناية، مع إعداد استراتيجية قانونية مدروسة وتحضير شامل لكل مرحلة من مراحل القضية.
- نؤمن بأن التعاون المستمر مع عملائنا، إلى جانب الدراسة الدقيقة والتحضير الجيد، يشكل أساسًا قويًا للعمل نحو تحقيق أفضل النتائج القانونية الممكنة.
- قضيتك مسؤوليتنا، ونعمل معك بكل جدية للوصول إلى أفضل نتيجة ممكنة.

Live source of truth: `lib/site.ts` + pages/components. Align current copy docs (`ar-eg-copy-v8-home.md`, `ar-eg-copy-v9-litigation.md`) with live strings. Historical v1–v5 snapshots are not shipped.
