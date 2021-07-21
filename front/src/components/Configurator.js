import React, { useState, useEffect } from "react";
import ImageContainer from "./ImageContainer";
import OptionsList from "./OptionsList";

const Configurator = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    // setData(dataJson);
  });
  return (
    <>
      <ImageContainer />
      <OptionsList />
    </>
  );
};

export default Configurator;
