import { LayoutChangeEvent, Text } from "react-native";
import { Box } from "./Box";

export function Heading({ label }: { label: string }) {
  const handleLayout = (e: LayoutChangeEvent) =>
    console.log("heading layout", e.nativeEvent);

  return (
    <Box
      paddingVertical={16}
      paddingHorizontal={8}
      backgroundColor="white"
      viewProps={{ onLayout: handleLayout }}
    >
      <Text style={{ fontWeight: "600", fontSize: 20 }}>{label}</Text>
    </Box>
  );
}
