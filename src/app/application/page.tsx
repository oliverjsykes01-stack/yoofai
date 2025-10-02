"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function ApplicationPage() {
  const [artPrompt, setArtPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleArtPrompt = async () => {
    if (!artPrompt.trim()) return;
    
    setIsLoading(true);
    // Simulate AI response for demo
    setTimeout(() => {
      setAiResponse(`Great idea! Here's how to turn "${artPrompt}" into a fun AI art project:

1. **Gather Materials**: Paper, crayons, markers, or digital drawing tools
2. **AI Tool**: Use DALL-E or Midjourney to generate variations
3. **Learning Goal**: Understand how AI interprets text and creates images
4. **Activity**: Draw your own version, then compare with AI-generated art
5. **Discussion**: What's similar? What's different? Why might AI see things differently?

This teaches kids about:
- How AI "sees" and interprets descriptions
- The difference between human and AI creativity
- The importance of clear communication with technology`);
      setIsLoading(false);
    }, 2000);
  };

  const aiTools = [
    { name: "Text to Image", description: "Turn words into pictures", difficulty: "Easy", color: "bg-blue-100 text-blue-800" },
    { name: "Chat Assistant", description: "Ask questions and get answers", difficulty: "Easy", color: "bg-green-100 text-green-800" },
    { name: "Voice Recognition", description: "Talk to your computer", difficulty: "Medium", color: "bg-purple-100 text-purple-800" },
    { name: "Code Generation", description: "Create simple programs", difficulty: "Hard", color: "bg-orange-100 text-orange-800" },
  ];

  return (
    <div className="min-h-screen py-8 px-6 md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">AI Learning Playground</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how AI tools work through hands-on activities and creative projects designed for young learners.
          </p>
        </div>

        <Tabs defaultValue="art" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="art">Art & Craft</TabsTrigger>
            <TabsTrigger value="tools">AI Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="art" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create AI Art Together</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="art-prompt">What would you like to create?</Label>
                  <Input
                    id="art-prompt"
                    placeholder="A robot playing soccer, a magical castle, a friendly dragon..."
                    value={artPrompt}
                    onChange={(e) => setArtPrompt(e.target.value)}
                  />
                </div>
                <Button onClick={handleArtPrompt} disabled={isLoading || !artPrompt.trim()}>
                  {isLoading ? "Thinking..." : "Generate Learning Plan"}
                </Button>
                
                {aiResponse && (
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Your AI Learning Adventure:</h3>
                    <div className="whitespace-pre-line text-sm">{aiResponse}</div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Understand how AI interprets text</li>
                    <li>• Compare human vs AI creativity</li>
                    <li>• Practice clear communication</li>
                    <li>• Explore digital art tools</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Materials Needed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Paper and drawing supplies</li>
                    <li>• Computer or tablet</li>
                    <li>• Internet connection</li>
                    <li>• Adult supervision</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {aiTools.map((tool, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <Badge className={tool.color}>{tool.difficulty}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Try This Activity:</h4>
                      <p className="text-sm">
                        {tool.name === "Text to Image" && "Draw a picture, then describe it to an AI art tool. See how close the AI gets to your original!"}
                        {tool.name === "Chat Assistant" && "Ask the AI to help you write a story about your favorite animal. Then illustrate it!"}
                        {tool.name === "Voice Recognition" && "Record yourself reading a poem, then see if the AI can understand and repeat it back."}
                        {tool.name === "Code Generation" && "Ask the AI to create a simple game, then modify it to make it your own!"}
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Ready to Learn More?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This demo shows how Yoof makes AI learning fun and accessible. Each activity is designed to teach real concepts through play.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Full Curriculum
                  </Button>
                  <Button variant="outline" size="sm">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
