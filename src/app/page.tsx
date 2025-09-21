import Link from "next/link";
import { FiArrowRight, FiUpload } from "react-icons/fi";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center gap-4 w-full h-minus-header">
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
