import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../config/theme/theme";
import { useAnimation } from "../../hooks/useAnimation";

export const Animation101Screen = () => {

  const {fadeIn, fadeOut, startMovingPosition, animatedOpacity, animatedTop} = useAnimation();

  return (
    <View style={styles.container}>

      <Animated.View style={{
        ...styles.purpleBox,
        opacity: animatedOpacity,
        transform: [
          {
            translateY: animatedTop
          }
        ]
      }} />

      <Pressable onPress={() => {
        fadeIn({});
        startMovingPosition({initPosition: -100})
      }} style={{ marginTop: 10 }}>
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
        <Text>FadeOut</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  }
});