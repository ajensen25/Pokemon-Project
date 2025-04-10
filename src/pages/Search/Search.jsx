import { useEffect, useRef, useState } from "react";
import "./Search.css";

function Search() {
  const cardInput = useRef(null);
  const errorDisplay = useRef(null);

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
        name: cardData.name[0].toUpperCase() + cardData.name.slice(1),
        image: cardData.sprites.front_default,
        stats: cardData.stats,
        abilities: cardData.abilities,
      });
      errorDisplay.current.innerText = "";
    } catch (err) {
      errorDisplay.current.innerText = "Pokemon not found.";
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
      <p ref={errorDisplay}></p>
      {data && (
        <div className="data-container">
          <img src={data.image} alt="" />
          <h2>{data.name}</h2>
          <div className="card-info">
            <ul className="stats">
              {data.stats.map((stat, index) => (
                <li key={index} id={"index" + index}>
                  <b>{stat.stat.name.toUpperCase()}:</b> {stat.base_stat}
                </li>
              ))}
            </ul>
            <ul className="abilities">
              {data.abilities.map((ability, index) => (
                <li key={index}>
                  <b>ABILITY {index + 1}:</b>{" "}
                  {ability.ability.name.toUpperCase()}
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
