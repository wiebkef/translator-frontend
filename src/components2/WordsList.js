import { NavLink } from "react-router-dom";

export default function WordsList({ words, isLoaded }) {
  return (
    <div className="wordsList">
      {/* {isLoaded ? ( */}
        <ul style={{ listStyle: "none" }}>
          {words.map((m) => {
            return <li key={m._id}><NavLink to={`/${m.german_word}`} style={{textDecoration: "none", color: "inherit"}}>{m.german_word}</NavLink></li>;
          })}
        </ul>
      {/* ) : (
        ""
      )} */}
    </div>
  );
}
