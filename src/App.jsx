import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Timer from "./components/Timer";
import Notes from "./components/Notes";
import sfxUrl from "./assets/audio/nakime_biwa.m4a";

function App() {
  const [tab, setTab] = useLocalStorage("tab", 0);
  const [focus, setFocus] = useLocalStorage("focus", 25);
  const [shortBreak, setShortBreak] = useLocalStorage("shortBreak", 5);
  const [longBreak, setLongBreak] = useLocalStorage("longBreak", 15);
  const [intervals, setIntervals] = useLocalStorage("intervals", 4);
  const [currentInterval, setCurrentInterval] = useLocalStorage(
    "currentInterval",
    1
  );
  const [notes, setNotes] = useLocalStorage("notes", "");
  const [music, setMusic] = useLocalStorage("music", "off");
  const [volume, setVolume] = useLocalStorage("volume", 0.5);
  const [bgImage, setBgImage] = useLocalStorage("bgImage", "none");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [running, setRunning] = useState(false);

  const musicRef = useRef(null);

  const durations = useMemo(
    () => [
      Math.max(1, Number(focus)) * 60,
      Math.max(1, Number(shortBreak)) * 60,
      Math.max(1, Number(longBreak)) * 60,
    ],
    [focus, shortBreak, longBreak]
  );

  useEffect(() => {
    console.log("[App] mounted");  
  }, []);
  useEffect(() => {
    console.log("[App] tab:", tab);  
  }, [tab]);
  useEffect(() => {
    console.log("[App] intervals:", currentInterval, "/", intervals);  
  }, [currentInterval, intervals]);
  useEffect(() => {
    console.log("[App] music:", music, "volume:", volume);  
  }, [music, volume]);

  // issue: race condition. onNext -> setRunning(true) -> onNext
  const handleNext = () => {
    const sfx = new Audio(sfxUrl);
    sfx.volume = 0.2;
    sfx.play();
    console.log("[App] handleNext from tab", tab);
    if (tab === 0) {
      if (currentInterval === intervals) {
        setTab(2);
        setCurrentInterval(1);
      } else {
        setTab(1);
        setCurrentInterval(currentInterval + 1);
      }
    } else {
      setTab(0);
    }
    setTimeout(() => {
      setRunning(true);
    }, 0);
  }

  const handleRestart = (isRunning) => {
    console.log("[App] restart requested. running:", isRunning);
    if (isRunning && !window.confirm("Timer is running. Restart?")) {
      return false;
    }
    return true;
  }

  return (
    <>
      <Timer
        key={`timer-${tab}-${durations[tab]}`}
        modeIndex={tab}
        durations={durations}
        running={running}
        setRunning={setRunning}
        onNext={() => handleNext()}
        onRestartRequest={(running) => handleRestart(running)}
        musicRef={musicRef}
        musicKey={music}
        musicVolume={volume}
      />
      <p>
      Interval: {currentInterval}/{intervals}
      </p>
      <Notes value={notes} onChange={setNotes} />
    </>
  );
}

export default App;
