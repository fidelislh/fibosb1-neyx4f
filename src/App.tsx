import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Player from './components/Player';
import FibonacciCycles from './components/FibonacciCycles';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black">
          <h1 className="font-bold text-3xl mt-10">Trading Analysis</h1>
          <div className="mt-6">
            <FibonacciCycles />
          </div>
        </main>
      </div>
      <Player />
    </div>
  );
}

export default App;