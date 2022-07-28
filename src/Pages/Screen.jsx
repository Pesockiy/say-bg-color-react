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

const cntrs = [
  {
    country: "Ukraine",
    flag: ["blue", "yellow"],
    direction: "tb",
    directionTitle: "сверху вниз",
  },
  {
    country: "France",
    flag: ["blue", "white", "red"],
    direction: "lr",
    directionTitle: "слева направо",
  },
  {
    country: "Poldand",
    flag: ["white", "red"],
    direction: "tb",
    directionTitle: "сверху вниз",
  },
];

const Countries = () => {
  const rec = window.webkitSpeechRecognition
    ? new window.webkitSpeechRecognition()
    : new window.SpeechRecognition();

  rec.lang = "ru-RU";

  const [color, setColor] = useState();
  const [choosedColors, setChoosedColors] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(0);

  useEffect(() => {
    rec.start();
    rec.onresult = (e) => {
      const res = e.results[e.resultIndex];
      const str = res[0].transcript;
      for (let col in colors) {
        if (col === str) {
          setColor(colors[col]);
          setChoosedColors([...choosedColors, colors[col]]);
        }
      }
    };

    if (cntrs[currentCountry].flag.length === choosedColors.length) {
      setTimeout(() => {
        setCurrentCountry(currentCountry + 1);
        setChoosedColors([]);
      }, 2000);
    }
  }, [color, choosedColors]);
  return (
    <div className="screen">
      <span>
        назовите цвета флага {cntrs[currentCountry].country} (
        {cntrs[currentCountry].directionTitle})
      </span>
      <div
        className={
          cntrs[currentCountry].direction === "tb" ? "flag flag--tb" : "flag"
        }
      >
        {choosedColors.map((el, i) => {
          if (cntrs[currentCountry].flag.indexOf(choosedColors[i]) >= 0) {
            return (
              <div
                className="rainbow__color"
                style={{ backgroundColor: choosedColors[i] }}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Countries;
