"use client";

import { FormEvent, useRef, useState } from "react";
import { site } from "../lib/site";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "الاسم مطلوب";
    if (!phone.trim()) next.phone = "الهاتف مطلوب";
    if (!message.trim()) next.message = "الرسالة مطلوبة";
    return next;
  }

  function focusFirstInvalid(next: Errors) {
    if (next.name) nameRef.current?.focus();
    else if (next.phone) phoneRef.current?.focus();
    else if (next.message) messageRef.current?.focus();
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(false);
    setSubmitError(false);
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSubmitError(true);
      focusFirstInvalid(next);
      return;
    }
    setSuccess(true);
    setName("");
    setPhone("");
    setService("");
    setMessage("");
  }

  if (success) {
    return (
      <div
        role="status"
        className="rounded-card border border-gold/40 bg-navy px-6 py-8 text-center"
      >
        <h2 className="text-2xl font-bold text-gold">
          {site.contact.successHeadline}
        </h2>
        <p className="mt-3 text-cream/90">{site.contact.successBody}</p>
        <p className="mt-4 text-sm text-muted">{site.contact.successCta}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={site.phoneHref} className="btn-gold" dir="ltr">
            اتصل — <span className="tel-ltr">{site.phoneDisplay}</span>
          </a>
          <a
            href={site.whatsappHref}
            className="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            واتساب
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {submitError && (
        <div
          role="alert"
          className="mb-6 rounded-card border border-gold/20 bg-navy px-4 py-3 text-sm text-muted"
        >
          {site.contact.errorCopy}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gold">
            الاسم*
          </label>
          <input
            ref={nameRef}
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-card border border-gold/30 bg-navy-deep px-3 py-3 text-white"
            autoComplete="name"
            required
          />
          {errors.name && <p className="mt-1 text-sm text-gold-bright">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gold">
            الهاتف*
          </label>
          <input
            ref={phoneRef}
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-card border border-gold/30 bg-navy-deep px-3 py-3 text-white"
            autoComplete="tel"
            dir="ltr"
            required
          />
          {errors.phone && <p className="mt-1 text-sm text-gold-bright">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-gold">
            الخدمة
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-card border border-gold/30 bg-navy-deep px-3 py-3 text-white"
          >
            <option value="" disabled>
              {site.contact.servicePlaceholder}
            </option>
            {site.contact.serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gold">
            الرسالة*
          </label>
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-card border border-gold/30 bg-navy-deep px-3 py-3 text-white"
            required
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
