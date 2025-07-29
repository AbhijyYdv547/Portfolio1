"use client";
import React, { ReactNode } from "react";
import { useEffect, useState } from "react";
import { LoaderOne } from "@/components/ui/loader";

export function Loader({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoaderOne />
      </div>
    );
  }

  return <>{children}</>;
}
