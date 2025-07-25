import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pill, Target, Microscope, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PlaqueGuard = () => {
  const ingredients = [
    {
      name: "Omega-3 EPA/DHA",
      dose: "2000 mg (combined)",
      description: "Lowers triglycerides, reduces inflammatory cytokines"
    },
    {
      name: "Curcumin (with BioPerine®)",
      dose: "500 mg", 
      description: "Anti-inflammatory, suppresses NF-kB"
    },
    {
      name: "CoQ10 (Ubiquinol)",
      dose: "100 mg",
      description: "Improves endothelial mitochondrial function"
    },
    {
      name: "Berberine",
      dose: "500 mg BID",
      description: "Lowers LDL, triglycerides, fasting glucose"
    }
  ];

  const evidence = [
    {
      study: "[Bhatt et al., 2010, J Am Coll Cardiol]",
      finding: "Omega-3s reduce CV events"
    },
    {
      study: "[Sahebkar et al., 2015, Phytotherapy Research]", 
      finding: "Curcumin lowers CRP, IL-6"
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
            <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Pill className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-red-600">PlaqueGuard</span>
            </h1>
            <p className="text-lg text-gray-600">
              Atherosclerosis and inflammation control
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
                    Reduce vascular inflammation, LDL oxidation, and slow plaque progression
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
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{ingredient.name}</h3>
                        <span className="text-red-600 font-medium">{ingredient.dose}</span>
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
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full">
              Get PlaqueGuard
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

export default PlaqueGuard;