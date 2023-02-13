import React from "react";

function WordsList(props) {
  const { words, resetWords } = props;

  return words.length > 0 ? (
    <>
      <ul>
        {words.map((word, i) => (
          <li className={word.english ? "bold read" : "bold unread"} key={i}>
            {word.german}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h2>Noo Words</h2>
  );
}

export default WordsList;
