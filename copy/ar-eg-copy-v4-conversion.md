# مكتب الأفوكاتو — Copy v4 Conversion · عربي مصري
Texter · 2026-09-25 · Scope-GO Hadrigan Conversion Must+Should  
Basis: ar-eg-copy-v3.md · Review: `/workspace/design-specs/avacato/conversion-review-v1.md`  
Spec (parallel): `ui-spec-v1.2-conversion.md`  
Host: `avacato.smarttech-connection.com`  
Tel: `01123027887` · `tel:+201123027887`  
WhatsApp: `https://wa.me/201123027887` (نفس الرقم)

**Scope:** A1 WhatsApp · A2 Contact Map+Form · A3 Trust Proof (ohne Fake-Jahre) · A4 Home الإعداد · A5 FAQ · Sticky Dual · A7 تصفية-Cleanup · A8 Litigation Disclaimer. Keine neuen Routen. Keine erfundenen Jahreszahlen.

---

## A1 — WhatsApp & Dual-CTA (Global)

| Slot | AR | Link |
|------|-----|------|
| Header CTA Tel | اتصل الآن | `tel:+201123027887` |
| Header CTA WhatsApp (Desktop Icon/Secondary) | واتساب | `https://wa.me/201123027887` |
| Sticky Mobile Primary | اتصال | `tel:+201123027887` |
| Sticky Mobile Secondary | واتساب | `https://wa.me/201123027887` |
| Detail/CTA Band Secondary (optional) | كلمنا واتساب | `https://wa.me/201123027887` |

**Prefill WhatsApp (optional query):**  
`https://wa.me/201123027887?text=` + URL-encoded:  
`مرحباً، محتاج استشارة بخصوص [الخدمة]`

---

## A3 — Home Trust Proof-Strip (ersetzt Floskel-Pills)

**Label:** ليه مكتب الأفوكاتو  
**Hinweis:** Keine Jahreszahlen bis Peter liefert. 3 harte, belegbare Slots.

| # | Titel | Body |
|---|-------|------|
| 1 | باسوس — قريب منك | طريق القناطر الخيرية · فوق مطعم البرنس · أمام مخزن الأنابيب — عنوان واضح يسهّل الزيارة. |
| 2 | تركيز على شغلك القانوني | شركات · تراخيص · إجراءات حكومية · قضايا · شهر عقاري — مش كلام عام. |
| 3 | خطوة واضحة من أول مكالمة | تعرف إيه المطلوب وإيه الخطوة الجاية — من غير لف ودوران. |

**Optional Meta-Zeile unter Strip:** سرعة · دقة · احترافية (klein, nicht als Proof ersetzen)

---

## A4 — Home الإعداد (3 Steps)

- **Label:** الإعداد  
- **H2:** ازاي بنشتغل معاك  
- **Intro:** ثلاث خطوات بسيطة — من المكالمة لحد ما أوراقك تتحرك.

| Nr | Titel | Body |
|----|-------|------|
| 01 | مكالمة أو واتساب | تقول المشكلة أو الخدمة المطلوبة — نحدد المسار والمستندات. |
| 02 | تجهيز وتقديم | نرتّب الأوراق ونتابع الجهات المختصة ونبلّغك بالاستيفاءات. |
| 03 | استلام / متابعة | تاخد النتيجة في إيدك أو نتابع الملف لحد الرد المهم. |

- **CTA:** اتصل الآن — 01123027887 · أو واتساب

---

## A5 — FAQ (Home `#faq` oder Contact)

- **Label:** أسئلة شائعة  
- **H2:** قبل ما تكلمنا

### 1. المكالمة أو الرسالة بتتكلف؟
أول تواصل للاستفسار مجاني من ناحية الموقع — تفاصيل الأتعاب والاستشارة بنوضحها حسب حالتك بعد ما نفهم المطلوب.

### 2. إيه المستندات اللي أجهّزها؟
حسب الخدمة: بطاقة شخصية، عقود، سجل، رخص، أو أوراق القضية. بعد المكالمة الأولى بنبعتلك قائمة واضحة لحالتك.

### 3. قد إيه بياخد الإجراء وقت؟
يختلف حسب الجهة ونوع المعاملة. بعد ما نشوف الملف بنقول إطار زمني واقعي — من غير مواعيد وهمية.

### 4. بتضمنوا كسب القضية؟
لا. في القضايا بنوضّح الموقف والمسار والمخاطر بصراحة — من غير ضمان نتيجة قضية.

### 5. أكلّم ولا أبعّت واتساب؟
الاتنين تمام. للتواصل السريع: واتساب أو اتصال على 01123027887.

---

## A2 — Contact `/contact`

### Meta (Update)
- **title:** تواصل معنا | مكتب الأفوكاتو — 01123027887
- **description:** اتصل أو واتساب 01123027887 — باسوس، طريق القناطر الخيرية. خريطة ومواعيد التواصل.

### Above Form — dominante CTAs
- **H1:** للتواصل  
- **Tel Button:** اتصل — 01123027887 → `tel:+201123027887`  
- **WhatsApp Button:** واتساب → `https://wa.me/201123027887`  
- **Adresse:**
  - باسوس — طريق القناطر الخيرية
  - فوق مطعم البرنس · أمام مخزن الأنابيب
- **Map Link Label:** افتح الموقع على الخريطة  
- **Map URL:** Google Maps Search/Pin für Adresse (Coder setzt finalen Maps-Link; Copy-Label fertig)

### Form Labels
| Feld | Label | Notes |
|------|-------|-------|
| name | الاسم* | required |
| phone | الهاتف* | required |
| service | الخدمة | Select — siehe Options |
| message | الرسالة* | required |
| submit | إرسال | |

### Select الخدمة — Options
1. تأسيس الشركات  
2. التراخيص  
3. الاستيراد والتصدير  
4. الإجراءات الحكومية  
5. القضايا  
6. الشهر العقاري وتقنين الأراضي  
7. أخرى / استشارة عامة  

### Success-State
- **Headline:** تم استلام رسالتك  
- **Body:** شكراً — هنتواصل معاك في أقرب وقت على رقم الهاتف اللي سجلته.  
- **Neben-CTA:** محتاج رد أسرع؟ اتصل أو ابعت واتساب — 01123027887

### Error-State
من فضلك راجع الحقول المطلوبة وأعد الإرسال.

---

## A7 — Services Overview: تصفية وبيع (Cleanup)

**Statt Orphan-H2:** als Card im Grid oder klarer Teaser unter companies:

- **Titel:** تصفية وبيع الشركات  
- **Teaser (≤2 Zeilen):** تصفية · نقل ملكية · بيع — تخرج بأوراق قانونية سليمة  
- **Link:** `/services/companies` (Anker `#liquidation` optional)

---

## A8 — Litigation Disclaimer (nahe CTA Detail `/services/litigation`)

- **Kurzzeile unter Lead oder über CTA:**  
  استشارة وتمثيل بمسار واضح — **من غير ضمان نتيجة قضية.**
- **CTA bleibt:** اتصل الآن / واتساب — 01123027887

---

## Sticky Mobile (Final Copy)

| Button | Label | Href |
|--------|-------|------|
| 1 | اتصال | `tel:+201123027887` |
| 2 | واتساب | `https://wa.me/201123027887` |

---

## Coder-Hinweise
- WhatsApp überall gleiche Nummer `201123027887`  
- Trust: **keine** Jahres-/Statistik-Claims bis Peter liefert  
- Map: Label + Link; Embed optional laut Spec  
- Form Select `service` → Success Copy oben  
- FAQ Accordion; Home الإعداد nach Pain oder vor Trust (laut Spec Reihenfolge)  
- bestehende v3 Service-Details unverändert außer Litigation-Disclaimer + optional WhatsApp Secondary-CTA
