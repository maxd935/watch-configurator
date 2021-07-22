import { useContext, useEffect, useState } from "react";
import {
  dials,
  housingNeedles,
  straps
} from "../constants/images";
import { ConfiguratorContext } from "../context/configuratorContext";
import ExtractContext from "../utils/extractContext";

const ImageContainer = ({images}) => {
  const [context,setContext] = useContext(ConfiguratorContext)
  console.log(images)
  return (
    <div className="flex" style={{ maxWidth: "38%" }}>
      <div
        style={{
          // display: "inline-block",
          position: "relative",
          top: "0",
          left: "0",
          maxHeight: "600px",
        }}
      >
        {/* {console.log(images)} */}
        <img
          src={housingNeedles[images.housingName]}
          style={{
            position: "relative",
            top: "0px",
            left: "0px",
            zIndex: "1",
            maxHeight: "100%",
          }}
        />
        <img
          src={dials[images.dialName]}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "2",
            maxHeight: "100%",
          }}
        />
        <img
          src={straps[images.strapName]}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "3",
            maxHeight: "100%",
          }}
        />
        <img
          src={straps[images.buckleName]}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "4",
            maxHeight: "100%",
          }}
        />
        <img
          src={housingNeedles[images.needleName]}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "4",
            maxHeight: "100%",
          }}
        />
        {/* <img src={housingNeedles["housingSteel"]} /> */}
      </div>
    </div>
  );
};

export default ImageContainer;
