import Link from "next/link";

export default function Logo({
  dark = true,
  size = "default",
}: {
  dark?: boolean;
  size?: "default" | "lg";
}) {
  const isLg = size === "lg";

  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <img
        src="/icon.png"
        alt=""
        aria-hidden="true"
        width={isLg ? 96 : 44}
        height={isLg ? 96 : 44}
        className={isLg ? "h-16 w-16 sm:h-24 sm:w-24" : "h-11 w-11"}
      />
      <span className="leading-tight">
        <span
          className={`block font-extrabold tracking-tight ${
            isLg ? "text-3xl sm:text-5xl" : "text-xl"
          }`}
        >
          <span className={dark ? "text-white" : "text-navy"}>BLAZE</span>
          <span className="text-gradient-orange">TECH</span>
        </span>
        <span
          className={`hidden sm:block ${isLg ? "text-sm" : "text-[11px]"} tracking-[0.2em] uppercase ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Integrated Service Limited
        </span>
      </span>
    </Link>
  );
}
