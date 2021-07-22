import { useContext } from "react";
import { ImageContext } from "../context/imageContext";
import {
  dials,
  housingNeedles,
  strapLeather,
  strapRubber,
} from "../constants/images";
import ExtractContext from "../utils/extractContext";

export default function ImageContainer() {
  const [imageContext, _] = useContext(ImageContext);
  console.log(ExtractContext());
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
        <img
          src={housingNeedles["housingSteel"]}
          style={{
            position: "relative",
            top: "0px",
            left: "0px",
            zIndex: "1",
            maxHeight: "100%",
          }}
        />
        <img
          src={dials["dialGreen"]}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "2",
            maxHeight: "100%",
          }}
        />
        <img
          src={strapLeather["strapLeatherBlack"]}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "3",
            maxHeight: "100%",
          }}
        />
        <img
          src={strapLeather["buckleLeatherGold"]}
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
}
