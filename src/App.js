import "./App.css";
import Searchbar from "./components/Searchbar";
import WordsList from "./components/WordsList";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [words, setWords] = useState([
    { german: "Schule", english: "school" },
    { german: "Stuhl", english: "chair" },
    { german: "Tisch", english: "table" },
  ]);

  return (
    <div className="App">
      <Searchbar />
      <WordsList />
    </div>
  );
}

export default App;
