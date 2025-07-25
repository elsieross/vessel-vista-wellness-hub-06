import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertCircle, Clock, Shield, Camera, Package, History, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { WoundUploadDialog } from "@/components/WoundUploadDialog";
import { WoundAssessmentResults } from "@/components/WoundAssessmentResults";

const Wounds = () => {
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [assessmentResults, setAssessmentResults] = useState<any>(null);

  const handleUploadComplete = (imageUrl: string, analysisData?: any) => {
    setUploadedImageUrl(imageUrl);
    setAssessmentResults(analysisData);
    setAssessmentCompleted(true);
  };
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
              <h1 className="text-3xl font-bold text-foreground">Wound Care</h1>
              <p className="text-muted-foreground">Professional wound assessment and care guidance</p>
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
            {/* Show assessment results if completed */}
            {assessmentCompleted && assessmentResults && uploadedImageUrl ? (
              <WoundAssessmentResults 
                analysisData={assessmentResults}
                imageUrl={uploadedImageUrl}
              />
            ) : (
              <div className={`grid gap-6 ${assessmentCompleted ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-md mx-auto'}`}>
          
          {/* Assessment Card */}
          <Card className="shadow-sm border border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-medical-primary/10 rounded-lg">
                   <Camera className="h-6 w-6 text-medical-primary" />
                 </div>
                 <div>
                   <CardTitle className="text-lg">Wound AI Assessment</CardTitle>
                   <CardDescription>AI-powered wound evaluation and recommendations</CardDescription>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
               <p className="text-sm text-muted-foreground">
                 Upload a photo and get AI-powered analysis of wound characteristics, severity, and personalized care recommendations.
               </p>
               <Button 
                 variant="medical" 
                 className="w-full"
                 onClick={() => setUploadDialogOpen(true)}
               >
                 Start AI Assessment
               </Button>
            </CardContent>
          </Card>

          {/* Care Instructions - Only show after assessment */}
          {assessmentCompleted && (
            <Card className="shadow-sm border border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-medical-success/10 rounded-lg">
                    <Shield className="h-6 w-6 text-medical-success" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Care Instructions</CardTitle>
                    <CardDescription>Personalized wound care protocols</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Follow these customized cleaning, dressing, and monitoring techniques based on your assessment.
                </p>
                <Button variant="medical-outline" className="w-full">
                  View Your Care Plan
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Healing Timeline - Only show after assessment */}
          {assessmentCompleted && (
            <Card className="shadow-sm border border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-medical-secondary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-medical-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Healing Timeline</CardTitle>
                    <CardDescription>Track your recovery progress and milestones</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Monitor healing stages and receive alerts for when to seek additional medical attention.
                </p>
                <Button variant="medical-outline" className="w-full">
                  Track Your Progress
                </Button>
              </CardContent>
            </Card>
          )}

            </div>
            )}
          </TabsContent>

          <TabsContent value="supplements" className="mt-8">
            <div className="text-center py-12">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">BioEssential Subscription</h3>
              <p className="text-muted-foreground">Track your orders and delivery status</p>
            </div>
          </TabsContent>

          <TabsContent value="ai-history" className="mt-8">
            <div className="text-center py-12">
              <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Assessment History</h3>
              <p className="text-muted-foreground">View your previous AI-powered wound assessments</p>
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

        {/* Pricing Section */}
        <div className="mt-12 bg-gradient-to-br from-medical-primary/5 to-medical-secondary/5 rounded-lg p-8 border border-medical-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Service Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your wound care needs. All services include AI-powered assessment and professional guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* One-time AI Assessment */}
            <Card className="relative border-2 border-border hover:border-medical-primary/30 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">AI Assessment</CardTitle>
                <div className="text-3xl font-bold text-medical-primary mb-2">$29</div>
                <CardDescription>One-time evaluation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    AI wound analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Care recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Progress tracking
                  </li>
                </ul>
                <Button variant="medical-outline" className="w-full">
                  Get Assessment
                </Button>
              </CardContent>
            </Card>

            {/* Bundle Package */}
            <Card className="relative border-2 border-medical-primary bg-medical-primary/5">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-medical-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">Care Bundle</CardTitle>
                <div className="text-3xl font-bold text-medical-primary mb-2">$89</div>
                <CardDescription>Complete care package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    3 AI assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    BioEssentials delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    30-day monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Email support
                  </li>
                </ul>
                <Button variant="medical" className="w-full">
                  Choose Bundle
                </Button>
              </CardContent>
            </Card>

            {/* Telehealth Consultation */}
            <Card className="relative border-2 border-border hover:border-medical-primary/30 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">Telehealth</CardTitle>
                <div className="text-3xl font-bold text-medical-primary mb-2">$75</div>
                <CardDescription>Expert consultation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    30-min video call
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Professional review
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Treatment plan
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Follow-up notes
                  </li>
                </ul>
                <Button variant="medical-outline" className="w-full">
                  Book Session
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Access */}
            <Card className="relative border-2 border-border hover:border-medical-primary/30 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">Monthly Plan</CardTitle>
                <div className="text-3xl font-bold text-medical-primary mb-2">$39</div>
                <CardDescription>Ongoing support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Unlimited assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Progress reports
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Telehealth discount
                  </li>
                </ul>
                <Button variant="medical-outline" className="w-full">
                  Start Plan
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              All prices are in USD. Cancel anytime for monthly plans. 
              <span className="text-medical-primary font-medium"> 30-day money-back guarantee.</span>
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-medical-light rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">When to Seek Medical Attention</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2 text-foreground">Immediate Care Needed:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Signs of infection (increased redness, warmth, swelling)</li>
                <li>• Fever or chills</li>
                <li>• Wound not healing after 2-3 weeks</li>
                <li>• Increasing pain or unusual drainage</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2 text-foreground">Emergency Signs:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Red streaking from the wound</li>
                <li>• Severe bleeding that won't stop</li>
                <li>• Deep wounds exposing bone or tendon</li>
                <li>• Signs of severe infection</li>
              </ul>
            </div>
          </div>
        </div>
        
        <WoundUploadDialog
          open={uploadDialogOpen}
          onOpenChange={setUploadDialogOpen}
          onUploadComplete={handleUploadComplete}
        />
      </div>
    </div>
  );
};

export default Wounds;