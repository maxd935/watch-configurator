import "./App.css";
import "./tailwind.min.css";
import Configurator from "./components/Configurator";
import { ConfiguratorContext } from "./context/configuratorContext";
import { useState } from "react";

function App() {
  const [context, setContext] = useState({
    material: "leather",
    style: ["thin"],
    color: [
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
  });
  return (
    <ConfiguratorContext.Provider value={[context, setContext]}>
      <Configurator />
    </ConfiguratorContext.Provider>
  );
}

export default App;
