import "./App.css";
import React, { useState, useEffect } from "react";
import "./components/CardComponent/CardComponent.css";
import CharactersComponent from "./components/CharactersComponent/CharactersComponent";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <h1>Rick and Morty API</h1>
      <div className="Content">
        <QueryClientProvider client={queryClient}>
          <CharactersComponent />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
