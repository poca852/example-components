import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../config/theme/theme";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { Separator } from "./Separator";

interface Props {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;  
}

export const MenuItem = ({
  name, 
  icon, 
  component,
  isFirst = false,
  isLast = false
}: Props ) => {

  const navigation = useNavigation<any>();

  return (

    <>
      <Pressable
        onPress={() => navigation.navigate(component)}
      >
        <View style={{
          ...styles.container,
          backgroundColor: colors.cardBackground,
          ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
          ...(isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 }),
        }}>
          <Icon style={{ marginRight: 10 }} name={icon} size={25} color={colors.primary} />
          <Text>{name}</Text>
          <Icon style={{ marginLeft: "auto" }} name='chevron-forward-outline' size={25} color={colors.primary} />
        </View>
      </Pressable>

      {
        !isLast && <Separator />
      }
    </>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5
    }
});
