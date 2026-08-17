import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({
  service,
  bulletLimit,
}: {
  service: Service;
  bulletLimit?: number;
}) {
  const bullets = bulletLimit ? service.bullets.slice(0, bulletLimit) : service.bullets;

  return (
    <div
      id={service.slug}
      className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg scroll-mt-24"
    >
      <span className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-orange text-sm font-bold text-white shadow-md">
        {service.number}
      </span>
      <h3 className="mt-3 text-lg font-bold text-navy">{service.title}</h3>
      <p className="mt-2 text-sm text-gray-500">{service.summary}</p>
      <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <svg
              className="mt-1 h-3.5 w-3.5 shrink-0 text-orange"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {bulletLimit && service.bullets.length > bulletLimit && (
        <Link
          href={`/services/#${service.slug}`}
          className="mt-4 text-sm font-semibold text-orange hover:underline"
        >
          Learn more &rarr;
        </Link>
      )}
    </div>
  );
}
