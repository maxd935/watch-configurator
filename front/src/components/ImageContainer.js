import { useContext } from "react";
import { ImageContext } from "../context/imageContext";
import {
  dials,
  housingNeedles,
  strapLeather,
  strapRubberLarge,
  strapRubberThin,
} from "../constants/images";

export default function ImageContainer() {
  const [imageContext, _] = useContext(ImageContext);
  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        top: "0",
        left: "0",
      }}
    >
      {/* <img src={placeholderImage} /> */}
      {/* {imageContext.map((i) => {
        return (
          <div>
            <img src={i} />
          </div>
        );
      })} */}
      <img
        src={housingNeedles["housingSteel"]}
        style={{ position: "relative", top: "0px", left: "0px", zIndex: "1" }}
      />
      <img
        src={dials["dialGreen"]}
        style={{ position: "absolute", top: "0px", left: "0px", zIndex: "2" }}
      />
      <img
        src={strapLeather["strapLeatherBlack"]}
        style={{ position: "absolute", top: "0px", left: "0px", zIndex: "3" }}
      />
      <img
        src={strapLeather["buckleLeatherGold"]}
        style={{ position: "absolute", top: "0px", left: "0px", zIndex: "4" }}
      />
      {/* <img src={housingNeedles["housingSteel"]} /> */}
    </div>
  );
}
