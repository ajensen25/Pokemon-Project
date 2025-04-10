import { useEffect, useRef, useState } from "react";
import "./Search.css";

function Search() {
  const cardInput = useRef(null);
  const [data, setData] = useState(false);

  const URL = "https://pokeapi.co/api/v2/pokemon";

  const onInputPressed = (e) => {
    if (e.key === "Enter" && cardInput.current.value.trim()) {
      search(cardInput.current.value);
    }
  };

  const search = async (input) => {
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon/${input}`;

      const res = await fetch(URL);
      const cardData = await res.json();
      setData({
        name: cardData.name,
        image: cardData.sprites.front_default,
        stats: cardData.stats,
        abilities: cardData.abilities,
      });
    } catch (err) {
      console.error("Failed to fetch API data", err);
    }
  };

  useEffect(() => {
    search("Pikachu");
  }, []);

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
      {data && (
        <div className="data-container">
          <img src={data.image} alt="" />
          <h2>{data.name}</h2>
          <div className="card-info">
            <ul className="stats">
              <li>
                <b>HP:</b>
                {data.stats[0].base_stat}
              </li>
              <li>
                <b>Attack:</b>
                {data.stats[1].base_stat}
              </li>
              <li>
                <b>Defense:</b>
                {data.stats[2].base_stat}
              </li>
              <li>
                <b>Spec. Attack:</b>
                {data.stats[3].base_stat}
              </li>
              <li>
                <b>Spec. Defense:</b>
                {data.stats[4].base_stat}
              </li>
              <li>
                <b>Speed:</b>
                {data.stats[5].base_stat}
              </li>
            </ul>
            <ul className="abilities">
              {data.abilities.map((ability, index) => (
                <li key={index}>
                  <b>Ability {index + 1}:</b> {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
