import React, { useEffect, useState } from "react";
import "./Screen.css";

const colors = {
  синий: "blue",
  красный: "red",
  зеленый: "green",
  чёрный: "black",
  белый: "white",
  серый: "grey",
  желтый: "yellow",
  оранжевый: "orange",
  розовый: "pink",
  коричневый: "pink",
};

const Screen = () => {
  const rec = window.webkitSpeechRecognition
    ? new window.webkitSpeechRecognition()
    : new window.SpeechRecognition();

  rec.lang = "ru-RU";

  const [color, setColor] = useState();

  useEffect(() => {
    rec.start();
    rec.onresult = (e) => {
      const res = e.results[e.resultIndex];
      const str = res[0].transcript;
      for (let col in colors) {
        if (col === str) {
          setColor(colors[col]);
        }
      }
    };
  }, [color]);

  return (
    <div className="screen" style={{ backgroundColor: color }}>
      выбери цвет фона (назови цвет )
    </div>
  );
};

export default Screen;
