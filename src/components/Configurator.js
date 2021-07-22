import React, { useState, useEffect } from "react";
import ImageContainer from "./ImageContainer";
import OptionsList from "./OptionsList";
import dataJson from "../options.json";

const Configurator = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    // console.log("setdata with",dataJson)
    // setData(dataJson);
  }, []);
  return (
    <div className="h-screen flex justify-center items-center">
      <ImageContainer />
      <OptionsList data={dataJson} />
    </div>
  );
};

export default Configurator;
