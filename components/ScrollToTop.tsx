"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // instant snap
    });
  }, [pathname]); // Runs every time the URL path changes

  return null;
}
