import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import Home from "./Home";

function App() {
  const [color, setColor] = useState("");

  const colorMode = (data) => {
    console.log(data);
    if (data === "dark") {
      setColor("light");
    } else {
      setColor("dark");
    }

    return data;
  };

  return (
    <>
      <Navbar name="Text-Utils" color={colorMode} />
      <Home color={color} />
    </>
  );
}

export default App;
