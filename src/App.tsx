import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
