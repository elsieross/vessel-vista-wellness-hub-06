import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Camera, BarChart3, Users, TrendingUp, Zap, Timer, Heart, Award } from "lucide-react";
import avraLogo from "@/assets/avra-logo.png";

export default function OptimizePerformance() {
  const [vpqScore] = useState(87);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <img src={avraLogo} alt="AVRA" className="h-8 w-auto" />
              <span className="text-lg font-semibold">Optimize Performance</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              UNLOCK YOUR VASCULAR EDGE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The hidden factor behind endurance, explosive power, and faster recovery
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              <Zap className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* VPQ Score Display */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-background/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Your Vascular Performance Quotient</CardTitle>
                <CardDescription className="text-lg">
                  A composite score showing how well your circulatory system performs under stress and recovers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-48 h-48 rounded-full border-8 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/20">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary">{vpqScore}</div>
                      <Badge variant="secondary" className="mt-2 bg-green-500/20 text-green-700 border-green-500/30">
                        Optimal
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Endurance Performance</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-700">Good</Badge>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Recovery Optimization</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-700">Good</Badge>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Heart Rate Recovery</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-700">Excellent</Badge>
                    </div>
                    <div className="text-2xl font-bold">1:30</div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Insights</h3>
                  <p className="text-muted-foreground">
                    Your vascular system recovered 28% faster than last week. Keep up the excellent work!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="analysis" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="analysis" className="flex items-center space-x-2">
                  <Camera className="h-4 w-4" />
                  <span>Leg Scan Analysis</span>
                </TabsTrigger>
                <TabsTrigger value="tracking" className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>VPQ Score Tracking</span>
                </TabsTrigger>
                <TabsTrigger value="tips" className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Personalized Tips</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="analysis" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Camera className="h-5 w-5" />
                      <span>AI Leg Scan Analysis</span>
                    </CardTitle>
                    <CardDescription>
                      AI evaluates blood flow and willing through photo analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold">Pre/Post Exercise Analysis</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Capillary refill assessment</li>
                          <li>• Swelling detection and measurement</li>
                          <li>• Color changes indicating blood flow</li>
                          <li>• Recovery time estimation</li>
                        </ul>
                      </div>
                      <div className="flex items-center justify-center bg-muted/30 rounded-lg p-8">
                        <div className="text-center">
                          <Camera className="h-12 w-12 mx-auto mb-4 text-primary" />
                          <p className="text-sm text-muted-foreground">Upload leg photos for AI analysis</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Camera className="mr-2 h-4 w-4" />
                      Start Leg Scan
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tracking" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>VPQ Score Tracking</span>
                    </CardTitle>
                    <CardDescription>
                      Monitor your vascular performance over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="border-primary/20">
                        <CardContent className="p-4 text-center">
                          <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
                          <div className="text-2xl font-bold">+12%</div>
                          <p className="text-sm text-muted-foreground">This Week</p>
                        </CardContent>
                      </Card>
                      <Card className="border-primary/20">
                        <CardContent className="p-4 text-center">
                          <Timer className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                          <div className="text-2xl font-bold">1:45</div>
                          <p className="text-sm text-muted-foreground">Avg Recovery</p>
                        </CardContent>
                      </Card>
                      <Card className="border-primary/20">
                        <CardContent className="p-4 text-center">
                          <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
                          <div className="text-2xl font-bold">92%</div>
                          <p className="text-sm text-muted-foreground">HR Recovery</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="font-semibold mb-4">Performance Insights</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Endurance Blood Flow Score</span>
                          <Badge variant="secondary">Improving</Badge>
                        </div>
                        <Progress value={78} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          Your endurance performance has improved by 15% over the past month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tips" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Personalized Tips</span>
                    </CardTitle>
                    <CardDescription>
                      Boost circulation and recovery with AI-powered recommendations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                        <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Compression Optimization</h4>
                          <p className="text-sm text-muted-foreground">
                            Wear 15-20 mmHg compression socks during your next long run to improve blood flow efficiency
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                        <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Recovery Protocol</h4>
                          <p className="text-sm text-muted-foreground">
                            Based on your VPQ score, try cold therapy for 10-15 minutes post-workout
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                        <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Nutrition Support</h4>
                          <p className="text-sm text-muted-foreground">
                            Consider nitric oxide supplements 30 minutes before training for enhanced blood flow
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Unlock Your Vascular Edge?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join elite athletes who trust AVRA for peak performance and faster recovery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
                Start VPQ Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}