import "./App.css";
import SearchBar from "./components2/SearchBar";
import WordsList from "./components2/WordsList";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

function App() {
  const [words, setWords] = useState();

  useEffect(() => {
    axios
      .get("https://crossover-wordoftheday.onrender.com/words")
      .then((response) => {
        setWords(response.data.words);
        console.log(response.data.words);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Container>
        <SearchBar />
        <Routes>
          <Route path="/" element={<WordsList words={words} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
