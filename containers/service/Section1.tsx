import { Box } from "@/components/Box";
import { Image, Text } from "react-native";

export function Section1() {
  return (
    <Box
      backgroundColor="cyan"
      display="flex"
      // justifyContent="center"
      alignItems="center"
      gap={5}
    >
      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1661719336375-6bfc58b8ff59?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmclMjBzZXJ2aWNlfGVufDB8fDB8fHww",
        }}

        style={{ height: 200, width: '100%' }}
      />
      <Text>words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description. I applied for the position after reading the job</Text>
    </Box>
  );
}
