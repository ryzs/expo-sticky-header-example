import { LayoutChangeEvent, Text } from "react-native";
import Animated from "react-native-reanimated";

export function Heading({
  label,
  backgroundColor = "white",
}: {
  label: string;
  backgroundColor?: string;
}) {
  const handleLayout = (e: LayoutChangeEvent) =>
    console.log("heading layout", e.nativeEvent);

  return (
    <Animated.View
      onLayout={handleLayout}
      style={{
        paddingVertical: 16,
        paddingHorizontal: 8,
        backgroundColor: backgroundColor,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        zIndex: 10,
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 20, color: "#777777" }}>
        {label}
      </Text>
    </Animated.View>
  );
}
