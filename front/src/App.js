import "./App.css";
import "./tailwind.min.css";
import Configurator from "./components/Configurator";
import { ConfiguratorContext } from "./context/configuratorContext";
import { useState } from "react";

function App() {
  const [context, setContext] = useState({
    collection: { options: ["steel", "gold"], selected: 0 },
    dial: {
      options: ["red", "brown", "yellow", "purple"],
      selected: 0,
    },
    size: { options: ["sm", "xl"], selected: 0 },
    strap: {
      options: [
        {
          material: "leather",
          style: { options: ["thin"], selected: 0 },
          color: {
            options: [
              "purple",
              "green",
              "red",
              "pink",
              "brown",
              "blue",
              "gray",
              "dark-blue",
              "white",
              "black",
            ],
            selected: 0,
          },
        },
        {
          material: "rubber",
          style: { options: ["thin", "large"], selected: 0 },
          color: {
            options: [
              "dark-blue",
              "white",
              "black",
              "orange",
              "red",
              "gray",
              "kaki",
              "brown",
            ],
            selected: 0,
          },
        },
      ],
      selected: 0,
    },
  });
  return (
    <ConfiguratorContext.Provider value={[context, setContext]}>
      <Configurator />
    </ConfiguratorContext.Provider>
  );
}

export default App;
