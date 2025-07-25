import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pill, Target, Microscope, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const VeinVitalComplex = () => {
  const ingredients = [
    {
      name: "Diosmin/Hesperidin (micronized)",
      dose: "1000 mg",
      description: "Proven to reduce symptoms of CVI (e.g. in Daflon)"
    },
    {
      name: "Horse Chestnut Extract (Aescin 16–20%)",
      dose: "300 mg", 
      description: "Anti-inflammatory, improves venous tone"
    },
    {
      name: "Butcher's Broom",
      dose: "150 mg",
      description: "Reduces venous pooling, often paired with hesperidin"
    },
    {
      name: "Grape Seed Extract (95% OPCs)",
      dose: "200 mg",
      description: "Capillary protection, antioxidant"
    }
  ];

  const evidence = [
    {
      study: "[Jünger et al., 2006, Phytomedicine]",
      finding: "Aescin reduces lower leg edema"
    },
    {
      study: "[Cesarone et al., 2002, Angiology]", 
      finding: "Micronized flavonoids relieve venous symptoms"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/bioessentials" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to BioEssentials</span>
              </Link>
              <div className="text-2xl font-bold text-gray-900">
                AvraHealth
              </div>
            </div>
            <button className="text-gray-600 hover:text-gray-900 font-medium">
              Log in
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Product Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Pill className="h-12 w-12 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">VeinVital</span> Complex
            </h1>
            <p className="text-lg text-gray-600">
              Venous tone and microcirculation
            </p>
          </div>

          {/* Goal Section */}
          <Card className="mb-8 border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Goal</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Reduce leg swelling, improve venous return, support chronic venous insufficiency
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ingredients Section */}
          <Card className="mb-8 border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
              <div className="space-y-6">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{ingredient.name}</h3>
                        <span className="text-purple-600 font-medium">{ingredient.dose}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{ingredient.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Evidence Section */}
          <Card className="mb-8 border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Microscope className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">🔬 Evidence</h2>
              </div>
              <div className="space-y-4">
                {evidence.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium text-green-700">{item.study}</span>: {item.finding}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full">
              Get VeinVital Complex
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Physician-formulated • Evidence-based • Third-party tested
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VeinVitalComplex;