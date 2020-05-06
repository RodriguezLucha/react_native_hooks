import React from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";

function Pull() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  function activateLasers() {
    set({
      xy: [100, 100],
      config: { mass: 5, tension: 500, friction: 50 },
    });
    return;
  }

  return (
    <>
      <button onClick={activateLasers}>move</button>
      <animated.div
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
        }}
      />
    </>
  );
}

export default Pull;
