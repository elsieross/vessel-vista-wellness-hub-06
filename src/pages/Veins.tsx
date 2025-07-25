import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Activity, Eye, Heart, Camera, Package, History, Video, Pill, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Veins = () => {
  return <div className="min-h-screen bg-background">
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
              <h1 className="text-3xl font-bold text-foreground">Vein Health</h1>
              <p className="text-muted-foreground">Comprehensive vascular assessment and care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="photo-log" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-14 bg-medical-card border border-border rounded-lg p-1 mb-8">
            <TabsTrigger value="photo-log" className="flex items-center gap-2 h-12 text-sm font-medium data-[state=active]:bg-medical-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:bg-medical-primary/10">
              <Camera className="h-5 w-5" />
              <span className="hidden sm:inline">Your Photo Log</span>
              <span className="sm:hidden">Photos</span>
            </TabsTrigger>
            <TabsTrigger value="supplements" className="flex items-center gap-2 h-12 text-sm font-medium data-[state=active]:bg-medical-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:bg-medical-primary/10">
              <Pill className="h-5 w-5" />
              <span className="hidden sm:inline">BioEssentials</span>
              <span className="sm:hidden">BioEssentials</span>
            </TabsTrigger>
            <TabsTrigger value="ai-history" className="flex items-center gap-2 h-12 text-sm font-medium data-[state=active]:bg-medical-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:bg-medical-primary/10">
              <History className="h-5 w-5" />
              <span className="hidden sm:inline">AI Assessment History</span>
              <span className="sm:hidden">AI History</span>
            </TabsTrigger>
            <TabsTrigger value="telehealth" className="flex items-center gap-2 h-12 text-sm font-medium data-[state=active]:bg-medical-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 hover:bg-medical-primary/10">
              <Video className="h-5 w-5" />
              <span className="hidden sm:inline">Book Telehealth</span>
              <span className="sm:hidden">Telehealth</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photo-log" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Vein Assessment */}
          <Card className="shadow-sm border border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-medical-primary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-medical-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Vein Assessment</CardTitle>
                  <CardDescription>Evaluate vein health and identify issues</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Check for varicose veins, spider veins, and other vascular conditions.
              </p>
              <div className="space-y-2">
                <Button variant="medical" className="w-full">
                  Start Assessment
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="medical-outline" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Sample Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center">Venous Insufficiency</DialogTitle>
                      <p className="text-center text-muted-foreground font-medium">SAMPLE REPORT</p>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-6">
                      {/* Vascular Health Summary */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-foreground">Vascular Health Summary</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <span className="font-medium">• Edema Level</span>
                            <span className="text-right max-w-md">
                              <strong>Moderate</strong> Swelling/tores/dent fluid retention
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="font-medium">• Visible Varicosities</span>
                            <span className="text-right max-w-md">
                              <strong>3 clusters detected.</strong> Suggesting venous reflux or valve failure
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="font-medium">• Skin Discoloration</span>
                            <span className="text-right max-w-md">
                              <strong>Mild (CEAP C4a)</strong> Early signs of venous congestion (brownish pigment)
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="font-medium">• Vein Pattern</span>
                            <span className="text-right max-w-md">
                              <strong>Great Saphonous</strong> Lis with common reflux pathway
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="font-medium">• Asymmetry Score</span>
                            <span className="text-right max-w-md">
                              <strong>32% (Right &gt; Left)</strong> Your leg significantly more swollen no: risk factors
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="font-medium">• Ulcer Risk Index</span>
                            <span className="text-right max-w-md">
                              <strong>Low-Moderate</strong> No ulcer pressent, but some risk factors detected
                            </span>
                          </div>
                        </div>
                      </div>

                      <hr className="border-border" />

                      {/* CEAP Classification */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-foreground">Your CEAP Classification</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Be conservative therapy:</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">Elevate leg 2-3 daily</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">Daily walking and calf activation</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Interventional options:</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">Sclerotherapy <em className="text-muted-foreground">(recommends)</em></span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">Radiofrequency or laser ablation specialist referral if symptoms</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <hr className="border-border" />

                      {/* Next Steps */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-foreground">Next Steps</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">Re-scan in 2-3 months to monitor progress</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">Book optional telehealth visit if swelling worsens</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">Join our free Leg Health 101 series for education -on discounts</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Options */}
          <Card className="shadow-sm border border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-medical-secondary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-medical-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Treatment Options</CardTitle>
                  <CardDescription>Explore available treatment methods</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Learn about conservative treatments and medical procedures available.
              </p>
              <Button variant="medical-outline" className="w-full">
                View Treatments
              </Button>
            </CardContent>
          </Card>

            </div>
          </TabsContent>

          <TabsContent value="supplements" className="mt-8">
            <div className="text-center py-12">
              <Pill className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">BioEssentials Subscription</h3>
              <p className="text-muted-foreground">Track your supplement orders and delivery status</p>
            </div>
          </TabsContent>

          <TabsContent value="ai-history" className="mt-8">
            <div className="text-center py-12">
              <History className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Assessment History</h3>
              <p className="text-muted-foreground">View your previous AI-powered vein assessments</p>
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Vein Care Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive vein health solutions with professional assessment, treatment support, and specialized products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Compression Bundle */}
            <Card className="relative border-2 border-medical-primary bg-medical-primary/5">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-medical-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Best Value
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">Compression Bundle</CardTitle>
                <div className="text-3xl font-bold text-medical-primary mb-2">$129</div>
                <CardDescription>Complete support package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Full vein assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Premium compression stockings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Sizing consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    3-month follow-up
                  </li>
                </ul>
                <Button variant="medical" className="w-full">
                  Choose Bundle
                </Button>
              </CardContent>
            </Card>

            {/* Basic Assessment */}
            <Card className="relative border-2 border-border hover:border-medical-primary/30 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">Vein Assessment</CardTitle>
                <div className="text-3xl font-bold text-medical-primary mb-2">$39</div>
                <CardDescription>Initial evaluation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    AI vein analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Risk assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Care suggestions
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

            {/* Supplement Package */}
            <Card className="relative border-2 border-border hover:border-medical-primary/30 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">BioEssentials Package</CardTitle>
                <div className="text-3xl font-bold text-medical-primary mb-2">$89</div>
                <CardDescription>Nutritional support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Vein assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Circulation BioEssentials
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    30-day supply
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Nutritional guidance
                  </li>
                </ul>
                <Button variant="medical-outline" className="w-full">
                  Order Package
                </Button>
              </CardContent>
            </Card>

            {/* Complete Care Plan */}
            <Card className="relative border-2 border-border hover:border-medical-primary/30 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">Complete Care</CardTitle>
                <div className="text-3xl font-bold text-medical-primary mb-2">$199</div>
                <CardDescription>Full treatment plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Complete assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Compression stockings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    BioEssential Subscription
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-medical-primary rounded-full"></div>
                    Telehealth consultation
                  </li>
                </ul>
                <Button variant="medical-outline" className="w-full">
                  Start Plan
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Add-on Options */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold text-center mb-6">Add-On Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border border-border">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-2">Extra Compression Stockings</h4>
                  <div className="text-2xl font-bold text-medical-primary mb-2">$45</div>
                  <p className="text-sm text-muted-foreground">Additional pair with sizing</p>
                </CardContent>
              </Card>
              <Card className="border border-border">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-2">Monthly BioEssentials</h4>
                  <div className="text-2xl font-bold text-medical-primary mb-2">$29</div>
                  <p className="text-sm text-muted-foreground">Ongoing circulation support</p>
                </CardContent>
              </Card>
              <Card className="border border-border">
                <CardContent className="p-4 text-center">
                  <h4 className="font-medium mb-2">Follow-up Consultation</h4>
                  <div className="text-2xl font-bold text-medical-primary mb-2">$65</div>
                  <p className="text-sm text-muted-foreground">30-min specialist review</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              All packages include free shipping. Compression stockings sized by our specialists.
              <span className="text-medical-primary font-medium"> 60-day satisfaction guarantee.</span>
            </p>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Common Conditions */}
            <div className="bg-medical-light rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Common Vein Conditions</h2>
              <div className="space-y-3">
                <div className="border-l-4 border-medical-primary pl-4">
                  <h3 className="font-medium text-foreground">Varicose Veins</h3>
                  <p className="text-sm text-muted-foreground">Enlarged, twisted veins visible under the skin</p>
                </div>
                <div className="border-l-4 border-medical-secondary pl-4">
                  <h3 className="font-medium text-foreground">Spider Veins</h3>
                  <p className="text-sm text-muted-foreground">Small, damaged veins on the surface of the skin</p>
                </div>
                <div className="border-l-4 border-medical-success pl-4">
                  <h3 className="font-medium text-foreground">Chronic Venous Insufficiency</h3>
                  <p className="text-sm text-muted-foreground">Poor blood flow from legs back to the heart</p>
                </div>
              </div>
            </div>

            {/* Prevention Tips */}
            <div className="bg-medical-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Prevention & Care Tips</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">Exercise regularly to improve circulation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">Maintain a healthy weight</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">Avoid prolonged sitting or standing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">Elevate legs when resting</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">Wear compression stockings if recommended</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>;
};
export default Veins;