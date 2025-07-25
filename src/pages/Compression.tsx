import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Compression = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="text-2xl font-bold text-gray-900">
                AvraHealth
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-gray-600 hover:text-gray-900 font-medium">
                Log in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center">
              <Zap className="h-8 w-8 text-cyan-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Compression Therapy
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Evidence-based graduated compression for optimal circulation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* What is Compression Therapy */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What is Compression Therapy?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Graduated compression therapy uses specialized garments that apply controlled pressure to your legs, 
                with the highest pressure at the ankle that gradually decreases up the leg. This helps improve 
                venous return, reduce swelling, and support overall circulation.
              </p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Benefits of Compression</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Improved Circulation</h4>
                    <p className="text-gray-600 text-sm">Enhances venous return and reduces blood pooling</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduced Swelling</h4>
                    <p className="text-gray-600 text-sm">Helps manage edema and lymphatic drainage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pain Relief</h4>
                    <p className="text-gray-600 text-sm">Reduces leg fatigue and discomfort</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Prevention</h4>
                    <p className="text-gray-600 text-sm">Helps prevent blood clots and varicose veins</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compression Levels */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Compression Levels</CardTitle>
              <CardDescription>
                Different compression levels are prescribed based on your specific condition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">15-20 mmHg (Mild)</h4>
                  <p className="text-gray-600 text-sm">For tired, aching legs and mild swelling</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">20-30 mmHg (Moderate)</h4>
                  <p className="text-gray-600 text-sm">For varicose veins, moderate swelling, and post-surgical support</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">30-40 mmHg (Firm)</h4>
                  <p className="text-gray-600 text-sm">For severe varicose veins, lymphedema, and chronic venous insufficiency</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">40+ mmHg (Extra Firm)</h4>
                  <p className="text-gray-600 text-sm">For severe lymphedema and post-thrombotic syndrome</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Personalized Compression Recommendations
              </h3>
              <p className="text-gray-600 mb-6">
                Our vascular specialists can help determine the right compression level and type for your needs.
              </p>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Compression;