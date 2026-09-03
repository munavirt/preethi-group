'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    // Basic Validation
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const enquiry = formData.get('enquiry') as string;
    const message = formData.get('message') as string;

    if (!name.trim()) newErrors.name = 'Please enter your name.';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!enquiry) newErrors.enquiry = 'Please select a topic.';
    if (!message.trim()) newErrors.message = 'Please enter your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and begin submission
    setErrors({});
    setFormState('submitting');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Randomly succeed or fail for demo purposes (usually 100% success in dev, but leaving it reliable)
      setFormState('success');
      // e.currentTarget.reset(); // Don't reset automatically yet, we replace the UI
    } catch {
      setFormState('error');
    }
  };

  const handleReset = () => {
    setFormState('idle');
    setErrors({});
    // We would clear the actual form DOM here if we used a ref, but re-rendering the form component clears it inherently
  };

  return (
    <section className="bg-background py-20 md:py-32 border-b border-border">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Header */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal as="span" className="eyebrow mb-6 inline-block">
              HAVE AN ENQUIRY?
            </Reveal>
            <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              We'd like to hear from you.
            </Reveal>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <SuccessState key="success" onReset={handleReset} />
              ) : formState === 'error' ? (
                <ErrorState key="error" onRetry={() => setFormState('idle')} />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-10"
                  noValidate
                >
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <InputGroup 
                      label="Name *" 
                      name="name" 
                      type="text" 
                      error={errors.name} 
                      disabled={formState === 'submitting'}
                    />
                    <InputGroup 
                      label="Email *" 
                      name="email" 
                      type="email" 
                      error={errors.email} 
                      disabled={formState === 'submitting'}
                    />
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <InputGroup 
                      label="Phone (Optional)" 
                      name="phone" 
                      type="tel" 
                      error={errors.phone} 
                      disabled={formState === 'submitting'}
                    />
                    
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="enquiry" className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                        What can we help you with? *
                      </label>
                      <select 
                        id="enquiry" 
                        name="enquiry"
                        disabled={formState === 'submitting'}
                        defaultValue=""
                        className={`w-full bg-transparent border-b ${errors.enquiry ? 'border-brand-red' : 'border-border'} py-3 text-base text-foreground focus:outline-none focus:border-foreground transition-colors rounded-none appearance-none cursor-pointer disabled:opacity-50`}
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="general">General Enquiry</option>
                        <option value="business">Business Opportunity</option>
                        <option value="press">Press / Media</option>
                        <option value="careers">Careers</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-0 bottom-4 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {errors.enquiry && (
                        <span className="text-xs text-brand-red mt-1" role="alert">{errors.enquiry}</span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                      Message *
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      disabled={formState === 'submitting'}
                      className={`w-full bg-transparent border-b ${errors.message ? 'border-brand-red' : 'border-border'} py-3 text-base text-foreground focus:outline-none focus:border-foreground transition-colors resize-none disabled:opacity-50`}
                    />
                    {errors.message && (
                      <span className="text-xs text-brand-red mt-1" role="alert">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="group inline-flex h-14 items-center justify-center rounded-full bg-brand-red px-8 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-brand-red/90 uppercase disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
                    >
                      {formState === 'submitting' ? 'SENDING...' : 'SEND ENQUIRY'}
                      {formState !== 'submitting' && (
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

function InputGroup({ 
  label, 
  name, 
  type, 
  error,
  disabled 
}: { 
  label: string; 
  name: string; 
  type: string; 
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
        {label}
      </label>
      <input 
        type={type} 
        id={name} 
        name={name} 
        disabled={disabled}
        className={`w-full bg-transparent border-b ${error ? 'border-brand-red' : 'border-border'} py-3 text-base text-foreground focus:outline-none focus:border-foreground transition-colors disabled:opacity-50`}
      />
      {error && (
        <span className="text-xs text-brand-red mt-1" role="alert">{error}</span>
      )}
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-start justify-center h-full min-h-[400px] bg-muted/30 p-10 md:p-16 border border-border"
    >
      <CheckCircle2 className="w-12 h-12 text-green-600 mb-6" strokeWidth={1.5} />
      <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
        Message sent
      </h3>
      <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-md">
        Thank you for reaching out. We've received your enquiry and will get back to you soon.
      </p>
      <button
        onClick={onReset}
        className="link-arrow group inline-flex items-center text-sm font-semibold tracking-widest text-foreground hover:text-brand-red uppercase"
      >
        <span className="border-b border-foreground pb-1 transition-colors group-hover:border-brand-red">
          SEND ANOTHER MESSAGE
        </span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-start justify-center h-full min-h-[400px] bg-red-50 dark:bg-red-950/20 p-10 md:p-16 border border-brand-red/30"
    >
      <AlertCircle className="w-12 h-12 text-brand-red mb-6" strokeWidth={1.5} />
      <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
        Something went wrong
      </h3>
      <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-md">
        We couldn't send your enquiry right now. Please try again in a moment.
      </p>
      <button
        onClick={onRetry}
        className="group inline-flex h-14 items-center justify-center rounded-full bg-brand-red px-8 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-brand-red/90 uppercase"
      >
        TRY AGAIN
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
}
