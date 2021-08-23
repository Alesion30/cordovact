import React from "react";
import logo from "./logo.svg";

const App: React.VFC = () => {
  return (
    <div className="text-center">
      <header className="bg-blue-900 min-h-screen flex flex-col justify-center items-center text-2xl text-white">
        <img
          src={logo}
          className="h-96 pointer-events-none animate-spin"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
