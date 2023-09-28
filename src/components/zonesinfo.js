import React, { useState } from "react";
import "../style/zonepage.css";
import Zonesapi from "./zonesapi.js";
import Detailzone from "./zonefor.js";

const Zoneinfo = () => {
  let [zoneData] = useState(Zonesapi|| []);
  return <Detailzone zoneData={zoneData} />;
};

export default Zoneinfo;