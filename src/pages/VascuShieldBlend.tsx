import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const VascuShieldBlend = () => {
  const ingredients = [
    {
      name: "Alpha-Lipoic Acid",
      dose: "600 mg",
      benefit: "Regenerates other antioxidants, lowers oxidative stress in diabetes"
    },
    {
      name: "Resveratrol",
      dose: "100–250 mg", 
      benefit: "Improves endothelial function, activates sirtuins"
    },
    {
      name: "Vitamin E (d-alpha tocopherol)",
      dose: "200 IU",
      benefit: "Protects against LDL oxidation"
    },
    {
      name: "N-Acetylcysteine (NAC)",
      dose: "600 mg",
      benefit: "Boosts glutathione, anti-inflammatory"
    }
  ];

  const evidence = [
    {
      study: "Takaoka et al., 2001, Hypertension",
      finding: "Resveratrol improves endothelial function"
    },
    {
      study: "Packer et al., 1995, Free Rad Biol Med", 
      finding: "ALA is a potent vascular antioxidant"
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
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              VascuShield <span className="text-orange-600">Blend</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Antioxidant vascular protection
            </p>
          </div>

          {/* Goal Section */}
          <Card className="mb-8 border-none shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-orange-600" />
                Primary Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                Reduce oxidative stress in the vasculature, prevent endothelial damage.
              </p>
            </CardContent>
          </Card>

          {/* Ingredients Section */}
          <Card className="mb-8 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Key Ingredients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="md:w-1/3">
                      <div className="font-semibold text-gray-900 mb-1">
                        {ingredient.name}
                      </div>
                      <div className="text-orange-600 font-medium">
                        {ingredient.dose}
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-600 leading-relaxed">
                        → {ingredient.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Evidence Section */}
          <Card className="mb-8 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                🔬 Clinical Evidence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {evidence.map((item, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-900 mb-2">
                      [{item.study}]
                    </div>
                    <p className="text-blue-800">
                      {item.finding}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-none">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Physician-Formulated Antioxidant Protection
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  VascuShield Blend provides comprehensive antioxidant support for your vascular system, 
                  formulated based on clinical research and evidence-based medicine.
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                  Learn More About Ordering
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default VascuShieldBlend;