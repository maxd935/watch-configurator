import { useContext } from "react";
import { ConfiguratorContext } from "../context/configuratorContext";

export default function ExtractContext() {
  const [context, _] = useContext(ConfiguratorContext);
  let collection = context.collection.options[context.collection.selected];
  let dial = context.dial.options[context.dial.selected];
  let material = context.strap.options[context.strap.selected].material;
  let size = context.size.options[context.size.selected];
  let style =
    context.strap.options[context.strap.selected].style.options[
      context.strap.options[context.strap.selected].style.selected
    ];
  let color =
  context.strap.options[context.strap.selected].color.options[
    context.strap.options[context.strap.selected].color.selected
  ]
//   let housingName;
//   let buckleName;
//   let dial;
//   let needles;

//   let output = {housing}

  return { collection, dial, material, size, style, color };
}
