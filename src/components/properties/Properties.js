import "./properties.css";
import { properties } from "../../propertyData";
import PropertyCard from "./propertyCard/PropertyCard";
import Ip from "./ip";

export default function Properties() {
  return (
    <>
      <h2 className="heading">Explore homes</h2>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Ip />
      </div>
      <div className="properties">
        {properties.map((property, i) => {
          return <PropertyCard key={i} property={property}></PropertyCard>;
        })}
      </div>
    </>
  );
}
