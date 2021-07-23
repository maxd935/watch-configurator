import React, { useEffect, useContext, useState } from "react";
import ImageContainer from "./ImageContainer";
import OptionsList from "./OptionsList";
import dataJson from "../options.json";
import { ConfiguratorContext } from "../context/configuratorContext";
import ExtractContext from "../utils/extractContext";

const Configurator = () => {
  const [context, setContext] = useContext(ConfiguratorContext);
  const [images, setImages] = useState({});
  useEffect(() => {
    setContext(dataJson);
  }, []);

  useEffect(()=>{
    setImages(ExtractContext(context));
  },[context])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ImageContainer images={images} />
      <OptionsList />
    </div>
  );
};

export default Configurator;
