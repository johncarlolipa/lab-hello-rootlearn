import React from "react";
import "./grid.css";

export default function Grid() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={process.env.PUBLIC_URL + "/assets/undefined1.png"} alt="m" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid-item">
        <img src={process.env.PUBLIC_URL + "/assets/undefined2.png"} alt="n" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid-item">
        <img src={process.env.PUBLIC_URL + "/assets/undefined3.png"} alt="b" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid-item">
        <img src={process.env.PUBLIC_URL + "/assets/undefined4.png"} alt="v" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
