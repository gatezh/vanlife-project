import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans || []))
      .catch(() => setVans([]));
  }, []);

  const displayVans = typeFilter
    ? vans.filter((van) => (van.type === typeFilter ? van : null))
    : vans;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <button
        onClick={() => handleFilterChange("type", "simple")}
        className={`van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`}
      >
        Simple
      </button>
      <button
        onClick={() => handleFilterChange("type", "luxury")}
        className={`van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`}
      >
        Luxury
      </button>
      <button
        onClick={() => handleFilterChange("type", "rugged")}
        className={`van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`}
      >
        Rugged
      </button>
      {typeFilter ? (
        <button
          onClick={() => setSearchParams({})}
          className="van-type clear-filters"
        >
          Clear
        </button>
      ) : null}
      <div className="van-list">
        {displayVans.map((van) => (
          <Link
            to={van.id}
            key={van.id}
            state={{ search: `?${searchParams.toString()}` }}
          >
            <div className="van-tile">
              <img src={van.imageUrl} />
              <div className="van-info">
                <h3>{van.name}</h3>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
