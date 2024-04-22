import { Switch, Text, View } from "react-native";
import { CustomView } from "../ui/CustomView";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { useState } from "react";
import { CustomSwitch } from "../ui/CustomSwitch";

export const SwitchScreen = () => {

  const [ state, setState ] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <CustomView style={{
      marginTop: 100,
      paddingHorizontal: 10,
    }}>

      <Card>

        <CustomSwitch
          isOn={state.isActive}
          text='Esta activo'
          onChange={(value) => setState(prev => ({ ...prev, isActive: value }))}
        />

        <CustomSwitch
          isOn={state.isHungry}
          text='Tiene hambre'
          onChange={(value) => setState(prev => ({ ...prev, isHungry: value }))}
        />

        <CustomSwitch
          isOn={state.isHappy}
          text='Esta feliz'
          onChange={(value) => setState(prev => ({ ...prev, isHappy: value }))}
        />

      </Card>

    </CustomView>
  )
}
