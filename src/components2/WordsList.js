export default function WordsList({ words, isLoaded }) {
  return (
    <div className="wordsList">
      {/* {isLoaded ? ( */}
        <ul style={{ listStyle: "none" }}>
          {words.map((m) => {
            return <li key={m._id}>{m.german_word}</li>;
          })}
        </ul>
      {/* ) : (
        ""
      )} */}
    </div>
  );
}
