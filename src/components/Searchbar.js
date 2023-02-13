import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Searchbar() {
  const [search, setSearch] = useState("");
  const [words, setWords] = useState([
    { german: "Schule", english: "school" },
    { german: "Stuhl", english: "chair" },
    { german: "Tisch", english: "table" },
  ]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    /* Here we need to fetch from backend */
    if (words.find()) {
      /* render word */
    }
  };

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Translate"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="primary" type="submit" onClick={handleSearchSubmit}>
        Search
      </Button>
    </Form>
  );
}

export default Searchbar;
