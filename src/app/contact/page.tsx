import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Adrian Cardenas for soccer coaching inquiries in Oahu, Hawaii. Email, Instagram, or fill out the contact form.",
};

const contactMethods = [
  {
    title: "Email",
    value: "4adrian.cardenas.santiago@gmail.com",
    href: "mailto:4adrian.cardenas.santiago@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    value: "@adrian.cardenas.santiago",
    href: "https://instagram.com/adrian.cardenas.santiago",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    title: "TikTok",
    value: "@adrian.cardenas.santiago",
    href: "https://tiktok.com/@adrian.cardenas.santiago",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-dark-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">
              Contact
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let&apos;s{" "}
              <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-dark-300">
              Have questions about training? Want to discuss your goals?
              Reach out and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-12 lg:py-16 bg-dark-950">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card hover className="text-center h-full">
                  <CardContent>
                    <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mx-auto mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                    <p className="text-dark-400 text-sm break-all">{method.value}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-12 lg:py-16 bg-dark-900">
        <Container size="md">
          <div className="bg-dark-800 rounded-2xl border border-dark-700 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-dark-400">
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Location Info */}
      <section className="py-20 lg:py-28 bg-dark-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">
                Location
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Training Across{" "}
                <span className="gradient-text">Oahu</span>
              </h2>
              <p className="text-dark-300 text-lg mb-6">
                Training sessions take place at local parks and fields across Oahu.
                During your consultation, we&apos;ll find a location that&apos;s convenient for you.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Multiple locations available across the island
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Flexible scheduling to fit your availability
                </li>
                <li className="flex items-center gap-3 text-dark-300">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Public parks with quality grass fields
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="bg-dark-900 rounded-2xl border border-dark-800 p-8 text-center aspect-video flex items-center justify-center">
              <div>
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Oahu, Hawaii</h3>
                <p className="text-dark-400">Training at local parks island-wide</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick CTA */}
      <section className="py-12 lg:py-16 bg-dark-900">
        <Container>
          <div className="text-center">
            <p className="text-dark-300 text-lg mb-4">
              Ready to get started?
            </p>
            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
            >
              Book Your Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
