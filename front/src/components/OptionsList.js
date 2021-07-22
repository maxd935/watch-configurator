import React, { useContext } from "react";
import OptionsItem from "./OptionsItem";
import { ConfiguratorContext } from "../context/configuratorContext";
import IsChecked from "../utils/isChecked";

export default function OptionsList() {
  const [context, _] = useContext(ConfiguratorContext);
  return (
    <div className="flex flex-col flex-grow">
      <div>
        <div>Collection</div>
        <div className="flex">
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

      <div>
        <div>Dial</div>
        <div className="flex">
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

      <div>
        <div>Material</div>
        <div className="flex">
          <form className="flex">
            {context?.strap?.options.map((c, index) => {
              return (
                <OptionsItem
                  name={c.material}
                  category={"strap"}
                  itemIndex={index}
                  strap={c}
                  checked={IsChecked("strap", index)}
                />
              );
            })}
          </form>
        </div>
      </div>

      <div>
        <div>Size</div>
        <div className="flex">
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

      <div>
        <div>Style</div>
        <div className="flex">
          <form className="flex">
            {context?.strap?.options[context.strap.selected].style.options.map(
              (c, index) => {
                return (
                  <OptionsItem
                    name={c}
                    category={["strap", "style"]}
                    itemIndex={index}
                    checked={IsChecked(["strap","style"], index)}
                  />
                );
              }
            )}
          </form>
        </div>
      </div>

      <div>
        <div>Colour</div>
        <div className="flex">
          <form className="flex">
            {context?.strap?.options[context.strap.selected].color.options.map(
              (c, index) => {
                return (
                  <OptionsItem
                    name={c}
                    category={["strap", "color"]}
                    itemIndex={index}
                    checked={IsChecked(["strap","color"], index)}
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
