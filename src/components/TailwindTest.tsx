import React from "react";

const TailwindTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-dragon-emerald mb-6">Tailwind v4 Test</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Color Palette Test */}
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
              Ocean Dragon Colors
            </h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-dragon-dark-purple rounded"></div>
                <span>Dragon Dark Purple</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-dragon-deep-purple rounded"></div>
                <span>Dragon Deep Purple</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-dragon-navy rounded"></div>
                <span>Dragon Navy</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-dragon-teal rounded"></div>
                <span>Dragon Teal</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-dragon-emerald rounded"></div>
                <span>Dragon Emerald</span>
              </div>
            </div>
          </div>

          {/* Component Test */}
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Component Test</h2>
            <div className="space-y-4">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Primary Button
              </button>
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors">
                Secondary Button
              </button>
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/90 transition-colors">
                Accent Button
              </button>
              <div className="bg-muted p-3 rounded-md">
                <p className="text-muted-foreground">Muted background with muted text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;
