import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "sonner";
import { toast } from "sonner";

function App() {
  const [dragonCount, setDragonCount] = useState(0);
  const [gold, setGold] = useState(100);

  const handleHatchDragon = () => {
    if (gold >= 50) {
      setDragonCount((count) => count + 1);
      setGold((gold) => gold - 50);
      toast.success(`🐉 A new dragon has hatched! You now have ${dragonCount + 1} dragons!`, {
        description: "Your dragon collection grows stronger!",
      });
    } else {
      toast.error("Not enough gold! You need 50 gold to hatch a dragon.", {
        description: "Collect more gold to expand your dragon farm!",
      });
    }
  };

  const handleCollectGold = () => {
    const goldEarned = dragonCount * 10 + 10;
    setGold((gold) => gold + goldEarned);
    toast.success(`💰 Collected ${goldEarned} gold!`, {
      description: `Your dragons helped you earn more gold!`,
    });
  };

  const handleFeedDragons = () => {
    if (dragonCount > 0 && gold >= 20) {
      setGold((gold) => gold - 20);
      toast.success(`🍖 Fed all your dragons!`, {
        description: "Happy dragons are productive dragons!",
      });
    } else if (dragonCount === 0) {
      toast.error("You have no dragons to feed!");
    } else {
      toast.error("Not enough gold! You need 20 gold to feed your dragons.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 shadow-2xl">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-16 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">🐲 Dragon Farm 🐲</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Welcome to the most magical dragon breeding experience! Hatch, raise, and collect gold
            from your majestic dragons.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-emerald-800">🐉 Dragons</CardTitle>
              <CardDescription className="text-emerald-600">Your collection</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-emerald-800">{dragonCount}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-yellow-800">💰 Gold</CardTitle>
              <CardDescription className="text-yellow-600">Your treasure</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-yellow-800">{gold}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-purple-800">⚡ Power</CardTitle>
              <CardDescription className="text-purple-600">Dragons&apos; strength</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-purple-800">{dragonCount * 100}</div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-red-200 hover:border-red-400 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-red-800">Hatch Dragon</CardTitle>
              <CardDescription>Cost: 50 gold</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={handleHatchDragon}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all"
                size="lg"
              >
                🥚 Hatch Dragon
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-green-200 hover:border-green-400 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-green-800">Collect Gold</CardTitle>
              <CardDescription>Earn: {dragonCount * 10 + 10} gold</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={handleCollectGold}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all"
                size="lg"
              >
                💰 Collect Gold
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-blue-800">Feed Dragons</CardTitle>
              <CardDescription>Cost: 20 gold</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={handleFeedDragons}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all"
                size="lg"
                disabled={dragonCount === 0}
              >
                🍖 Feed Dragons
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Dragon Display */}
        {dragonCount > 0 && (
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-purple-800">Your Dragon Collection</CardTitle>
              <CardDescription>Your majestic dragons are working hard for you!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                {Array.from({ length: dragonCount }, (_, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg border-2 border-purple-200"
                  >
                    <div className="text-4xl mb-2">🐲</div>
                    <div className="text-sm font-semibold text-purple-800">Dragon {i + 1}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {dragonCount === 0 && (
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 text-center">
            <CardContent className="py-12">
              <div className="text-6xl mb-4">🥚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Dragons Yet</h3>
              <p className="text-gray-600 mb-6">
                Start your dragon empire by hatching your first dragon!
              </p>
              <Button
                onClick={handleHatchDragon}
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all"
                size="lg"
              >
                🥚 Hatch Your First Dragon
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <Toaster />
    </div>
  );
}

export default App;
