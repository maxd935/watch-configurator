import React, { useContext } from "react";
import OptionsItem from "./OptionsItem";
import { ConfiguratorContext } from "../context/configuratorContext";

export default function OptionsList({ data }) {
  const [context, _] = useContext(ConfiguratorContext);
  data.collection.map((c) => console.log(c));
  return (
    <div className="tabs">
      <div className="tab">
        <input type="radio" id="rd1" name="rd" className="item-checkbox" />
        <label class="tab-label" for="rd1">
          Collection
        </label>
        <div className="flex tab-content">
          {data.collection.map((c) => {
            return <OptionsItem name={c} />;
          })}
        </div>
      </div>

      <div className="tab">
        <input type="radio" id="rd2" name="rd" className="item-checkbox" />
        <label class="tab-label" for="rd2">
          Dial
        </label>
        <div className="flex tab-content">
          {data.dial.map((c) => {
            return <OptionsItem name={c} />;
          })}
        </div>
      </div>
    </div>

    //   <div className="tabs">
    //   <div className= "tab">
    //       <input type="radio" id="rd1" name="rd" class="item-checkbox"/>
    //       <label class="tab-label" for="rd1">Material</label>
    //     <div className="flex">
    //       {data.strap.map((c) => {
    //         return <OptionsItem name={c.material} strap={c}/>;
    //       })}
    //     </div>
    //   </div>

    //   <div className="tabs">
    //   <div className= "tab">
    //       <input type="radio" id="rd1" name="rd" class="item-checkbox"/>
    //       <label class="tab-label" for="rd1">Size</label>
    //     <div className="flex">
    //       {data.size.map((c) => {
    //         return <OptionsItem name={c} />;
    //       })}
    //     </div>
    //   </div>

    //   <div className="tabs">
    //   <div className= "tab">
    //       <input type="radio" id="rd1" name="rd" class="item-checkbox"/>
    //       <label class="tab-label" for="rd1">Style</label>
    //     <div className="flex">
    //       {context.style.map((c) => {
    //         return <OptionsItem name={c} />;
    //       })}
    //     </div>
    //   </div>

    //   <div className="tabs">
    //   <div className= "tab">
    //       <input type="radio" id="rd1" name="rd" class="item-checkbox"/>
    //       <label class="tab-label" for="rd1">Colour</label>
    //     <div className="flex">
    //       {context.color.map((c) => {
    //         return <OptionsItem name={c} />;
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}

{
  /* <div class="tabs">
<div class="tab">
  <input type="radio" id="rd1" name="rd" class="item-checkbox">
  <label class="tab-label" for="rd1">Item 1</label>
  <div class="tab-content">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
  </div>
</div>
<div class="tab">
  <input type="radio" id="rd2" name="rd" class="item-checkbox">
  <label class="tab-label" for="rd2">Item 2</label>
  <div class="tab-content">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
  </div>
</div>
<div class="tab">
  <input type="radio" id="rd3" name="rd" class="item-checkbox">
  <label for="rd3" class="tab-close">Close others &times;</label>
</div>
</div> */
}
