"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, Sparkles, Users, Palette, Code, Brain, Star, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-10 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-6xl">
          {/* Notification Badge */}
          <div className="flex justify-center mb-8 fade-in">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-normal rounded-full">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Now Accepting Applications — Limited Spots
            </Badge>
          </div>

          {/* Hero Title */}
          <div ref={heroRef} className="text-center mb-12 fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="inline-block">Playful</span>{" "}
              <span className="inline-flex items-center gap-4">
                <span className="relative inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl md:rounded-3xl shadow-lg transform -rotate-3">
                  <Sparkles className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />
                </span>
                <span className="font-light text-muted-foreground">AI</span>
              </span>
              <br />
              <span className="font-light text-muted-foreground">Learning for</span>{" "}
              <span className="inline-flex items-center gap-4">
                <span className="relative inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl md:rounded-3xl shadow-lg transform rotate-3">
                  <Brain className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />
                </span>
                <span className="inline-block">Young</span>
              </span>
              <br />
              <span className="inline-block">Minds</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              We help kids discover the magic of AI through creative play, hands-on projects,
              and safe exploration — making technology education fun and accessible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/application">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full group">
                  Start Learning Today
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full">
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex -space-x-3">
                {["SJ", "MP", "EL", "DM", "RC"].map((initials, i) => (
                  <Avatar key={i} className="border-2 border-background w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-foreground">200+</span> families and educators
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-3 fade-in">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 animate-float">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-lg">Creative Activities</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                Hands-on projects that introduce core AI concepts through art and creativity
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3 animate-float" style={{ animationDelay: '0.2s' }}>
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-lg">Guided Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                Short, engaging steps designed specifically for young learners
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 animate-float" style={{ animationDelay: '0.4s' }}>
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-lg">AI-Powered</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">
                Learn by doing with real AI tools in safe, supervised environments
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">Features</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Everything Your Child{" "}
              <span className="gradient-text">Needs to Thrive</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Yoof combines creativity, technology, and education to make AI learning
              fun and accessible for all ages
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 fade-in">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI Art & Creativity</CardTitle>
                <CardDescription>
                  Explore text-to-image tools and learn how AI interprets creative ideas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Draw and compare with AI-generated art</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Understand how AI sees the world</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Create unique digital masterpieces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Coding & Programming</CardTitle>
                <CardDescription>
                  Introduction to code generation and building simple programs with AI assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Create simple games and animations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Learn programming fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Modify AI-generated code</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Critical Thinking</CardTitle>
                <CardDescription>
                  Develop analytical skills through AI interaction and experimentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Question how AI makes decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Understand AI limitations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Practice ethical AI use</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Collaborative Learning</CardTitle>
                <CardDescription>
                  Work together on projects and share discoveries with peers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Group activities and challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Share and discuss creations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Learn from each other</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Safe Environment</CardTitle>
                <CardDescription>
                  Parent-approved AI tools with built-in safeguards and supervision
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Age-appropriate content filters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Parent dashboard and monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Privacy-first approach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Monitor growth and celebrate achievements along the learning journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Skill badges and milestones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Portfolio of completed projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>Personalized learning paths</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="px-6 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What parents and educators say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from families who&apos;ve discovered the joy of AI learning with Yoof
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Sarah Johnson</CardTitle>
                    <p className="text-sm text-muted-foreground">Parent of two</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;My kids absolutely love the AI art activities! They&apos;re learning about technology while expressing their creativity. It&apos;s the perfect blend of education and fun.&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">MP</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Marcus Peters</CardTitle>
                    <p className="text-sm text-muted-foreground">Primary School Teacher</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;Yoof has transformed how I teach digital literacy in my classroom. The hands-on approach makes complex AI concepts accessible to young learners.&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">EL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Emma Liu</CardTitle>
                    <p className="text-sm text-muted-foreground">Home Educator</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;The structured curriculum and safe environment give me peace of mind. My son has developed critical thinking skills I never expected at his age.&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">DM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">David Martinez</CardTitle>
                    <p className="text-sm text-muted-foreground">Parent & Software Engineer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;As someone in tech, I wanted my daughter to understand AI early. Yoof makes it approachable without dumbing down the concepts. Brilliant resource!&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">RC</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Rachel Cooper</CardTitle>
                    <p className="text-sm text-muted-foreground">Secondary School Teacher</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;The coding activities are engaging and age-appropriate. Students who were intimidated by programming are now creating their own projects confidently.&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">JW</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">James Wilson</CardTitle>
                    <p className="text-sm text-muted-foreground">Parent of three</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;Yoof keeps all three of my kids engaged, each at their own level. The progress tracking helps me see how much they&apos;re actually learning while having fun.&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section className="px-6 py-14 md:px-10 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose the right plan for your family
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible options to fit every learning journey. Start with a free trial today.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for trying out Yoof</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">Free</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Access to 5 basic activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>1 child profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Community support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Progress tracking</span>
                  </li>
                </ul>
                <Link href="/application">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge>Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Family</CardTitle>
                <CardDescription>For families serious about learning</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">£19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Unlimited activities & projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Up to 3 child profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Priority email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Advanced progress analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Downloadable certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Monthly live Q&A sessions</span>
                  </li>
                </ul>
                <Link href="/application">
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Classroom</CardTitle>
                <CardDescription>Designed for educators</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">£49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Everything in Family, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Up to 30 student profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Classroom management tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Lesson plans & curriculum guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Bulk student reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Link href="/application">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Final CTA Section */}
      <section className="px-6 py-14 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to start your AI learning adventure?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of families and educators who are preparing the next generation for an AI-powered future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/application">
              <Button size="lg" className="text-base">
                Apply Now
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-base">
                Explore Demo
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Questions? Email us at{" "}
            <a href="mailto:hello@yoofai.co.uk" className="text-primary hover:underline">
              hello@yoofai.co.uk
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
