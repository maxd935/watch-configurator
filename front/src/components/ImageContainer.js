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
    <div>
      {/* <img src={placeholderImage} /> */}
      {/* {imageContext.map((i) => {
        return (
          <div>
            <img src={i} />
          </div>
        );
      })} */}
      <img src={housingNeedles["housingSteel"]} />
      <img src={housingNeedles["needleSteel"]} />
      {/* <img src={housingNeedles["housingSteel"]} /> */}
    </div>
  );
}
