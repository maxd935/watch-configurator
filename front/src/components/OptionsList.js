import React, { useContext } from "react";
import OptionsItem from "./OptionsItem";
import { ConfiguratorContext } from "../context/configuratorContext";

export default function OptionsList({ data }) {
  const [context, _] = useContext(ConfiguratorContext);
  data.collection.map((c) => console.log(c));
  return (
    <div className="flex flex-col flex-grow">
      <div>
        <div>Collection</div>
        <div className="flex">
          {data.collection.map((c) => {
            return <OptionsItem name={c} />;
          })}
        </div>
      </div>

      <div>
        <div>Dial</div>
        <div className="flex">
          {data.dial.map((c) => {
            return <OptionsItem name={c} />;
          })}
        </div>
      </div>

      <div>
        <div>Material</div>
        <div className="flex">
          {data.strap.map((c) => {
            return <OptionsItem name={c.material} strap={c}/>;
          })}
        </div>
      </div>

      <div>
        <div>Size</div>
        <div className="flex">
          {data.size.map((c) => {
            return <OptionsItem name={c} />;
          })}
        </div>
      </div>

      <div>
        <div>Style</div>
        <div className="flex">
          {context.style.map((c) => {
            return <OptionsItem name={c} />;
          })}
        </div>
      </div>

      <div>
        <div>Colour</div>
        <div className="flex">
          {context.color.map((c) => {
            return <OptionsItem name={c} />;
          })}
        </div>
      </div>
    </div>
  );
}
