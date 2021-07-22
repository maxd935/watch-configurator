import { useContext } from "react";
import { ConfiguratorContext } from "../context/configuratorContext";

export default function IsChecked(category, selectIndex) {
  console.log('triggered');
  const [context, _] = useContext(ConfiguratorContext);
  if (typeof category == "string") {
    if (context[category]["selected"] == selectIndex) {
      return true;
    } else return false;
  } else {
    console.log(category)
    console.log(context[category[0]]["options"][context[category[0]]["selected"]][category[1]]["selected"])
    if (context[category[0]]["options"][context[category[0]]["selected"]][category[1]]["selected"] == selectIndex) {
      return true;
    } else return false;
  }
}
