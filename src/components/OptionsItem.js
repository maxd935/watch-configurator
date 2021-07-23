import React, { useContext, useEffect } from "react";
import { dials, housingNeedles, sizes, straps } from "../constants/images";
import { ConfiguratorContext } from "../context/configuratorContext";
import tick from "../images/tick.png";
import { format } from "../utils/general";

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
    let object;
    if (typeof category != "string") {
      switch (category[1]) {
        // case "material":
        case "style":
          if (
            context?.strap?.options[context?.strap?.selected].material ==
            "rubber"
          ) {
            object =
              straps[
                "strap" +
                  format(
                    context?.strap?.options[context?.strap?.selected].material
                  ) +
                  format(
                    context?.strap?.options[context?.strap?.selected].style
                      .options[itemIndex]
                  ) +
                  "Black"
              ];
          } else {
            object =
              straps[
                "strap" +
                  format(
                    context?.strap?.options[context?.strap?.selected].material
                  ) +
                  "Black"
              ];
          }
          break;
        case "color":
          if (
            context?.strap?.options[context?.strap?.selected].material ==
            "rubber"
          ) {
            object =
              straps[
                "strapRubber" +
                  format(
                    context?.strap?.options[context?.strap?.selected].style
                      ?.options[
                      context?.strap?.options[context?.strap?.selected].style
                        ?.selected
                    ]
                  ) +
                  format(
                    context?.strap?.options[context?.strap?.selected].color
                      ?.options[itemIndex]
                  )
              ];
          } else {
            object =
              straps[
                "strapLeather" +
                  format(
                    context?.strap?.options[context?.strap?.selected].color
                      ?.options[itemIndex]
                  )
              ];
          }
          break;
      }
    } else {
      switch (category) {
        case "collection":
          object =
            housingNeedles[
              "housing" + format(context?.collection?.options[itemIndex])
            ];
          break;
        case "dial":
          if (
            context?.dial?.options[itemIndex] == "black" ||
            context?.dial?.options[itemIndex] == "white"
          ) {
            object =
              dials[
                "dial" +
                  format(context?.dial?.options[itemIndex]) +
                  format(context?.collection?.options[itemIndex])
              ];
          } else {
            object = dials["dial" + format(context?.dial?.options[itemIndex])];
          }
          break;
        case "strap":
          if (context?.strap?.options[itemIndex].material == "rubber") {
            object =
              straps[
                "strap" +
                  format(context?.strap?.options[itemIndex].material) +
                  "Large" +
                  format(
                    context?.strap?.options[itemIndex].color.options[
                      context?.strap?.options[itemIndex].color.selected
                    ]
                  )
              ];
          } else {
            object =
              straps[
                "strap" +
                  format(context?.strap?.options[itemIndex].material) +
                  format(
                    context?.strap?.options[itemIndex].color.options[
                      context?.strap?.options[itemIndex].color.selected
                    ]
                  )
              ];
          }
          break;
        case "size":
          if (name == "sm") {
            object = sizes.SM;
          } else {
            object = sizes.XL;
          }
          break;
      }
    }
    return object;
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
          <img className="" alt="" src={renderItem()} />
        </div>

        <div className="selected icon radio-image">
          <img className="selected-image" alt="" src={renderItem()} />
          <img className="selected-icon" alt="" src={tick} />
        </div>
        {/* <span className="item-radio-label">{name}</span> */}
      </label>
    </>
  );
}
