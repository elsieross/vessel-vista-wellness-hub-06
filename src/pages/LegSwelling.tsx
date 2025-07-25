import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, TrendingUp, Calendar, Stethoscope, Camera, Package, History, Video } from "lucide-react";
import { Link } from "react-router-dom";

const LegSwelling = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-medical-card border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Leg Swelling</h1>
              <p className="text-muted-foreground">Understanding and managing edema and swelling</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="photo-log" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-14 bg-medical-card border border-border rounded-lg p-1 mb-8">
            <TabsTrigger 
              value="photo-log" 
              className="flex items-center gap-2 h-12 text-sm font-medium data-[state=active]:bg-medical-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:bg-medical-primary/10"
            >
              <Camera className="h-5 w-5" />
              <span className="hidden sm:inline">Your Photo Log</span>
              <span className="sm:hidden">Photos</span>
            </TabsTrigger>
            <TabsTrigger 
              value="supplements" 
              className="flex items-center gap-2 h-12 text-sm font-medium data-[state=active]:bg-medical-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:bg-medical-primary/10"
            >
              <Package className="h-5 w-5" />
              <span className="hidden sm:inline">BioEssentials Subscription</span>
              <span className="sm:hidden">BioEssentials</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ai-history" 
              className="flex items-center gap-2 h-12 text-sm font-medium data-[state=active]:bg-medical-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:bg-medical-primary/10"
            >
              <History className="h-5 w-5" />
              <span className="hidden sm:inline">AI Assessment History</span>
              <span className="sm:hidden">AI History</span>
            </TabsTrigger>
            <TabsTrigger 
              value="telehealth" 
              className="flex items-center gap-2 h-12 text-sm font-medium data-[state=active]:bg-medical-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:bg-medical-primary/10"
            >
              <Video className="h-5 w-5" />
              <span className="hidden sm:inline">Book Telehealth</span>
              <span className="sm:hidden">Telehealth</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photo-log" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Swelling Assessment */}
          <Card className="shadow-sm border border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-medical-primary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-medical-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Swelling Assessment</CardTitle>
                  <CardDescription>Evaluate severity and type of swelling</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Assess swelling patterns, severity, and potential underlying causes.
              </p>
              <Button variant="medical" className="w-full">
                Start Assessment
              </Button>
            </CardContent>
          </Card>

          {/* Symptom Tracking */}
          <Card className="shadow-sm border border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-medical-success/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-medical-success" />
                </div>
                <div>
                  <CardTitle className="text-lg">Symptom Tracking</CardTitle>
                  <CardDescription>Monitor swelling patterns over time</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Track daily symptoms, triggers, and improvement patterns.
              </p>
              <Button variant="medical-outline" className="w-full">
                Track Symptoms
              </Button>
            </CardContent>
          </Card>

          {/* Medical Guidance */}
          <Card className="shadow-sm border border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-medical-secondary/10 rounded-lg">
                  <Stethoscope className="h-6 w-6 text-medical-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Medical Guidance</CardTitle>
                  <CardDescription>When to seek professional care</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Learn when swelling requires immediate or routine medical attention.
              </p>
              <Button variant="medical-outline" className="w-full">
                View Guidelines
              </Button>
            </CardContent>
          </Card>

            </div>
          </TabsContent>

          <TabsContent value="supplements" className="mt-8">
            <div className="text-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">BioEssentials Subscription</h3>
              <p className="text-muted-foreground">Track your orders and delivery status</p>
            </div>
          </TabsContent>

          <TabsContent value="ai-history" className="mt-8">
            <div className="text-center py-12">
              <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Assessment History</h3>
              <p className="text-muted-foreground">View your previous AI-powered leg swelling assessments</p>
            </div>
          </TabsContent>

          <TabsContent value="telehealth" className="mt-8">
            <div className="text-center py-12">
              <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Book Telehealth</h3>
              <p className="text-muted-foreground mb-4">Schedule a virtual consultation with our specialists</p>
              <Button variant="medical">Schedule Appointment</Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Detailed Information */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Causes Section */}
          <div className="bg-medical-light rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Common Causes of Leg Swelling</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-medical-primary pl-4">
                <h3 className="font-medium text-foreground">Venous Insufficiency</h3>
                <p className="text-sm text-muted-foreground">Poor circulation due to weakened vein valves</p>
              </div>
              <div className="border-l-4 border-medical-secondary pl-4">
                <h3 className="font-medium text-foreground">Heart Conditions</h3>
                <p className="text-sm text-muted-foreground">Heart failure or other cardiac issues</p>
              </div>
              <div className="border-l-4 border-medical-success pl-4">
                <h3 className="font-medium text-foreground">Kidney Issues</h3>
                <p className="text-sm text-muted-foreground">Fluid retention due to kidney dysfunction</p>
              </div>
              <div className="border-l-4 border-medical-warning pl-4">
                <h3 className="font-medium text-foreground">Medications</h3>
                <p className="text-sm text-muted-foreground">Side effects from certain medications</p>
              </div>
            </div>
          </div>

          {/* Management Strategies */}
          <div className="bg-medical-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Management Strategies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-foreground">Immediate Relief:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Elevate legs above heart level</li>
                  <li>• Apply gentle compression</li>
                  <li>• Reduce sodium intake</li>
                  <li>• Stay hydrated</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-foreground">Long-term Care:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Regular exercise and movement</li>
                  <li>• Compression stockings as advised</li>
                  <li>• Weight management</li>
                  <li>• Follow prescribed treatments</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Emergency Warning */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Seek Immediate Medical Attention If:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Sudden, severe swelling</li>
              <li>• Difficulty breathing</li>
              <li>• Chest pain or palpitations</li>
            </ul>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Signs of blood clot (warmth, redness)</li>
              <li>• Skin changes or ulcers</li>
              <li>• Severe or persistent pain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegSwelling;