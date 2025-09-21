"use client";

import Link from "next/link";
import { FiGithub, FiGlobe } from "react-icons/fi";

import { Button } from "./ui/button";

export default function CustomHeader() {
  return (
    <header className="flex flex-row items-center justify-between pl-2 pr-4 py-2 w-full h-12">
      <Link href="/" className="flex flex-row items-center gap-2 text-2xl font-semibold">
        <svg
          className="w-8 h-8"
          viewBox="0 0 23 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m16 16 6-6-6-6" stroke="black"></path>
        </svg>
        Pawn
      </Link>
      <div className="flex flex-row items-center gap-2 px-2">
        <Button asChild variant="link">
          <Link href="/datasets" className="px-2">
            Datasets
          </Link>
        </Button>
        <Link
          href="https://github.com/zzakiullah/xpawn-table-search"
          target="_blank"
          className="text-xl px-2"
          aria-label="GitHub"
        >
          <FiGithub />
        </Link>
        <Link href="https://xpawn.ai" target="_blank" className="text-xl px-2" aria-label="Website">
          <FiGlobe />
        </Link>
      </div>
    </header>
  );
}
