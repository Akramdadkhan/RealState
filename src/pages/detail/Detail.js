import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./detail.css";

export default function Detail() {
  const location = useLocation();
  const property = location.state;

  return (
    <>
      <Link className="back-link" to="/">
        <button className="back-btn">
          <h3>Back</h3>
        </button>
      </Link>
      <div className="detailWrapper">
        <div className="detail">
          <div className="detailImg">
            <img src={property.img}></img>
          </div>
          <div className="detailText">
            <h3>{property.name}</h3>
            <p>{property.des}</p>
            <h5>Description:</h5>
            <p>{property.desText}</p>
          </div>
        </div>
      </div>
    </>
  );
}
