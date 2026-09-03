import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { ContactHero } from '@/components/contact-page/contact-hero';
import { ContactInfo } from '@/components/contact-page/contact-info';
import { ContactForm } from '@/components/contact-page/contact-form';
import { ContactBusinesses } from '@/components/contact-page/contact-businesses';
import { ContactClosing } from '@/components/contact-page/contact-closing';

export const metadata = {
  title: 'Contact Us | Preethi Group',
  description: 'Start a conversation with Preethi Group. Get in touch for general enquiries, business opportunities, or to explore our group of companies.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactBusinesses />
        <ContactClosing />
      </main>
      <Footer />
    </>
  );
}
