import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { Navigator } from './presentation/navigator/Navigator';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}
