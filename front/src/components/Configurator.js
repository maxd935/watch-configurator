import React, { useState, useEffect } from "react";
import OptionsList from "./OptionsList";

const Configurator = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    // setData(dataJson);
  });
  return (
    <>
      <OptionsList />
    </>
  );
};

export default Configurator;
