import type { Metadata } from "next";
import Link from "next/link";
import { company, differentiators } from "@/lib/services";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BlazeTech Integrated Service Limited — our mission, values, and commitment to reliable technology solutions.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange">
            About Us
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            {company.tagline}
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-navy">Who We Are</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              {company.name} is a technology and integrated solutions company
              delivering reliable, innovative and cost-effective solutions
              that empower businesses, organizations and individuals. We bring
              together IT infrastructure, security systems, software and
              ongoing technical support under one accountable team, so our
              clients deal with a single trusted partner instead of
              coordinating multiple vendors.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-navy">Our Mission</h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                To deliver reliable, innovative and cost-effective technology
                solutions that empower businesses, organizations and
                individuals across Nigeria.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">Our Vision</h3>
              <p className="mt-2 leading-relaxed text-gray-600">
                To be a leading integrated technology solutions provider,
                trusted for innovation, quality and excellence in every
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              What Sets Us <span className="text-gradient-orange">Apart</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <h3 className="text-sm font-bold text-navy">{d.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-navy">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to work with a partner you can rely on?
          </h2>
          <p className="mt-4 text-gray-300">
            Reach us at{" "}
            <a href={`mailto:${company.email}`} className="text-orange hover:underline">
              {company.email}
            </a>{" "}
            or start a conversation.
          </p>
          <div className="mt-8">
            <Link
              href="/contact/"
              className="rounded-full bg-gradient-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange/20 hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
