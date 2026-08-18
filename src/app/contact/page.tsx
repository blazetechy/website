import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BlazeTech Integrated Service Limited for IT, security and technology solutions. Call, WhatsApp or send us a message.",
  alternates: {
    canonical: "/contact/",
  },
};

const mapQuery = encodeURIComponent(company.address);
const whatsappMessage = encodeURIComponent(
  "Hello BlazeTech, I'd like to enquire about your services."
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange">
            Get In Touch
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Let&apos;s build a{" "}
            <span className="text-gradient-orange">smarter and secure</span>{" "}
            future together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Tell us what you&apos;re planning and we&apos;ll get back to you
            with a tailored recommendation.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
            <h2 className="text-xl font-bold text-navy">Send Us a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold text-navy">Reach Us Directly</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <IconPhone />
                  <div>
                    <p className="font-semibold text-navy">Phone</p>
                    <a href={`tel:${company.phoneIntl}`} className="text-gray-600 hover:text-orange">
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconWhatsApp />
                  <div>
                    <p className="font-semibold text-navy">WhatsApp</p>
                    <a
                      href={`https://wa.me/${company.phoneIntl.replace("+", "")}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-orange"
                    >
                      Chat with us
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconMail />
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <a href={`mailto:${company.email}`} className="text-gray-600 hover:text-orange">
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconPin />
                  <div>
                    <p className="font-semibold text-navy">Office</p>
                    <p className="text-gray-600">{company.address}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <iframe
                title="BlazeTech office location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function IconPhone() {
  return (
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function IconWhatsApp() {
  return (
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.08L2 22l5.2-1.44a9.9 9.9 0 0 0 4.84 1.24h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Z" />
      </svg>
    </span>
  );
}

function IconMail() {
  return (
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" opacity="0" />
        <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    </span>
  );
}

function IconPin() {
  return (
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    </span>
  );
}
