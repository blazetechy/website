import Link from "next/link";

export default function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <img src="/icon.png" alt="" aria-hidden="true" width={96} height={96} className="h-16 w-16 sm:h-24 sm:w-24" />
      <span className="leading-tight">
        <span className="block font-extrabold tracking-tight text-3xl sm:text-5xl">
          <span className={dark ? "text-white" : "text-navy"}>BLAZE</span>
          <span className="text-gradient-orange">TECH</span>
        </span>
        <span
          className={`hidden sm:block text-sm tracking-[0.2em] uppercase ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Integrated Service Limited
        </span>
      </span>
    </Link>
  );
}
