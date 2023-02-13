import React from "react";
import Container from "react-bootstrap/Container";

function WordsList(props) {
  const { words, resetWords } = props;

  return words.length > 0 ? (
    <Container className="text-start mt-4">
      <ul className="list-group">
        {words.map((word, i) => (
          <li
            className={`${
              word.english ? "bold read" : "bold unread"
            } list-group-item`}
            key={i}
          >
            {word.german}
          </li>
        ))}
      </ul>
    </Container>
  ) : (
    <h2>Noo Words</h2>
  );
}

export default WordsList;
