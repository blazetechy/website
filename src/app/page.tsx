import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { company, differentiators, services } from "@/lib/services";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange">
              {company.tagline}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Innovative <span className="text-gradient-orange">Technology.</span>
              <br />
              Smarter <span className="text-gradient-orange">Solutions.</span>
              <br />
              Better <span className="text-gradient-orange">Tomorrow.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              {company.name} is a technology and integrated solutions company
              delivering reliable, innovative and cost-effective solutions
              that empower businesses, organizations and individuals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="rounded-full bg-gradient-orange px-7 py-3.5 text-sm font-semibold shadow-lg shadow-orange/20 hover:opacity-90 transition-opacity"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services/"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy-2 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
          {differentiators.map((d) => (
            <div key={d.title} className="text-center sm:text-left">
              <p className="text-sm font-semibold">{d.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Our <span className="text-gradient-orange">Core</span> Services
            </h2>
            <p className="mt-4 text-gray-500">
              End-to-end technology solutions covering infrastructure,
              security, software and support &mdash; delivered by one
              accountable partner.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} bulletLimit={4} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Why Choose <span className="text-gradient-orange">BlazeTech</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {differentiators.map((d) => (
              <div key={d.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-orange text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-bold text-navy">{d.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Let&apos;s build a{" "}
            <span className="text-gradient-orange">smarter and secure</span>{" "}
            future together.
          </h2>
          <p className="mt-4 text-gray-300">
            Call {company.phone} or send us a message &mdash; we&apos;ll
            respond with a tailored recommendation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-full bg-gradient-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange/20 hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${company.phoneIntl}`}
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
