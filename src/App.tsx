import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">🐲 Dragon Farm 🐲</h1>
        <p className="text-lg text-gray-600">Welcome to your magical dragon breeding adventure!</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Dragon Statistics</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Dragons:</span>
                <span className="font-bold" data-testid="dragon-count">
                  0
                </span>
              </div>
              <div className="flex justify-between">
                <span>Eggs Hatching:</span>
                <span className="font-bold">0</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
                data-testid="breed-button"
              >
                Breed New Dragon
              </button>
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
                data-testid="feed-button"
              >
                Feed All Dragons
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
