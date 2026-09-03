'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { groupContact } from '@/lib/data/site';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Left — text */}
          <div className="flex flex-col justify-center md:col-span-5">
            <Reveal as="span" className="eyebrow mb-6 block">
              Contact
            </Reveal>
            <Reveal as="h2" className="text-balance text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s start
              <br />
              a conversation.
            </Reveal>
            <Reveal as="p" className="mt-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              For general enquiries, business enquiries or anything related to
              Preethi Group, get in touch with us.
            </Reveal>

            <Reveal className="mt-10 space-y-3" delay={0.1}>
              <p className="text-base text-foreground">{groupContact.generalEmail}</p>
              <p className="text-base text-foreground">{groupContact.phone}</p>
              <p className="text-base text-muted-foreground">{groupContact.location}</p>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7 md:pl-8 lg:pl-16">
            <Reveal delay={0.05}>
              {submitted ? (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-sm border border-border bg-brand-cream p-10 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">
                    Thank you for reaching out.
                  </h3>
                  <p className="mt-3 max-w-sm text-pretty text-muted-foreground">
                    We&apos;ve received your enquiry and will get back to you
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-semibold text-brand-red"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label="Name" name="name" type="text" placeholder="Your name" required />
                    <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                  </div>
                  <Field label="Phone" name="phone" type="tel" placeholder="+91 00000 00000" />
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us how we can help"
                      className="w-full resize-none border-b border-border bg-transparent pb-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-0"
                    />
                  </div>
                  <button
                    type="submit"
                    className="link-arrow group text-foreground hover:text-brand-red"
                  >
                    <span className="border-b border-foreground pb-1 text-sm font-semibold transition-colors group-hover:border-brand-red">
                      Send enquiry
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-border bg-transparent pb-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-0"
      />
    </div>
  );
}
