import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans || []))
      .catch(() => setVans([]));
  }, []);

  const displayVans = typeFilter
    ? vans.filter((van) => (van.type === typeFilter ? van : null))
    : vans;

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {displayVans.map((van) => (
          <Link to={`/vans/${van.id}`} key={van.id}>
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
