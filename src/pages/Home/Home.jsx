import bulbasaur from "../../assets/bulbasaur.png";
import charmander from "../../assets/charmander.png";
import squirtle from "../../assets/squirtle.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Pokemon Information</h1>
      <p>
        Get information on all your favorite Pokemon cards! Press the search
        button below to begin searching.
      </p>
      <button>Search</button>
      <div className="card-container">
        <img src={bulbasaur} alt="Bulbasaur" />
        <img src={charmander} alt="Charmander" />
        <img src={squirtle} alt="Squirtle" />
      </div>
    </div>
  );
}

export default Home;
