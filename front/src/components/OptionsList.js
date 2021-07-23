import React, { useContext } from "react";
import OptionsItem from "./OptionsItem";
import { ConfiguratorContext } from "../context/configuratorContext";
import IsChecked from "../utils/isChecked";

export default function OptionsList() {
  const [context, _] = useContext(ConfiguratorContext);
  return (
    <div className="tabs" style={{ maxWidth: "300px" }}>
      <div className="tab">
        <input type="radio" id="rd1" name="rd" className="item-checkbox" />
        <label class="tab-label" for="rd1">
          Collection
        </label>
        <div className="flex tab-content">
          <form className="flex">
            {context?.collection?.options?.map((c, index) => {
              // console.log("index",index)
              return (
                <OptionsItem
                  name={c}
                  category="collection"
                  itemIndex={index}
                  checked={IsChecked("collection", index)}
                />
              );
            })}
          </form>
        </div>
      </div>

      <div className="tab">
        <input type="radio" id="rd2" name="rd" className="item-checkbox" />
        <label class="tab-label" for="rd2">
          Dial
        </label>
        <div className="flex tab-content">
          <form className="flex">
            {context?.dial?.options?.map((c, index) => {
              return (
                <OptionsItem
                  name={c}
                  category="dial"
                  itemIndex={index}
                  checked={IsChecked("dial", index)}
                />
              );
            })}
          </form>
        </div>
      </div>

      <div className="tab">
        <input type="radio" id="rd3" name="rd" className="item-checkbox" />
        <label class="tab-label" for="rd3">
          Material
        </label>
        <div className="flex tab-content">
          <form className="flex">
            {context?.strap?.options.map((c, index) => {
              const checked = IsChecked("strap", index);
              console.log("checked: " + checked);
              return (
                <OptionsItem
                  name={c.material}
                  category={"strap"}
                  itemIndex={index}
                  checked={checked}
                />
              );
            })}
          </form>
        </div>
      </div>

      <div className="tab">
        <input type="radio" id="rd4" name="rd" className="item-checkbox" />
        <label class="tab-label" for="rd4">
          Size
        </label>
        <div className="flex tab-content">
          <form className="flex">
            {context?.size?.options?.map((c, index) => {
              return (
                <OptionsItem
                  name={c}
                  category={"size"}
                  itemIndex={index}
                  checked={IsChecked("size", index)}
                />
              );
            })}
          </form>
        </div>
      </div>

      <div className="tab">
        <input type="radio" id="rd5" name="rd" className="item-checkbox" />
        <label class="tab-label" for="rd5">
          Style
        </label>
        <div className="flex tab-content">
          <form className="flex">
            {context?.strap?.options[context.strap.selected].style.options.map(
              (c, index) => {
                return (
                  <OptionsItem
                    name={c}
                    category={["strap", "style"]}
                    itemIndex={index}
                    checked={IsChecked(["strap", "style"], index)}
                  />
                );
              }
            )}
          </form>
        </div>
      </div>

      <div className="tab">
        <input type="radio" id="rd6" name="rd" className="item-checkbox" />
        <label class="tab-label" for="rd6">
          Colour
        </label>
        <div className="flex tab-content">
          <form className="flex">
            {context?.strap?.options[context.strap.selected].color.options.map(
              (c, index) => {
                return (
                  <OptionsItem
                    name={c}
                    category={["strap", "color"]}
                    itemIndex={index}
                    checked={IsChecked(["strap", "color"], index)}
                  />
                );
              }
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
