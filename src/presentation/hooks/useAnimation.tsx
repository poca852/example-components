import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({ duration = 300, toValue = 1, callBack = () => {} }) => {

    Animated.timing(
      animatedOpacity,
      {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true
      }
    ).start( callBack );

  }

  const fadeOut = ({ duration = 300, toValue = 0, callBack = () => {} }) => {

    Animated.timing(
      animatedOpacity,
      {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true
      }
    ).start(callBack);
  }

  const startMovingPosition = ({
    initPosition= 0, 
    toValue= 0,
    duration = 300,
    easing= Easing.linear,
    callBack= () => {}
  }) => {

    animatedTop.setValue(initPosition);

    Animated.timing(
      animatedTop,
      {
        toValue,
        duration,
        useNativeDriver: true,
        easing
      }
    ).start(callBack);
  }


  return {
    animatedOpacity,
    animatedTop,
    startMovingPosition,
    fadeIn,
    fadeOut
  }
}
