"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-6 md:p-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Component Showcase</h1>
        <Link href="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>

      <Tabs defaultValue="ui" className="space-y-4">
        <TabsList>
          <TabsTrigger value="ui">UI</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
        </TabsList>
        <TabsContent value="ui" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-3 flex-wrap">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="forms">
          <Card>
            <CardHeader>
              <CardTitle>Coming soon</CardTitle>
            </CardHeader>
            <CardContent>
              Explore more components at ui.shadcn.com/docs/components
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}


