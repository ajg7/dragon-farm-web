import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { oceanDragonPalette } from "@/lib/colors";

export function ColorPaletteShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-dragon-deep-purple">
            🐉 Dragon Farm - Ocean Dragon Color Palette
          </h1>
          <p className="text-dragon-navy text-lg">
            A mystical color scheme inspired by the depths of the ocean and the scales of ancient
            dragons
          </p>
        </div>

        {/* Color Palette Display */}
        <Card className="border-dragon-navy/20">
          <CardHeader>
            <CardTitle className="text-dragon-deep-purple">Color Palette</CardTitle>
            <CardDescription>The five sacred colors of the Ocean Dragon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              {Object.entries(oceanDragonPalette).map(([name, color]) => (
                <div key={name} className="text-center space-y-2">
                  <div
                    className="w-full h-24 rounded-lg shadow-lg border-2 border-white"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-dragon-deep-purple capitalize">
                      {name.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <p className="text-xs text-dragon-navy font-mono">{color.hex}</p>
                    <p className="text-xs text-gray-600">{color.rgb}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Button Variants Showcase */}
        <Card className="border-dragon-navy/20">
          <CardHeader>
            <CardTitle className="text-dragon-deep-purple">Dragon-Themed Button Variants</CardTitle>
            <CardDescription>
              Interactive elements styled with the Ocean Dragon palette
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Button variant="default">Default</Button>
              <Button variant="dragon">Dragon Navy</Button>
              <Button variant="emerald">Dragon Emerald</Button>
              <Button variant="teal">Dragon Teal</Button>
              <Button variant="mystical">Mystical Gradient</Button>
              <Button variant="outline_dragon">Dragon Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>

            <div className="mt-6 space-y-2">
              <h4 className="font-semibold text-dragon-deep-purple">Different Sizes</h4>
              <div className="flex items-center gap-4">
                <Button variant="dragon" size="sm">
                  Small
                </Button>
                <Button variant="emerald" size="default">
                  Default
                </Button>
                <Button variant="teal" size="lg">
                  Large
                </Button>
                <Button variant="mystical" size="icon">
                  🐉
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards Showcase */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-dragon-emerald/30 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-dragon-deep-purple">🌊 Ocean Depths</CardTitle>
              <CardDescription>Explore the mysterious waters where dragons dwell</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-dragon-navy">
                Dive deep into the mystical waters and discover the secrets hidden beneath the
                waves.
              </p>
              <Button variant="emerald" className="mt-4">
                Explore
              </Button>
            </CardContent>
          </Card>

          <Card className="border-dragon-teal/30 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-dragon-deep-purple">🐉 Dragon Scales</CardTitle>
              <CardDescription>Collect and nurture your dragon companions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-dragon-navy">
                Each dragon scale tells a story of ancient power and mystical energy.
              </p>
              <Button variant="teal" className="mt-4">
                Collect
              </Button>
            </CardContent>
          </Card>

          <Card className="border-dragon-navy/30 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-dragon-deep-purple">⚡ Mystical Powers</CardTitle>
              <CardDescription>Harness the elemental forces of your dragons</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-dragon-navy">
                Unlock the hidden potential within each dragon and master their unique abilities.
              </p>
              <Button variant="mystical" className="mt-4">
                Unleash
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Theme Information */}
        <Card className="border-dragon-deep-purple/30 bg-gradient-to-r from-dragon-deep-purple/5 to-dragon-dark-purple/5">
          <CardHeader>
            <CardTitle className="text-dragon-deep-purple">🎨 Design System</CardTitle>
            <CardDescription>
              How the Ocean Dragon palette enhances your Dragon Farm experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-dragon-deep-purple mb-2">Color Meanings</h4>
                <ul className="space-y-1 text-sm text-dragon-navy">
                  <li>
                    <span className="text-dragon-emerald font-semibold">Emerald:</span> Growth,
                    success, life energy
                  </li>
                  <li>
                    <span className="text-dragon-teal font-semibold">Teal:</span> Wisdom, balance,
                    tranquility
                  </li>
                  <li>
                    <span className="text-dragon-navy font-semibold">Navy:</span> Depth, trust,
                    stability
                  </li>
                  <li>
                    <span className="text-dragon-deep-purple font-semibold">Deep Purple:</span>{" "}
                    Mystery, magic, power
                  </li>
                  <li>
                    <span className="text-dragon-dark-purple font-semibold">Dark Purple:</span>{" "}
                    Ancient wisdom, shadows
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dragon-deep-purple mb-2">Usage Guidelines</h4>
                <ul className="space-y-1 text-sm text-dragon-navy">
                  <li>
                    • Use <strong>Navy</strong> for primary actions and navigation
                  </li>
                  <li>
                    • Use <strong>Emerald</strong> for success states and CTAs
                  </li>
                  <li>
                    • Use <strong>Teal</strong> for secondary actions
                  </li>
                  <li>
                    • Use <strong>Purple shades</strong> for premium features
                  </li>
                  <li>• Maintain contrast for accessibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
