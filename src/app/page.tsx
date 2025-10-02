import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-14 md:px-10 md:py-24">
      <section className="mx-auto max-w-5xl grid gap-10 md:gap-14">
        <div className="text-center md:text-left grid gap-6">
          <p className="text-sm text-muted-foreground tracking-wide">Welcome to</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Yoof — playful learning for the AI age</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            An interactive, SEO-friendly directory that teaches kids the basics of AI tools
            through creative play like art and craft activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/dashboard">
              <Button size="lg">View Component Showcase</Button>
            </Link>
            <a href="https://github.com/oliverjsykes01-stack/yoofai" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg">View Repository</Button>
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Creative Activities</CardTitle>
            </CardHeader>
            <CardContent>Hands-on projects that introduce core AI ideas.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Guided Learning</CardTitle>
            </CardHeader>
            <CardContent>Short, engaging steps designed for young learners.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Built with shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>Responsive, accessible components and modern theming.</CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
