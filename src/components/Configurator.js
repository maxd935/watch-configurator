import React, { useEffect, useContext, useState } from "react";
import ImageContainer from "./ImageContainer";
import OptionsList from "./OptionsList";
import dataJson from "../options.json";
import { ConfiguratorContext } from "../context/configuratorContext";
import { ImageContext } from "../context/imageContext";

const Configurator = () => {
  const [context, setContext] = useContext(ConfiguratorContext);
  const [imageContext, setImageContext] = useState([
    "../images/watches/dials/dial-black-chrome.png",
  ]);

  useEffect(() => {
    setContext(dataJson);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ImageContext.Provider value={[imageContext, setImageContext]}>
        <ImageContainer />
      </ImageContext.Provider>
      <OptionsList />
    </div>
  );
};

export default Configurator;
