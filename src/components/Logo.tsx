import Link from "next/link";

export default function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <img src="/icon.png" alt="" aria-hidden="true" width={44} height={44} className="h-11 w-11" />
      <span className="leading-tight">
        <span className="block font-extrabold tracking-tight text-xl">
          <span className={dark ? "text-white" : "text-navy"}>BLAZE</span>
          <span className="text-gradient-orange">TECH</span>
        </span>
        <span
          className={`hidden sm:block text-[11px] tracking-[0.2em] uppercase ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Integrated Service Limited
        </span>
      </span>
    </Link>
  );
}
