import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


export default function SearchBar() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      toast("Please type a word");
    } else {
          axios
        .get(`https://crossover-wordoftheday.onrender.com/words/${value}`)
        .then((response) => { console.log(response.data.words)
          if (response.data) {
            navigate(`/${response.data.words.german_word}`);
          } else {
            toast(
              "No such word in our dictionary"
            );
          }
        }
        )
        .catch((error) => {
          console.log(error);
        });
      setValue("");
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Type the word"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
        value={value}
      />
      <Button variant="outline-dark" type="submit">
        Search
      </Button>
    </Form>
  )
}
