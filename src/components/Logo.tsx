import Link from "next/link";

export default function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <img src="/icon.png" alt="" aria-hidden="true" width={72} height={72} className="h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]" />
      <span className="leading-tight">
        <span className="block font-extrabold tracking-tight text-2xl sm:text-3xl">
          <span className={dark ? "text-white" : "text-navy"}>BLAZE</span>
          <span className="text-gradient-orange">TECH</span>
        </span>
        <span
          className={`hidden sm:block text-xs tracking-[0.2em] uppercase ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Integrated Service Limited
        </span>
      </span>
    </Link>
  );
}
