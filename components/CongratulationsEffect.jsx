
import React, { useEffect } from "react";
import { Canvas, Path, Skia, useValue, runTiming, Easing, Group, vec } from "@shopify/react-native-skia";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CongratulationsEffect = () => {
  const confettiCount = 100;
  const confettiArray = [...Array(confettiCount)];

  const getRandomValue = (min, max) => Math.random() * (max - min) + min;

  // Genera confetti aleatorio con colores y posiciones
  const confettiData = confettiArray.map(() => ({
    x: useValue(getRandomValue(0, width)),
    y: useValue(getRandomValue(-height, 0)),
    color: `rgba(${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}, 1)`,
    size: getRandomValue(5, 15),
    delay: getRandomValue(0, 500), // Diferente tiempo para caer
  }));

  useEffect(() => {
    // Animación para cada confetti
    confettiData.forEach(({ y, delay }) => {
      runTiming(y, height, {
        duration: 2000,
        easing: Easing.inOut(Easing.quad),
        loop: true,
        delay,
      });
    });
  }, []);

  return (
    <Canvas style={{ flex: 1 }}>
      {confettiData.map((confetti, index) => (
        <Group
          key={index}
          transform={[
            { translateX: confetti.x.current },
            { translateY: confetti.y.current },
          ]}
        >
          <Path
            path={Skia.Path.Make().addRect(0, 0, confetti.size, confetti.size)}
            color={confetti.color}
          />
        </Group>
      ))}
    </Canvas>
  );
};

export default CongratulationsEffect;

