"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { company } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <Logo size="lg" />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${company.phoneIntl}`}
              className="text-sm font-semibold text-white hover:text-orange transition-colors"
            >
              {company.phone}
            </a>
            <Link
              href="/contact/"
              className="rounded-full bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange/20 hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-navy">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-gray-200 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${company.phoneIntl}`}
              className="block text-base font-semibold text-white"
            >
              Call {company.phone}
            </a>
            <Link
              href="/contact/"
              className="block text-center rounded-full bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
