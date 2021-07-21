import React, { useContext } from "react";
import { ConfiguratorContext } from "../context/configuratorContext";

export default function OptionsItem({ name, strap }) {
  const [context, setContext] = useContext(ConfiguratorContext);
  console.log(name);

  const updateChoices = () => {
    console.log(strap)
    strap ? setContext(strap) : console.log("");
  };
  return (
    <div key={name} className="px-2" onChange={updateChoices}>
      <label>{name}</label>
      <input type="radio" name="collection" value={name}></input>
    </div>
  );
}
