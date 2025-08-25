import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import playIcon from "./assets/icon_play.svg";
import Button from "./components/Button";
import ButtonBase from "@mui/material/ButtonBase";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="font-bold text-2xl">25:00</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ButtonBase>Button Base</ButtonBase>
        <Button
          variant="contained"
          size="large"
          className="!ml-8 w-40"
        >
          <img src={playIcon} alt="" />
          Play
        </Button>
        <Button
          variant="contained"
          size="large"
          className="!ml-8"
          startIcon={<img src={playIcon} alt="" />}
        >
          Test Button
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
