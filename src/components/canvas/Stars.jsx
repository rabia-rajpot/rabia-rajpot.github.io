import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  return <div>Stars</div>;
};
const StarCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarCanvas;
