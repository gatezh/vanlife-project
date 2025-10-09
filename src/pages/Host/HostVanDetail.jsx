import { useState, useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const [hostVan, setHostVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setHostVan(data.vans));
  }, []);

  if (!hostVan) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={hostVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${hostVan.type}`}>
              {hostVan.type}
            </i>
            <h3>{hostVan.name}</h3>
            <h4>${hostVan.price}/day</h4>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
}
