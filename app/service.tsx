import { Service } from "@/containers/service";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ header: () => null }} />
      <ScrollView>
        <Service />
      </ScrollView>
    </SafeAreaView>
  );
}
