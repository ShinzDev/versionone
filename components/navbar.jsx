
export function Navbar() {
  return (
    <main className="bg-gradient-to-r from-gray-900 via-black to-gray-800 border-b border-gray-700/50 relative overflow-hidden">
      {/* Background matrix effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-20 text-green-400/10 text-xs font-mono animate-pulse">
          {'<nav>'}
        </div>
        <div className="absolute top-2 right-20 text-cyan-400/10 text-xs font-mono animate-pulse delay-500">
          {'</nav>'}
        </div>
      </div>

      <div className="relative z-10">
        {/* Terminal-style header */}
        <div className="bg-gray-800/80 backdrop-blur-xl border-b border-gray-700/30 px-8 py-2">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-gray-400 text-sm font-mono">navigation.tsx</span>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Online
              </span>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="px-8 py-6">
          <div className="max-w-7xl mx-auto">
            {/* Command line style prompt */}
            <div className="flex items-center gap-2 text-green-400 font-mono text-sm mb-4">
              <span className="text-gray-500">user@portfolio:~$</span>
              <span className="animate-pulse">ls -la navigation/</span>
              <div className="w-2 h-4 bg-green-400 animate-pulse"></div>
            </div>

            {/* Navigation links as terminal output */}
            <ul className="flex justify-center gap-12 list-none font-mono">
              <li className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <a 
                  href="./" 
                  className="relative block px-6 py-4 text-2xl lg:text-3xl font-bold text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <span className="text-cyan-400 text-lg">01.</span>
                  <span className="ml-2">Home</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                  
                  {/* Hover effect - terminal cursor */}
                  <span className="opacity-0 group-hover:opacity-100 ml-1 text-green-400 animate-pulse transition-opacity duration-300">_</span>
                </a>
              </li>

              <li className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <a 
                  href="" 
                  className="relative block px-6 py-4 text-2xl lg:text-3xl font-bold text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <span className="text-cyan-400 text-lg">02.</span>
                  <span className="ml-2">About</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                  
                  <span className="opacity-0 group-hover:opacity-100 ml-1 text-green-400 animate-pulse transition-opacity duration-300">_</span>
                </a>
              </li>

              <li className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <a 
                  href="" 
                  className="relative block px-6 py-4 text-2xl lg:text-3xl font-bold text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <span className="text-cyan-400 text-lg">03.</span>
                  <span className="ml-2">Projects</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                  
                  <span className="opacity-0 group-hover:opacity-100 ml-1 text-green-400 animate-pulse transition-opacity duration-300">_</span>
                </a>
              </li>

              <li className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <a 
                  href="" 
                  className="relative block px-6 py-4 text-2xl lg:text-3xl font-bold text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <span className="text-cyan-400 text-lg">04.</span>
                  <span className="ml-2">Contact</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                  
                  <span className="opacity-0 group-hover:opacity-100 ml-1 text-green-400 animate-pulse transition-opacity duration-300">_</span>
                </a>
              </li>
            </ul>

            {/* Terminal output style footer */}
            <div className="mt-6 text-center">
              <div className="text-xs font-mono text-gray-500">
                <span className="text-green-400">✓</span> Navigation loaded successfully
                <span className="mx-4">•</span>
                <span>4 routes available</span>
                <span className="mx-4">•</span>
                <span className="text-cyan-400">Ready for user input</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Scanning line effect */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-pulse"></div>
      </div>
    </main>
  );
}