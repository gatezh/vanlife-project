import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function HostVanDetail() {
  const [hostVan, setHostVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setHostVan(data.vans));
  }, []);

  if (!hostVan) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <Link to="/host/vans">⬅️ Back to your Vans list</Link>
      <div>
        <img src={hostVan.imageUrl} width={150} />
        <h2>{hostVan.name}</h2>
        <p>{hostVan.price}</p>
        <p>{hostVan.type}</p>
      </div>
    </>
  );
}
