import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Camera, Brain, Package, Dumbbell, ShoppingCart, ArrowLeft, Pill } from "lucide-react";
import { Link } from "react-router-dom";
import avraLogo from "@/assets/avra-logo-vascular.png";

const Athletes = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-medical-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/" className="h-16 w-16 rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 p-2 hover-scale">
                <img src={avraLogo} alt="Avra Logo" className="w-full h-full object-contain" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">Athletes</h1>
                <p className="text-sm text-muted-foreground">Vascular Wellness for Peak Performance</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-primary/5 via-background to-medical-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Train Your Legs.<br />
              <span className="text-medical-primary">Heal Them Smarter.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
              Optimize circulation and recovery after workouts.
            </p>
            
            <div className="space-y-6 mb-12 max-w-2xl mx-auto text-left">
              <div className="flex items-center gap-4 text-lg">
                <div className="w-6 h-6 bg-medical-success rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground font-medium">Track swelling and inflammation</span>
              </div>
              
              <div className="flex items-center gap-4 text-lg">
                <div className="w-6 h-6 bg-medical-success rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground font-medium">Get personalized recovery tips</span>
              </div>
              
              <div className="flex items-center gap-4 text-lg">
                <div className="w-6 h-6 bg-medical-success rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-foreground font-medium">Monitor your compression use</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-medical-primary hover:bg-medical-primary/90 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('athlete-tabs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="athlete-tabs" className="container mx-auto px-4 py-16">
        <Tabs defaultValue="photo-tracker" className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-6xl mx-auto mb-12 overflow-x-auto">
            <TabsTrigger value="photo-tracker">📸 Photo Tracker</TabsTrigger>
            <TabsTrigger value="ai-scoring">🧠 AI Risk Scoring</TabsTrigger>
            <TabsTrigger value="compression">🧦 Compression</TabsTrigger>
            <TabsTrigger value="workout">🏋️ Workout Integration</TabsTrigger>
            <TabsTrigger value="supplements"><Pill className="h-4 w-4 inline mr-1" /> BioEssentials</TabsTrigger>
          </TabsList>

          <TabsContent value="photo-tracker" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">📸 Leg Photo Tracker</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Monitor swelling, discoloration, recovery over time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-medical-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Camera className="h-6 w-6 text-medical-primary" />
                  </div>
                  <CardTitle className="text-medical-primary">Daily Progress Photos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Take standardized photos to track changes in leg appearance, swelling patterns, and recovery progress.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Consistent lighting and positioning</li>
                    <li>• Automated swelling detection</li>
                    <li>• Side-by-side comparison tools</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full">
                    Start Photo Session
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-medical-secondary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <Camera className="h-6 w-6 text-medical-secondary" />
                  </div>
                  <CardTitle className="text-medical-secondary">Progress Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Advanced image analysis to quantify changes and correlate with training load.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Volume change measurements</li>
                    <li>• Color pattern analysis</li>
                    <li>• Recovery timeline tracking</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full border-medical-secondary text-medical-secondary hover:bg-medical-secondary">
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-scoring" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">🧠 AI Vein or Inflammation Risk Scoring</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Rate areas of concern post-training (e.g. CVI, spider veins)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-medical-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Brain className="h-6 w-6 text-medical-primary" />
                  </div>
                  <CardTitle className="text-medical-primary">Intelligent Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AI-powered analysis of vascular patterns and inflammation markers specific to athletic stress.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• CVI risk evaluation</li>
                    <li>• Spider vein detection</li>
                    <li>• Inflammation scoring</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full">
                    Run Assessment
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-medical-warning/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-warning/10 rounded-lg flex items-center justify-center mb-2">
                    <Brain className="h-6 w-6 text-medical-warning" />
                  </div>
                  <CardTitle className="text-medical-warning">Risk Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Personalized recommendations based on your training load and vascular health patterns.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Early warning system</li>
                    <li>• Training adjustment alerts</li>
                    <li>• Recovery recommendations</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full border-medical-warning text-medical-warning hover:bg-medical-warning">
                    View Recommendations
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compression" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">🧦 Compression Use Tracker</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Logs when athlete uses compression gear + recommendations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-medical-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Package className="h-6 w-6 text-medical-primary" />
                  </div>
                  <CardTitle className="text-medical-primary">Usage Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Monitor compression garment usage patterns and effectiveness for your specific training routine.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Daily wear duration</li>
                    <li>• Compression level tracking</li>
                    <li>• Usage pattern analysis</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full">
                    Log Usage
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-medical-secondary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <Package className="h-6 w-6 text-medical-secondary" />
                  </div>
                  <CardTitle className="text-medical-secondary">Personalized Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get tailored compression therapy recommendations based on your sport and training schedule.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Optimal compression levels</li>
                    <li>• Timing recommendations</li>
                    <li>• Product suggestions</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full border-medical-secondary text-medical-secondary hover:bg-medical-secondary">
                    Get Recommendations
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="workout" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">🏋️ Workout Integration</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Syncs with Strava/Apple Health to correlate hard training with leg symptoms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-medical-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Dumbbell className="h-6 w-6 text-medical-primary" />
                  </div>
                  <CardTitle className="text-medical-primary">Platform Sync</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Connect with your favorite fitness platforms to automatically track training load and intensity.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Strava integration</li>
                    <li>• Apple Health sync</li>
                    <li>• Garmin connectivity</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full">
                    Connect Apps
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-medical-secondary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <Dumbbell className="h-6 w-6 text-medical-secondary" />
                  </div>
                  <CardTitle className="text-medical-secondary">Correlation Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Identify patterns between training intensity and vascular symptoms to optimize performance.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Training load vs symptoms</li>
                    <li>• Recovery time analysis</li>
                    <li>• Performance optimization</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full border-medical-secondary text-medical-secondary hover:bg-medical-secondary">
                    View Insights
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="supplements" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4"><Pill className="h-6 w-6 inline mr-2" /> BioEssentials / Recovery Kit Reorders</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Seamless, athlete-specific ordering of recovery tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-medical-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <ShoppingCart className="h-6 w-6 text-medical-primary" />
                  </div>
                  <CardTitle className="text-medical-primary">Auto-Reorder System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Never run out of essential recovery products with intelligent reorder predictions.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Usage-based predictions</li>
                    <li>• Automatic ordering</li>
                    <li>• Inventory management</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full">
                    Set Up Auto-Order
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-medical-secondary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <ShoppingCart className="h-6 w-6 text-medical-secondary" />
                  </div>
                  <CardTitle className="text-medical-secondary">Athlete-Specific Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Curated selection of vascular wellness products specifically chosen for athletic performance.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Performance-tested products</li>
                    <li>• Sport-specific recommendations</li>
                    <li>• Bulk athlete pricing</li>
                  </ul>
                  <Button variant="medical-outline" className="w-full border-medical-secondary text-medical-secondary hover:bg-medical-secondary">
                    Browse Products
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="bg-medical-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Unlock Your Potential?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join elite athletes who have made vascular wellness their competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="medical-outline" className="bg-medical-primary text-white border-medical-primary hover:bg-medical-primary/90">
              Start Assessment
            </Button>
            <Button size="lg" variant="ghost" className="border border-border hover:bg-muted">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Athletes;