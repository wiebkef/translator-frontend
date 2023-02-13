import "./App.css";
import Searchbar from "./components/Searchbar";
import WordsList from "./components/WordsList";
import Word from "./components/Word";
import NoWord from "./components/NoWord";
import NavaBar from "./components/Navbar";
import Footer from "./components/Footer";
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
      <NavaBar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<WordsList words={words} />} />
        <Route path="words/:id" element={<Word />} />
        <Route path="*" element={<NoWord />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
