"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.halo.min";

const VantaHalo = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          xOffset: 0.22,
          yOffset: 0.13,
          scale: -0,
          scaleMobile: 0,
          backgroundColor: 0x0,
          color: 0xff9f00,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ width: "full", height: "100vh" }} />;
};

export default VantaHalo;
