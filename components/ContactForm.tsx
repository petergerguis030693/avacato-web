"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "الاسم مطلوب";
    if (!phone.trim()) next.phone = "الهاتف مطلوب";
    if (!message.trim()) next.message = "الرسالة مطلوبة";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(false);
    setSubmitError(false);
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSubmitError(true);
      return;
    }
    setSuccess(true);
    setName("");
    setPhone("");
    setMessage("");
  }

  return (
    <div>
      {success && (
        <div
          role="status"
          className="mb-6 rounded-card border border-gold/40 bg-navy px-4 py-3 text-sm text-cream"
        >
          شكراً — استلمنا رسالتك وهنتواصل معاك في أقرب وقت.
        </div>
      )}
      {submitError && !success && (
        <div
          role="alert"
          className="mb-6 rounded-card border border-gold/20 bg-navy px-4 py-3 text-sm text-muted"
        >
          من فضلك راجع الحقول المطلوبة وأعد الإرسال.
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gold">
            الاسم*
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-card border border-gold/30 bg-navy-deep px-3 py-3 text-white"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-sm text-gold-bright">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gold">
            الهاتف*
          </label>
          <input
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-card border border-gold/30 bg-navy-deep px-3 py-3 text-white"
            autoComplete="tel"
            dir="ltr"
          />
          {errors.phone && <p className="mt-1 text-sm text-gold-bright">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gold">
            الرسالة*
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-card border border-gold/30 bg-navy-deep px-3 py-3 text-white"
          />
          {errors.message && <p className="mt-1 text-sm text-gold-bright">{errors.message}</p>}
        </div>

        <button type="submit" className="btn-gold">
          إرسال
        </button>
      </form>
    </div>
  );
}
