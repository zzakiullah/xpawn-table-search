import Link from "next/link";
import { FiGithub, FiGlobe, FiArrowRight, FiUpload } from "react-icons/fi";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center gap-4 w-full min-h-screen">
      <header className="flex flex-row items-center justify-between pl-2 pr-4 py-2 w-full">
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
          <Link
            href="https://github.com/zzakiullah/xpawn-table-search"
            target="_blank"
            className="text-xl px-2"
            aria-label="GitHub"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://xpawn.ai"
            target="_blank"
            className="text-xl px-2"
            aria-label="Website"
          >
            <FiGlobe />
          </Link>
        </div>
      </header>
      <main className="flex flex-col w-full items-center justify-center gap-4 grow">
        <h1 className="text-5xl font-bold">Dynamic Multi-Table Search</h1>
        <p className="text-lg">Look through existing datasets or upload your own.</p>
        <div className="flex flex-row gap-2">
          <Button asChild>
            <Link href="/datasets">
              View Datasets
              <FiArrowRight />
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <div className="cursor-pointer">
              <label htmlFor="files" className="cursor-pointer">
                Upload File
              </label>
              <input id="files" type="file" accept=".csv" className="hidden"></input>
              <FiUpload />
            </div>
          </Button>
        </div>
      </main>
      <footer className="flex flex-col items-center justify-center w-full py-2">
        <small>&copy; 2025 Zulaikha Zakiullah</small>
      </footer>
    </div>
  );
}
