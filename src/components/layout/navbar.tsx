import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            Yoof
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost">Components</Button>
            </Link>
            <Link href="/application">
              <Button variant="ghost">Demo</Button>
            </Link>
            <a href="https://github.com/oliverjsykes01-stack/yoofai" target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm">GitHub</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
