import React, { useContext, useEffect } from "react";
import { housingNeedles } from "../constants/images";
import { ConfiguratorContext } from "../context/configuratorContext";
import tick from "../images/tick.png";

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
          <img className="" alt="" src={housingNeedles["housingSteel"]} />
        </div>

        <div className="selected icon radio-image">
          <img
            className="selected-image"
            alt=""
            src={housingNeedles["housingSteel"]}
          />
          <img className="selected-icon" alt="" src={tick} />
        </div>
        <span className="item-radio-label">{name}</span>
      </label>
    </>
  );
}
