import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OneWord({ words }) {
    const { word } = useParams();
    const [chosenWord, setChosenWord] = useState("");

    useEffect(() => {
        axios
          .get(`https://crossover-wordoftheday.onrender.com/words/${word}`)
          .then((response) => {
            console.log(response.data);
            setChosenWord(response.data);           
          })
          .catch((error) => {
            console.log(error);
          });
      }, [word]);

  return (
    <div className="wordsList">
      {chosenWord.german_word}
    </div>
  )
}
