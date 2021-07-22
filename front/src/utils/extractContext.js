import { useContext } from "react";
import { ConfiguratorContext } from "../context/configuratorContext";
import { format } from "./general";

export default function ExtractContext(context) {
  let collection = context?.collection?.options[context?.collection?.selected];
  let dial = context?.dial?.options[context?.dial?.selected];
  let material = context?.strap?.options[context?.strap?.selected].material;
  let size = context?.size?.options[context?.size?.selected];
  let style =
    context?.strap?.options[context?.strap?.selected].style?.options[
      context?.strap?.options[context?.strap?.selected].style?.selected
    ];
  let color =
    context?.strap?.options[context?.strap?.selected].color?.options[
      context?.strap?.options[context?.strap?.selected].color?.selected
    ];
  let housingName;
  let needleName;
  let buckleName;
  let dialName;
  let strapName;

  housingName = "housing" + format(collection);
  needleName = "needle" + format(collection);
  buckleName =
    "buckle" +
    format(material) +
    (material == "rubber" ? format(style) : "") +
    format(collection);
  console.log("buckle", buckleName);
  dialName =
    "dial" +
    format(dial) +
    ((collection == "gold" || collection == "steel") &&
    (dial == "black" || dial == "white")
      ? format(collection)
      : "");
  strapName =
    "strap" +
    format(material) +
    (material == "rubber" ? format(style) : "") +
    format(color);
  //   let output = {housing}

  return { housingName, needleName, buckleName, dialName, strapName };
}
