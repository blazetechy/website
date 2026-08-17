import Link from "next/link";

export default function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flame" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffd35c" />
            <stop offset="50%" stopColor="#f7941d" />
            <stop offset="100%" stopColor="#f15a24" />
          </linearGradient>
        </defs>
        <path
          d="M16 1c1 4-3 5-3 8 0 2 1.5 3 3 3 1.8 0 3-1.4 3-3-1 2 .5 3.5 2 5 2 2 3 4.5 3 7 0 5.2-4.5 10-8 10s-8-4.8-8-10c0-3 1.2-5 3-7 .3 1.6 1.2 2.6 2.5 2.6-1-2-.8-4.4 0-6.6.7-2 2-4.5 2.5-9z"
          fill="url(#flame)"
        />
      </svg>
      <span className="leading-tight">
        <span className="block font-extrabold tracking-tight text-lg">
          <span className={dark ? "text-white" : "text-navy"}>BLAZE</span>
          <span className="text-gradient-orange">TECH</span>
        </span>
        <span
          className={`hidden sm:block text-[10px] tracking-[0.2em] uppercase ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Integrated Service Limited
        </span>
      </span>
    </Link>
  );
}
