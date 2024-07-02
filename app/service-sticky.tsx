import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { Section1 } from "@/containers/service/Section1";
import { Section2 } from "@/containers/service/Section2";
import { Section3 } from "@/containers/service/Section3";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ header: () => null }} />
      <ScrollView stickyHeaderIndices={[0, 2]}>
        <Header name="Service Sticky" />
        <Section1 />
        <Heading label="Some Cleaning" />
        <Section2 />
        <Section3 />
      </ScrollView>
    </SafeAreaView>
  );
}
