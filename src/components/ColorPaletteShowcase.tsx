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
        <div className="border border-dragon-navy/20 rounded-lg p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">Color Palette</h3>
            <p className="text-gray-600">The five sacred colors of the Ocean Dragon</p>
          </div>
          <div>
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
          </div>
        </div>

        {/* Interactive Elements Showcase */}
        <div className="border border-dragon-navy/20 rounded-lg p-6 bg-white">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">
              Dragon-Themed Interactive Elements
            </h3>
            <p className="text-gray-600">
              Interactive elements styled with the Ocean Dragon palette
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="px-4 py-2 bg-gray-800 text-white rounded cursor-pointer hover:bg-gray-700 transition-colors text-center">
                Default
              </div>
              <div className="px-4 py-2 bg-dragon-navy text-white rounded cursor-pointer hover:bg-dragon-navy/80 transition-colors text-center">
                Dragon Navy
              </div>
              <div className="px-4 py-2 bg-dragon-emerald text-white rounded cursor-pointer hover:bg-dragon-emerald/80 transition-colors text-center">
                Dragon Emerald
              </div>
              <div className="px-4 py-2 bg-dragon-teal text-white rounded cursor-pointer hover:bg-dragon-teal/80 transition-colors text-center">
                Dragon Teal
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-dragon-deep-purple to-dragon-dark-purple text-white rounded cursor-pointer hover:opacity-80 transition-opacity text-center">
                Mystical Gradient
              </div>
              <div className="px-4 py-2 border border-dragon-navy text-dragon-navy rounded cursor-pointer hover:bg-dragon-navy hover:text-white transition-colors text-center">
                Dragon Outline
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <h4 className="font-semibold text-dragon-deep-purple">Different Sizes</h4>
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-dragon-navy text-white rounded cursor-pointer hover:bg-dragon-navy/80 transition-colors text-sm">
                  Small
                </div>
                <div className="px-4 py-2 bg-dragon-emerald text-white rounded cursor-pointer hover:bg-dragon-emerald/80 transition-colors">
                  Default
                </div>
                <div className="px-6 py-3 bg-dragon-teal text-white rounded cursor-pointer hover:bg-dragon-teal/80 transition-colors text-lg">
                  Large
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-dragon-deep-purple to-dragon-dark-purple text-white rounded cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center">
                  🐉
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Showcase */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-dragon-emerald/30 hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
            <div className="mb-4">
              <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">
                🌊 Ocean Depths
              </h3>
              <p className="text-gray-600">Explore the mysterious waters where dragons dwell</p>
            </div>
            <div>
              <p className="text-dragon-navy">
                Dive deep into the mystical waters and discover the secrets hidden beneath the
                waves.
              </p>
              <div className="px-4 py-2 bg-dragon-emerald text-white rounded cursor-pointer hover:bg-dragon-emerald/80 transition-colors mt-4 inline-block">
                Explore
              </div>
            </div>
          </div>

          <div className="border border-dragon-teal/30 hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
            <div className="mb-4">
              <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">
                🐉 Dragon Scales
              </h3>
              <p className="text-gray-600">Collect and nurture your dragon companions</p>
            </div>
            <div>
              <p className="text-dragon-navy">
                Each dragon scale tells a story of ancient power and mystical energy.
              </p>
              <div className="px-4 py-2 bg-dragon-teal text-white rounded cursor-pointer hover:bg-dragon-teal/80 transition-colors mt-4 inline-block">
                Collect
              </div>
            </div>
          </div>

          <div className="border border-dragon-navy/30 hover:shadow-lg transition-shadow rounded-lg p-6 bg-white">
            <div className="mb-4">
              <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">
                ⚡ Mystical Powers
              </h3>
              <p className="text-gray-600">Harness the elemental forces of your dragons</p>
            </div>
            <div>
              <p className="text-dragon-navy">
                Unlock the hidden potential within each dragon and master their unique abilities.
              </p>
              <div className="px-4 py-2 bg-gradient-to-r from-dragon-deep-purple to-dragon-dark-purple text-white rounded cursor-pointer hover:opacity-80 transition-opacity mt-4 inline-block">
                Unleash
              </div>
            </div>
          </div>
        </div>

        {/* Theme Information */}
        <div className="border border-dragon-deep-purple/30 bg-gradient-to-r from-dragon-deep-purple/5 to-dragon-dark-purple/5 rounded-lg p-6">
          <div className="mb-4">
            <h3 className="text-dragon-deep-purple text-xl font-semibold mb-2">🎨 Design System</h3>
            <p className="text-gray-600">
              How the Ocean Dragon palette enhances your Dragon Farm experience
            </p>
          </div>
          <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
