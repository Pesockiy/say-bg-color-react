import React, { useEffect, useState } from "react";
import "./Screen.css";

const colors = {
  синий: "blue",
  красный: "red",
  зелёный: "green",
  чёрный: "black",
  белый: "white",
  серый: "grey",
  жёлтый: "yellow",
  оранжевый: "orange",
  розовый: "pink",
  коричневый: "brown",
};

const Screen = () => {
  const rec = window.webkitSpeechRecognition
    ? new window.webkitSpeechRecognition()
    : new window.SpeechRecognition();

  rec.lang = "ru-RU";

  const [color, setColor] = useState();
  const [choosedColors, setChooseColors] = useState([]);

  useEffect(() => {
    rec.start();
    rec.onresult = (e) => {
      (() => {
        const res = e.results[e.resultIndex];
        const str = res[0].transcript;
        for (let col in colors) {
          if (col === str) {
            setColor(colors[col]);
            setChooseColors([...choosedColors, colors[col]]);
            console.log(choosedColors);
          }
        }
      })();
    };
  }, [color]);

  return (
    // <div className="screen" style={{ backgroundColor: color }}>
    <div className="screen">
      <span>выбери цвет фона (назови цвет )</span>
      <div className="rainbow">
        {choosedColors.map((el,i) => {
          return (
            <div
              className="rainbow__color"
              style={{ backgroundColor: choosedColors[i] }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Screen;
    