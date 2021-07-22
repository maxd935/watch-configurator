import { useContext } from "react";
import { ImageContext } from "../context/imageContext";
import { dials } from "../constants/images";

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
      <img src={dials.dialBlackChrome} />
    </div>
  );
}
