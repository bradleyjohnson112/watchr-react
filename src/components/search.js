import { forwardRef, useState } from "react";
import "./search.css";
import { TfiSearch, TfiClose } from "react-icons/tfi";

const Search = ({ addShow, isSearching, showModal, hideModal }) => {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (query.trim() !== "") {
      try {
        const url = `https://api.tvmaze.com/search/shows?q=${query}`;
        const res = await fetch(url);
  
        if (!res.ok) return alert(`${res.status} ${res.statusText}`);
        const data = await res.json();
    
        const temp = data.map(obj => {
          return {
            title: obj.show.name,
            apiId: obj.show.id,
          };
        });
    
        setQuery("");
        setShows(temp);
        showModal();
      } catch (err) {
        throw err;
      }
    }
  }

  function onClick(show) {
    addShow(show);
    const newShows = shows.filter((showTemp) => showTemp.apiId !== show.apiId);
    setShows(newShows);
  }

  const modal = 
  <div className="search-bar__modal">
    <ul className="search-bar__list">
      {shows.map(show => (
        <li 
          key={show.apiId} 
          className="search-bar__item"
          onClick={() => onClick(show)}
        >
          {show.title}
        </li>
      ))}
    </ul>
  </div>

  return (
    <article className="search-bar">
      <form
        className="search-bar__form"
        onSubmit={onSubmit}
      >
        { isSearching &&
          <span 
            className="search-bar__close-btn"
            onClick={hideModal}
          >
            <TfiClose style={{ fontSize: "1.1rem" }} /> 
          </span>
        }
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search"
          value={query}
          onChange={onChange}
        />
        <button className="search-bar__btn">
          <TfiSearch className="search-bar__btn-icon"/>
        </button>
      </form>
      { isSearching && modal }
    </article>
  )
};

export default Search;