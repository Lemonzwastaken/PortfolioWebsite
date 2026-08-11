"use client"
import React, { useState, useEffect } from "react";

const createDataMote = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 3 + 2}s`,
  flickerDuration: `${Math.random() * 1.5 + 0.5}s`,
  color: Math.random() > 0.5 ? "cyan" : "magenta",
});

const FireFliesBackground = () => {
  const [motes, setMotes] = useState([]);

  useEffect(() => {
    const addMotePeriodically = () => {
      const newMote = createDataMote();
      setMotes((current) => [...current.slice(-14), newMote]);
    };

    const interval = setInterval(addMotePeriodically, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {motes.map((mote) => (
        <div
          key={mote.id}
          className={`absolute rounded-full w-[8px] h-[8px] ${
            mote.color === "cyan" ? "bg-mote-cyan" : "bg-mote-magenta"
          }`}
          style={{
            top: mote.top,
            left: mote.left,
            animation: `move ${mote.animationDuration} infinite alternate, flicker ${mote.flickerDuration} infinite ease-in-out`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FireFliesBackground;