import type { Metadata } from "next";
import Link from "next/link";
import StatusScreen from "@/components/StatusScreen";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <StatusScreen
      code="404"
      title="This page went off the grid."
      message="The page you're looking for doesn't exist, may have been moved, or the link is broken."
      primaryAction={
        <Link
          href="/services/"
          className="rounded-full bg-gradient-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange/20 hover:opacity-90 transition-opacity"
        >
          View Our Services
        </Link>
      }
    />
  );
}
