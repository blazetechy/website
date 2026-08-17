import Link from "next/link";
import Logo from "./Logo";
import { company, services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {company.name} is a technology and integrated solutions company
              delivering reliable, innovative and cost-effective solutions
              that empower businesses, organizations and individuals.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-orange">Home</Link></li>
              <li><Link href="/services/" className="hover:text-orange">Services</Link></li>
              <li><Link href="/about/" className="hover:text-orange">About Us</Link></li>
              <li><Link href="/contact/" className="hover:text-orange">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Core Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/#${s.slug}`} className="hover:text-orange">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="text-orange font-medium hover:underline">
                  View all services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${company.phoneIntl}`} className="hover:text-orange">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-orange">
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange"
                >
                  {company.website}
                </a>
              </li>
              <li className="text-gray-400">{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <p>Let&apos;s build a smarter and secure future together.</p>
        </div>
      </div>
    </footer>
  );
}
