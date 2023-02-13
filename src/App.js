import "./App.css";
import Searchbar from "./components/Searchbar";
import WordsList from "./components/WordsList";
import Word from "./components/Word";
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
      <WordsList words={words} />
      <Word words={words} />
    </div>
  );
}

export default App;
