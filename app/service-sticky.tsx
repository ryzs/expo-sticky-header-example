import { Box } from "@/components/Box";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { Section1 } from "@/containers/service/Section1";
import { Section2 } from "@/containers/service/Section2";
import { Section3 } from "@/containers/service/Section3";
import { Stack } from "expo-router";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  navStyle: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  animatedView: {
    flexDirection: "row",
    backgroundColor: "#fefefe",
    zIndex: 9,
  },
});

export default function Page() {
  const scrollY = useSharedValue(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [300, 500], [0, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    });
    const top = interpolate(scrollY.value, [300, 500], [-200, 0], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    return {
      opacity,
      top,
    };
  });

  return (
    <SafeAreaView>
      <Stack.Screen options={{ header: () => null }} />
      <ScrollView stickyHeaderIndices={[0, 2]} onScroll={onScroll}>
        <Header name="Service Sticky" />
        <Section1 />
        <View>
          <Heading label="Some Cleaning" />
          <Animated.View style={[styles.animatedView, animatedStyles]}>
            <Box {...styles.navStyle}>
              <Text>Menu1</Text>
            </Box>
            <Box {...styles.navStyle}>
              <Text>Menu2</Text>
            </Box>
            <Box {...styles.navStyle}>
              <Text>Menu3</Text>
            </Box>
            <Box {...styles.navStyle}>
              <Text>Menu4</Text>
            </Box>
          </Animated.View>
        </View>
        <Description />
        <Section2 />
        <Section3 />
      </ScrollView>
    </SafeAreaView>
  );
}

const Description = () => (
  <Text>
    words that describe something or someone. [count] Reporters called the scene
    “a disaster area,” and I think that was an accurate description. I applied
    for the position after reading the job
  </Text>
);
