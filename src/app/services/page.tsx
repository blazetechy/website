import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { company, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore BlazeTech's full range of IT infrastructure, security, software, cloud and technology support services.",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange">
            What we do
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Our <span className="text-gradient-orange">Core</span> Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Ten service lines covering infrastructure, hardware, software,
            security, cloud, consultancy, power and ongoing support &mdash;
            all delivered by one accountable team.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            Not sure which service fits your needs?
          </h2>
          <p className="mt-4 text-gray-500">
            Tell us about your project and we&apos;ll recommend the right
            combination of services.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="rounded-full bg-gradient-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange/20 hover:opacity-90 transition-opacity"
            >
              Talk to an Engineer
            </Link>
            <a
              href={`tel:${company.phoneIntl}`}
              className="rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy hover:bg-gray-100 transition-colors"
            >
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
