import "./App.css";
import SearchBar from "./components2/SearchBar";
import WordsList from "./components2/WordsList";
import OneWord from "./components2/OneWord";
import Footer from "./components2/Footer";
import Navbar from "./components2/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Card from "react-bootstrap/Card";

function App() {
  const [words, setWords] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://crossover-wordoftheday.onrender.com/words/")
      .then((response) => {
        console.log(response.data.words);
        setWords(response.data.words);
        // setIsLoaded(true);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Container className="container">
        <Card style={{ width: "65em", minHeight: "65vh", margin: "auto" }}>
          <Card.Body>
            <SearchBar />
            <Routes>
              <Route path="/" element={<WordsList words={words}/>} />
              <Route path="/:word" element={<OneWord words={words}/>} />
            </Routes>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
