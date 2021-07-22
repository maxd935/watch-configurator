import React, { useState, useEffect, useContext } from "react";
import ImageContainer from "./ImageContainer";
import OptionsList from "./OptionsList";
import dataJson from "../options.json";
import { ConfiguratorContext } from "../context/configuratorContext";

const Configurator = () => {
  const [context, setContext] = useContext(ConfiguratorContext);

  useEffect(() => {
    // setContext(dataJson);
  }, []);
  return (
    <div className="h-screen flex justify-center items-center">
      <ImageContainer />
      <OptionsList />
    </div>
  );
};

export default Configurator;
