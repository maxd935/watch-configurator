import React, { useContext, useEffect } from "react";
import  { dials, housingNeedles, straps } from "../constants/images";
import { ConfiguratorContext } from "../context/configuratorContext";
import tick from "../images/tick.png";
import {format} from "../utils/general";

export default function OptionsItem({ name, category, itemIndex, checked }) {
  const [context, setContext] = useContext(ConfiguratorContext);
  const updateChoices = () => {
    let newContext = {};
    if (typeof category != "string") {
      newContext = context;
      newContext[category[0]].options[context[category[0]].selected][
        category[1]
      ].selected = itemIndex;
      newContext = { ...newContext };
    } else {
      newContext = {
        ...context,
        [category]: {
          ...context[category],
          selected: itemIndex,
        },
      };
    }
    setContext(newContext);
  };
  const renderItem = () => {
    console.log("CONTEXT: ");
    console.log(context);
    let object;
    if  (typeof category != "string"){
      switch(category[1]) {
        // case "material":
      }
    } else {
      switch(category) {
        case "collection":
          object = housingNeedles["housing"+format(context?.collection?.options[itemIndex])];
          break
        case "dial":
          object = dials["dial"+format(context?.dial?.options[itemIndex])+
              (context?.dial?.options[itemIndex] == ("black" || "white") ? format(context?.collection?.options[itemIndex]) : "")]
            console.log("dial"+format(context?.dial?.options[itemIndex])+
                (context?.dial?.options[itemIndex] == ("black" || "white") ? format(context?.collection?.options[itemIndex]) : ""))
          console.log("dial"+format(context?.dial?.options[itemIndex]));
          break
        case "strap":
          object = straps["strap"+format(context?.strap?.options[itemIndex].material)+
          (context?.strap?.options[itemIndex].material === "rubber" ? "Large" : "")+
          format(context?.strap?.options[itemIndex].color)]
          break
      }
    }
    return object
  }
  return (
    <>
      <label clasName="radio-label">
        <input
          type="radio"
          name="collection"
          value={name}
          checked={checked}
          onChange={updateChoices}
          className="radio-input"
        ></input>
        <div className="not-selected icon radio-image">
          <img className="" alt="" src={renderItem()} />
        </div>

        <div className="selected icon radio-image">
          <img
            className="selected-image"
            alt=""
            src={renderItem()}
          />
          <img className="selected-icon" alt="" src={tick} />
        </div>
        {/* <span className="item-radio-label">{name}</span> */}
      </label>
    </>
  );
}
