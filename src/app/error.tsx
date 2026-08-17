"use client";

import { useEffect } from "react";
import StatusScreen from "@/components/StatusScreen";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusScreen
      code="500"
      title="Something went wrong."
      message="An unexpected error occurred while loading this page. Please try again, or reach out if the problem continues."
      primaryAction={
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-gradient-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange/20 hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      }
    />
  );
}
