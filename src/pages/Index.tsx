import { Card, CardContent } from "@/components/ui/card";
import { Heart, Bandage, TrendingUp, Activity, Pill, Menu, Zap } from "lucide-react";
import { useState, useEffect } from "react";
const Index = () => {
  const [currentService, setCurrentService] = useState(0);
  const services = ["Wounds", "Veins", "Leg Swelling", "Athletes", "BioEssentials", "Compression"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              AvraHealth
            </div>
            <div className="flex items-center gap-6">
              <button className="text-gray-600 hover:text-gray-900 font-medium">
                Log in
              </button>
              <button className="lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
            <span className="text-orange-600">Vascular wellness</span>
            <br />
            <span className="text-gray-900">personalized to you</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">Designed by board certified vascular specialists</p>
          
          {/* Rotating Services Text */}
          <div className="mb-12">
            <p className="text-lg text-gray-700">
              Specialized care for{" "}
              <span className="font-semibold text-orange-600 transition-all duration-500">
                {services[currentService].toLowerCase()}
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section id="services-section" className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Wounds Card */}
          <div className="group">
            <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                    <Bandage className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Treat <span className="text-red-600">wounds</span>
                </h3>
                <p className="text-gray-600">
                  AI powered wound assessment and healing guidance
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Veins Card */}
          <div className="group">
            <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Activity className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Improve <span className="text-blue-600">veins</span>
                </h3>
                <p className="text-gray-600">
                  Comprehensive vein health assessment and care
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Leg Swelling Card */}
          <div className="group">
            <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Reduce <span className="text-green-600">swelling</span>
                </h3>
                <p className="text-gray-600">
                  Expert guidance for leg edema management
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Athletes Card */}
          <div className="group">
            <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Optimize <span className="text-purple-600">performance</span>
                </h3>
                <p className="text-gray-600">
                  Vascular wellness for peak athletic performance
                </p>
              </CardContent>
            </Card>
          </div>

          {/* BioEssentials Card */}
          <div className="group">
            <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <Pill className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Take <span className="text-orange-600">BioEssentials</span>
              </h3>
              <p className="text-gray-600">
                Evidence-based nutritional support for vascular health
              </p>
              </CardContent>
            </Card>
          </div>

          {/* Compression Card */}
          <div className="group">
            <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center">
                    <Zap className="h-8 w-8 text-cyan-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Use <span className="text-cyan-600">compression</span>
                </h3>
                <p className="text-gray-600">
                  Graduated compression therapy for circulation support
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trust Statement Card */}
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-none shadow-lg md:col-span-2 lg:col-span-3">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Physician-designed platform
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">Built by healthcare professionals for real clinical outcomes, not trends.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
          <span className="text-2xl font-bold">?</span>
        </button>
      </div>
    </div>;
};
export default Index;