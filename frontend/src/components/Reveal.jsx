import React from "react";
import useReveal from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, visible] = useReveal();
  const transform = {
    up: "translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
    zoom: "scale-95",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-out ${
        visible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : `opacity-0 ${transform}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
