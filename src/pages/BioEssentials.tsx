import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Pill } from "lucide-react";
import { Link } from "react-router-dom";
const BioEssentials = () => {
  const bioessentials = [{
    name: "FlowMax formula",
    description: "Endothelial function and nitric oxide boost",
    color: "blue"
  }, {
    name: "VeinVital complex",
    description: "Venous tone and microcirculation",
    color: "purple"
  }, {
    name: "PlaqueGuard",
    description: "Atherosclerosis and inflammation control",
    color: "red"
  }, {
    name: "HealFast formula",
    description: "Wound healing support",
    color: "green"
  }, {
    name: "VascuShield Blend",
    description: "Antioxidant vascular protection",
    color: "orange"
  }];
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-600";
      case "purple":
        return "bg-purple-100 text-purple-600";
      case "red":
        return "bg-red-100 text-red-600";
      case "green":
        return "bg-green-100 text-green-600";
      case "orange":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-orange-600">BioEssentials</span> for Vascular Health
            </h1>
            <p className="text-xl text-gray-600">
              Evidence-based nutritional support designed by vascular specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bioessentials.map((supplement, index) => {
            const isFlowMax = supplement.name === "FlowMax formula";
            const isVeinVital = supplement.name === "VeinVital complex";
            const isPlaqueGuard = supplement.name === "PlaqueGuard";
            const isHealFast = supplement.name === "HealFast formula";
            const isVascuShield = supplement.name === "VascuShield Blend";
            if (isFlowMax) {
              return <Link key={index} to="/bioessentials/flowmax-formula" className="group">
                    <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-16 h-16 ${getColorClasses(supplement.color)} rounded-2xl flex items-center justify-center mb-4`}>
                            <Pill className="h-8 w-8" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {supplement.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {supplement.description}
                          </p>
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>;
            }
            if (isVeinVital) {
              return <Link key={index} to="/bioessentials/veinvital-complex" className="group">
                    <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-16 h-16 ${getColorClasses(supplement.color)} rounded-2xl flex items-center justify-center mb-4`}>
                            <Pill className="h-8 w-8" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {supplement.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {supplement.description}
                          </p>
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>;
            }
            if (isPlaqueGuard) {
              return <Link key={index} to="/bioessentials/plaqueguard" className="group">
                    <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-16 h-16 ${getColorClasses(supplement.color)} rounded-2xl flex items-center justify-center mb-4`}>
                            <Pill className="h-8 w-8" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {supplement.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {supplement.description}
                          </p>
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>;
            }
            if (isHealFast) {
              return <Link key={index} to="/bioessentials/healfast-formula" className="group">
                    <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-16 h-16 ${getColorClasses(supplement.color)} rounded-2xl flex items-center justify-center mb-4`}>
                            <Pill className="h-8 w-8" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {supplement.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {supplement.description}
                          </p>
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>;
            }
            if (isVascuShield) {
              return <Link key={index} to="/bioessentials/vascushield-blend" className="group">
                    <Card className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-16 h-16 ${getColorClasses(supplement.color)} rounded-2xl flex items-center justify-center mb-4`}>
                            <Pill className="h-8 w-8" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {supplement.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {supplement.description}
                          </p>
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>;
            }
            return <Card key={index} className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-none shadow-lg hover:shadow-xl cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 ${getColorClasses(supplement.color)} rounded-2xl flex items-center justify-center mb-4`}>
                        <Pill className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {supplement.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {supplement.description}
                      </p>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>;
          })}

            {/* Trust Statement Card */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-none shadow-lg md:col-span-2 lg:col-span-3">
              <CardContent className="p-8">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Physician-formulated BioEssentials
                  </h3>
                  <p className="text-gray-600 leading-relaxed">Each supplement is carefully formulated based on the latest vascular research and clinical evidence. Our board-certified vascular specialists ensure every ingredient serves a specific purpose in supporting your vascular health.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default BioEssentials;