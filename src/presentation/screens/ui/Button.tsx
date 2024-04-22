import { PropsWithChildren } from "react";
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import { colors, globalStyles } from "../../../config/theme/theme";

interface Props extends PropsWithChildren {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const Button = ({text, style, onPress}: Props) => {
  return (
    <Pressable 
      onPress={onPress}
      style={ ({pressed}) => ([
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary
        }
      ])}
    >

      <Text style={[
        globalStyles.btnPrimaryText,
        {
          color: colors.buttonTextColor
        }
      ]}>Button</Text>

    </Pressable>
  )
}
