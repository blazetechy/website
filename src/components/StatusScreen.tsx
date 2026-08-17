import Link from "next/link";
import type { ReactNode } from "react";
import { company } from "@/lib/services";

export default function StatusScreen({
  code,
  title,
  message,
  primaryAction,
  children,
}: {
  code: string;
  title: string;
  message: string;
  primaryAction?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-gradient-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <svg width="70%" height="70%" viewBox="0 0 32 32" fill="none" className="max-w-2xl opacity-[0.06]">
          <path
            d="M16 1c1 4-3 5-3 8 0 2 1.5 3 3 3 1.8 0 3-1.4 3-3-1 2 .5 3.5 2 5 2 2 3 4.5 3 7 0 5.2-4.5 10-8 10s-8-4.8-8-10c0-3 1.2-5 3-7 .3 1.6 1.2 2.6 2.5 2.6-1-2-.8-4.4 0-6.6.7-2 2-4.5 2.5-9z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-7xl font-extrabold tracking-tight text-gradient-orange sm:text-8xl">
          {code}
        </p>
        <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-md text-gray-300">{message}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {primaryAction}
          <Link
            href="/"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact/"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Contact Support
          </Link>
        </div>

        {children}

        <p className="mt-12 text-xs text-gray-400">
          Need help right away? Call{" "}
          <a href={`tel:${company.phoneIntl}`} className="text-orange hover:underline">
            {company.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
