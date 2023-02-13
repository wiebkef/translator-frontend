import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OneWord({ words }) {
    const { word } = useParams();
    const [chosenWord, setChosenWord] = useState([]);

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

      console.log(`chosen word is ${chosenWord}`)

  return (
    <div className="wordsList">
      <ul style={{ listStyle: "none" }}>
      {chosenWord.map((value) => {
        return (
          <>
          <li>German: {value.german_word}</li>
          <li>English: {value.english_translation}</li>
          <li>Bosnian: {value.bosnian_translation}</li>
          <li>Hindi: {value.hindi_translation}</li>
          <li>Polish: {value.polish_translation}</li>
          </>
        )
      })}
      </ul>
    </div>
  )
}
