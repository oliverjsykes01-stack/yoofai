import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="font-semibold">Yoof</h3>
            <p className="text-sm text-muted-foreground">
              Teaching kids AI through creative play and hands-on activities.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Explore</h4>
            <div className="space-y-2">
              <Link href="/dashboard" className="block text-sm text-muted-foreground hover:text-foreground">
                Component Showcase
              </Link>
              <Link href="/application" className="block text-sm text-muted-foreground hover:text-foreground">
                Demo App
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Resources</h4>
            <div className="space-y-2">
              <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:text-foreground">
                shadcn/ui
              </a>
              <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:text-foreground">
                Next.js
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium">Connect</h4>
            <div className="space-y-2">
              <a href="https://github.com/oliverjsykes01-stack/yoofai" target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:text-foreground">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Yoof. Built with Next.js and shadcn/ui.</p>
        </div>
      </div>
    </footer>
  );
}
