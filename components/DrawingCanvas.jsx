
import { Canvas, Fill, Mask, Morphology, Path, Skia } from "@shopify/react-native-skia";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { Dimensions } from "react-native";
import letters_path from '../assets/data/letter_paths.json'; // Importa el JSON de rutas

const { width, height } = Dimensions.get("window");

const DrawingCanvas = ({ letter = 'A' }) => {
  const svgPath = letters_path[letter.toUpperCase()];

  if (!svgPath) {
    console.error(`La letra ${letter} no tiene una ruta SVG en el archivo JSON`);
    return null;
  }

  const letterPath = Skia.Path.MakeFromSVGString(svgPath);

  const scale = 0.3; // Ajustar este valor para cambiar el tamaño de la letra
  const translateX = (width - (width * scale)) / 2.8;
  const translateY = (height - (height * scale)) / 1.3;

  letterPath.transform([
    scale, 0, translateX,   // Primera fila: Escalado y traslación en X
    0, -scale, translateY,   // Segunda fila: Escalado y traslación en Y
    0, 0, 1                 // Tercera fila: No hay rotación ni perspectiva
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

