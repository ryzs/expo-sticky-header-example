import { Pressable, Text } from "react-native";
import { Box } from "./Box";
import { router } from "expo-router";

const shadowNormal = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 5,
  zIndex: 20,
};

export function Header({ name }: { name: string }) {
  return (
    <Box
      backgroundColor="white"
      height={70}
      padding={10}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
      <Text style={{ fontWeight: "800" }}>{name}</Text>
      <Text>Info</Text>
    </Box>
  );
}
