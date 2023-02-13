import "./App.css";
import Searchbar from "./components/Searchbar";
import WordsList from "./components/WordsList";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <WordsList />
    </div>
  );
}

export default App;
