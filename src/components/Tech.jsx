import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div
      className="flex flex-wrap justify-center gap-20"
      style={{ flexWrap: "wrap" }}
    >
      {technologies.map((technology, index) => (
        <div
          key={technology.name}
          style={{
            marginBottom: "10px",
            marginRight: index % 4 === 3 ? "0" : "20px",
          }}
        >
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
