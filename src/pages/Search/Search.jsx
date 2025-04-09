import { useRef, useState } from "react";
import "./Search.css";

function Search() {
  const cardInput = useRef(null);
  const [data, setData] = useState(false);

  const URL = "https://pokeapi.co/api/v2/pokemon";

  const onInputPressed = (e) => {
    if (e.key === "Enter" && cardInput.current.value.trim()) {
      search();
    }
  };

  const search = async () => {
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon/${cardInput.current.value}`;

      const res = await fetch(URL);
      const cardData = await res.json();
      console.log(cardData);
    } catch (err) {
      console.error("Failed to fetch API data", err);
    }
  };

  return (
    <div className="search">
      <h1>Search for Cards</h1>
      <p>
        In the input box below, type in a Pokemon name and see it's statistics!
      </p>
      <input
        type="text"
        placeholder="Pikachu"
        ref={cardInput}
        onKeyDown={onInputPressed}
      />
      <p>JSON</p>
    </div>
  );
}

export default Search;
