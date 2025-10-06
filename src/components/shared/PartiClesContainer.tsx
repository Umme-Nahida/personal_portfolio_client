
"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const PartiClesContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // ✅ Fix: make it async to return a Promise<void>
  const particlesLoaded = async (container:any) => {
    // optional: you can console.log(container)
    // console.log(container);
    return Promise.resolve();
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fpsLimit: 400,
          interactivity: {
            events: {
              onClick: { enable: false, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              push: { quantity: 10000 },
              repulse: { distance: 5, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#1976D2" },
            links: {
              color: "#1976D2",
              distance: 50,
              enable: true,
              opacity: 0.7,
              width: 2,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: { enable: true },
              value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default PartiClesContainer;
