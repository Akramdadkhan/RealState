import { useState, useEffect } from "react";
import axios from "axios";

function Ip() {
  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ip">
      <p>
        Your IP Address is : <b> {ip}</b>
      </p>
    </div>
  );
}

export default Ip;
