"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Palette,
  Code,
  Star,
  Trophy,
  Clock,
  CheckCircle2,
  Play,
  Lock,
  Sparkles,
  TrendingUp,
  BookOpen,
  Zap
} from "lucide-react";

export default function DashboardPage() {
  const activities = [
    {
      id: 1,
      title: "AI Art Generator",
      description: "Create amazing artwork using AI prompts",
      icon: Palette,
      progress: 75,
      category: "AI Art",
      difficulty: "Beginner",
      duration: "30 min",
      status: "in-progress",
      color: "text-purple-500"
    },
    {
      id: 2,
      title: "Build Your First Chatbot",
      description: "Learn how AI understands and responds to questions",
      icon: Brain,
      progress: 100,
      category: "Conversational AI",
      difficulty: "Beginner",
      duration: "45 min",
      status: "completed",
      color: "text-blue-500"
    },
    {
      id: 3,
      title: "Code a Simple Game",
      description: "Use AI to help you create an interactive game",
      icon: Code,
      progress: 30,
      category: "Coding",
      difficulty: "Intermediate",
      duration: "60 min",
      status: "in-progress",
      color: "text-green-500"
    },
    {
      id: 4,
      title: "Music Composer AI",
      description: "Compose melodies with AI assistance",
      icon: Sparkles,
      progress: 0,
      category: "Creative AI",
      difficulty: "Beginner",
      duration: "40 min",
      status: "locked",
      color: "text-pink-500"
    },
    {
      id: 5,
      title: "Story Writing with AI",
      description: "Co-create stories with an AI writing partner",
      icon: BookOpen,
      progress: 0,
      category: "Creative AI",
      difficulty: "Beginner",
      duration: "35 min",
      status: "locked",
      color: "text-orange-500"
    },
    {
      id: 6,
      title: "AI Image Recognition",
      description: "Train AI to recognize objects in photos",
      icon: Zap,
      progress: 0,
      category: "Machine Learning",
      difficulty: "Advanced",
      duration: "50 min",
      status: "locked",
      color: "text-cyan-500"
    },
  ];

  const achievements = [
    { title: "First Steps", description: "Completed first activity", icon: Star, earned: true },
    { title: "AI Artist", description: "Completed 5 art projects", icon: Palette, earned: true },
    { title: "Code Master", description: "Built 3 programs", icon: Code, earned: false },
    { title: "Creative Genius", description: "Earned 10 badges", icon: Trophy, earned: false },
  ];

  return (
    <div className="min-h-screen py-8 px-6 md:px-10">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                ES
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Emma!</h1>
              <p className="text-muted-foreground">Let's continue your AI learning journey</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Trophy className="w-4 h-4 mr-2" />
              Achievements
            </Button>
            <Button>Continue Learning</Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activities Completed</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250</div>
              <p className="text-xs text-muted-foreground">Top 10% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Learning</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.5h</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="activities" className="space-y-6">
          <TabsList>
            <TabsTrigger value="activities">My Activities</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Learning Activities</h2>
                <p className="text-muted-foreground">Continue where you left off or start something new</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity) => (
                <Card key={activity.id} className={activity.status === "locked" ? "opacity-60" : ""}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${activity.color}`}>
                        <activity.icon className="w-6 h-6" />
                      </div>
                      {activity.status === "completed" && (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Done
                        </Badge>
                      )}
                      {activity.status === "locked" && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          <Lock className="w-3 h-3 mr-1" />
                          Locked
                        </Badge>
                      )}
                      {activity.status === "in-progress" && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          In Progress
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="mt-4">{activity.title}</CardTitle>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {activity.duration}
                      </span>
                      <Badge variant="outline">{activity.difficulty}</Badge>
                    </div>

                    {activity.status !== "locked" && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{activity.progress}%</span>
                        </div>
                        <Progress value={activity.progress} />
                      </div>
                    )}

                    <Button
                      className="w-full"
                      variant={activity.status === "locked" ? "outline" : "default"}
                      disabled={activity.status === "locked"}
                    >
                      {activity.status === "locked" && <Lock className="w-4 h-4 mr-2" />}
                      {activity.status === "completed" && "Review"}
                      {activity.status === "in-progress" && (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Continue
                        </>
                      )}
                      {activity.status === "locked" && "Complete previous activities"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Track your progress across different AI topics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Palette className="w-5 h-5 text-purple-500" />
                        <span className="font-medium">AI Art & Creativity</span>
                      </div>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">Conversational AI</span>
                      </div>
                      <span className="text-sm text-muted-foreground">100%</span>
                    </div>
                    <Progress value={100} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Coding with AI</span>
                      </div>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-pink-500" />
                        <span className="font-medium">Creative AI Projects</span>
                      </div>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </div>
                    <Progress value={25} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-cyan-500" />
                        <span className="font-medium">Machine Learning Basics</span>
                      </div>
                      <span className="text-sm text-muted-foreground">10%</span>
                    </div>
                    <Progress value={10} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Your learning activity over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-48 text-muted-foreground">
                  <div className="text-center space-y-2">
                    <TrendingUp className="w-12 h-12 mx-auto" />
                    <p>Activity chart coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Unlock badges as you learn and explore AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-lg border ${
                        achievement.earned ? "bg-primary/5 border-primary/20" : "bg-muted/30"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.earned ? "bg-primary/10 text-primary" : "bg-muted"
                      }`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{achievement.title}</h3>
                          {achievement.earned && (
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


