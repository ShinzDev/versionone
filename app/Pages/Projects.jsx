'use client'

import Image from "next/image";

// image import
import firstImag from "/public/showcase.png";

export default () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden font-mono">
      {/* Matrix-style background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 text-green-400/20 text-xs animate-bounce delay-300">
          {'{ "status": "active" }'}
        </div>
        <div className="absolute bottom-40 left-16 text-cyan-400/20 text-xs animate-bounce delay-700">
          console.log("Hello World");
        </div>
        <div className="absolute top-1/3 right-1/3 text-blue-400/20 text-xs animate-bounce delay-1000">
          npm install success
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Text content - Terminal-inspired */}
          <div className="flex-1 space-y-8 transform hover:scale-105 transition-all duration-700 ease-out">
            
            {/* Terminal header */}
            <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-t-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400 text-sm">project_showcase.jsx</span>
              </div>
            </div>

            {/* Terminal content */}
            <div className="bg-black/90 backdrop-blur-xl border-x border-b border-gray-700/50 rounded-b-lg p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5"></div>
              
              <div className="relative space-y-6">
                {/* Typing indicator */}
                <div className="flex items-center gap-2 text-green-400 mb-4">
                  <span className="text-gray-500">$</span>
                  <span className="animate-pulse">initializing_project...</span>
                  <div className="w-2 h-5 bg-green-400 animate-pulse"></div>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold">
                  <span className="text-cyan-400">&lt;</span>
                  <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    First Project
                  </span>
                  <span className="text-cyan-400">/&gt;</span>
                </h1>

                <div className="text-gray-300 text-sm mb-4">
                  <span className="text-purple-400">/* </span>
                  <span className="text-gray-400">Project Status: </span>
                  <span className="text-green-400">DEPLOYED ✓</span>
                  <span className="text-purple-400"> */</span>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-cyan-600/10 rounded-lg blur-sm"></div>
                  <div className="relative bg-gray-900/50 border border-gray-700/30 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col text-gray-500 text-sm font-mono leading-relaxed">
                        <span>01</span>
                        <span>02</span>
                        <span>03</span>
                        <span>04</span>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        <span className="text-yellow-400">const</span> <span className="text-blue-400">description</span> <span className="text-white">=</span> <span className="text-green-400">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias quidem. Culpa nostrum nulla quidem nobis libero, deleniti necessitatibus molestias facilis quo eum esse cum quibusdam vitae consectetur iure dignissimos."</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Command buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="group relative px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 rounded-md font-mono text-black font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                    <span className="relative z-10 flex items-center gap-2">
                      <span>$</span> npm run deploy
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="px-6 py-3 border-2 border-cyan-500/50 rounded-md font-mono text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
                    git clone
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image section - Code editor inspired */}
          <div className="flex-1 relative group">
            <div className="relative transform hover:rotate-1 hover:scale-105 transition-all duration-700 ease-out">
              
              {/* IDE-style container */}
              <div className="relative bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-500">
                
                {/* IDE header */}
                <div className="bg-gray-800/90 border-b border-gray-700/50 p-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex text-xs text-gray-400 gap-4">
                    <span className="bg-gray-700/50 px-2 py-1 rounded">preview.png</span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    ⚡ Live Preview
                  </div>
                </div>

                {/* File tabs */}
                <div className="bg-gray-800/70 border-b border-gray-700/30 px-4 py-2 flex gap-2">
                  <div className="bg-gray-700/50 px-3 py-1 rounded-t text-xs text-gray-300 border-t-2 border-green-400">
                    showcase.png
                  </div>
                  <div className="px-3 py-1 text-xs text-gray-500">
                    + 
                  </div>
                </div>

                {/* Image container with code-style padding */}
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50">
                  <div className="relative overflow-hidden rounded-md border border-gray-700/30">
                    <Image 
                      src={firstImag} 
                      alt="First Project Code Preview" 
                      className="w-full h-auto transform hover:scale-110 transition-transform duration-700 ease-out"
                      style={{
                        maxWidth: "100%", 
                        height: "auto",
                        filter: "contrast(1.1) saturate(1.2) hue-rotate(10deg)"
                      }} 
                    />
                    
                    {/* Code overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Scanning line effect */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="bg-green-600 text-black px-4 py-2 text-xs flex justify-between items-center font-mono">
                  <span>✓ Build successful</span>
                  <div className="flex gap-4">
                    <span>ES6</span>
                    <span>Next js</span>
                    <span>React</span>
                    <span>UTF-8</span>
                  </div>
                </div>
              </div>

              {/* Floating status indicators */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-500 text-black px-3 py-1 rounded-full text-xs font-mono font-bold shadow-lg animate-bounce">
                ✓ ONLINE
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-black px-3 py-1 rounded-full text-xs font-mono font-bold shadow-lg">
                v2.1.0
              </div>

              {/* Circuit-like decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-32 h-32 border border-green-400/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-28 h-28 border-2 border-cyan-400/20 rounded-square animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Binary rain effect at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/50 to-transparent">
        <div className="absolute inset-0 overflow-hidden text-green-400/10 text-xs font-mono">
          <div className="animate-pulse">01001000 01100101 01101100 01101100 01101111</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </main>
  );
};