
import { Canvas, Fill, Mask, Morphology, Path, Skia } from "@shopify/react-native-skia";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const DrawingCanvas = () => {
  const letterPath = Skia.Path.MakeFromSVGString(
    "m15.1 716.4 129-605.04 71.8 0 129 605.04-62.6 0-38.3-197.52-128 0-38.3 197.52-62.6 0zm217.3-257.88-52.4-285.96-52.7 285.96 105.1 0z"
  );

  const scale = 0.5; // Cambia el valor para ajustar el tamaño (0.5 es la mitad del tamaño original)

  const translateX = width / 2 - (width * scale) / 2;
  const translateY = height / 2 - (height * scale) / 1;

  letterPath.transform([
    scale, 0, translateX,    // Primera fila
    0, scale, translateY + 80,    // Segunda fila
    0, 0, 1                  // Tercera fila (sin rotación)
  ]);

  const drawPath = useSharedValue(Skia.Path.Make());

  const gesture = Gesture.Pan()
    .onBegin((event) => {
      drawPath.value.moveTo(event.x, event.y);
      drawPath.modify();
    })
    .onChange((event) => {
      drawPath.value.lineTo(event.x, event.y);
      drawPath.modify();
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        <Canvas style={{ flex: 1 }}>
          <Fill color="transparent" />
          <Path path={letterPath} color="black" strokeWidth={10}>
            <Morphology radius={6} />
          </Path>

          <Path path={letterPath} color="#274A69" strokeWidth={10}>
            <Morphology radius={3} />
          </Path>

          <Mask mask={<Path path={drawPath} color="black" strokeWidth={100} style="stroke" />}>
            <Path path={letterPath} color="#4E92C4" strokeWidth={10} />
          </Mask>
        </Canvas>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default DrawingCanvas;

