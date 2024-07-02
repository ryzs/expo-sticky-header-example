import { Box } from "@/components/Box";
import { Text } from "react-native";

export function Section1() {
  return (
    <Box
      backgroundColor="blue"
      height={400}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text>Section 1 Component</Text>
    </Box>
  );
}
