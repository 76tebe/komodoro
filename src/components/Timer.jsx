import { useEffect, useMemo, useRef, useState } from "react";
import Button from "./Button";
import playIcon from "../assets/icon_play.svg";
import pauseIcon from "../assets/icon_pause.svg";
import restartIcon from "../assets/icon_restart.svg";
import sfxUrl from "../assets/audio/nakime_biwa.m4a";


export default function Timer({
  modeIndex,
  durations,
  onNext,
  onRestartRequest,
  musicRef,
  musicKey,
  musicVolume,
}) {
  const [seconds, setSeconds] = useState(durations[modeIndex]);
  const [running, setRunning] = useState(false);
  const tickRef = useRef(null);

  useEffect(() => {
    console.log("[Timer] mount");

    return () => {
      console.log("[Timer] unmount");
    };
  }, []);

  useEffect(() => {
    console.log(
      "[Timer] modeIndex",
      modeIndex,
      "duration",
      durations[modeIndex]
    );
    setSeconds(durations[modeIndex]);
    setRunning(false);
  }, [modeIndex, durations]);
  
  useEffect(() => {
    if (running) {
      console.log("[Timer] start interval");
      tickRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            clearInterval(tickRef.current);
            onNext();
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      clearInterval(tickRef.current);
    }

    return () => {
      clearInterval(tickRef.current);
    };
  }, [running]);

  // useEffect(() => {
  //   if (!musicRef.current) {
  //     musicRef.current = new Audio();
  //   }
  //   if (musicKey !== "off") {
  //     musicRef.current.src = `./assets/audio/music/${musicKey}.mp3`;
  //     musicRef.current.loop = true;
  //     musicRef.current.volume = typeof musicVolume === "number" ? musicVolume : 0.5;
  //     musicRef.current.play().catch(() => {});
  //   } else {
  //     musicRef.current.pause();
  //   }
  // }, [musicKey, musicVolume]);

  const formatTime = useMemo(() => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }, [seconds]);

  return (
    <div className="text-center my-8">
      <div className="text-[10rem] font-bold mb-6">{formatTime}</div>
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => {
            console.log("[Timer] toggle", !running);
            setRunning(!running);
            
            const sfx = new Audio(sfxUrl);
            sfx.currentTime = 0;
            sfx.volume = 0.2;
            sfx.play().then(() => console.log("sfx played")).catch(err => console.error("sfx failed", err))
          }}
        >
          {running ? (
            <img src={pauseIcon} alt="" />
          ) : (
            <img src={playIcon} alt="" />
          )}
        </Button>
        <Button iconOnly={true} onClick={() => {
            console.log("[Timer] restart click");
            if (onRestartRequest(running)) {
                setSeconds(durations[modeIndex]);
                setRunning(false);
            }
        }} >
          <img src={restartIcon} alt="" />
        </Button>
      </div>
    </div>
  );
}
