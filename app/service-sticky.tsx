import { Box } from "@/components/Box";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { Section1 } from "@/containers/service/Section1";
import { Section2 } from "@/containers/service/Section2";
import { Section3 } from "@/containers/service/Section3";
import { Stack } from "expo-router";
import { ScrollView, Text, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const navStyle: ViewStyle = {
  flex: 1,
  padding: 8,
  justifyContent: 'center',
  alignItems: 'center'
}

export default function Page() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ header: () => null }} />
      <ScrollView stickyHeaderIndices={[0, 2, 3]}>
        <Header name="Service Sticky" />
        <Section1 />
        <Heading label="Some Cleaning" />
        <Box flexDirection="row" backgroundColor="#fefefe">
          <Box {...navStyle}><Text>Menu1</Text></Box>
          <Box {...navStyle}><Text>Menu2</Text></Box>
          <Box {...navStyle}><Text>Menu3</Text></Box>
          <Box {...navStyle}><Text>Menu4</Text></Box>
        </Box>
        <Section2 />
        <Section3 />
      </ScrollView>
    </SafeAreaView>
  );
}
