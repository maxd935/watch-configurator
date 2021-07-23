import React, { useContext, useEffect } from "react";
import { ConfiguratorContext } from "../context/configuratorContext";

export default function OptionsItem({ name, category, itemIndex, checked }) {
  const [context, setContext] = useContext(ConfiguratorContext);
  const updateChoices = () => {
    let newContext = {};
    if (typeof category != "string") {
      newContext = context;
      newContext[category[0]].options[context[category[0]].selected][
        category[1]
      ].selected = itemIndex;
      newContext = {...newContext}
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
    <div key={name} className="px-2">
      <label>{name}</label>
      <input
        type="radio"
        name="collection"
        value={name}
        checked={checked}
        onChange={updateChoices}
      ></input>
    </div>
  );
}
