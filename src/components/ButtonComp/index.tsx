import { Image, Text, TouchableOpacity } from "react-native";
import { PropsButton } from "./type";
import { styles } from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ButtonComp = ({nome, backgroundColorPerso, image, widthPerso, onlyImage, textColor, localB, position, localL, cBorder, tBorder, icon}: PropsButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.buttonStyle,
        {backgroundColor: backgroundColorPerso ? backgroundColorPerso : "#fff"},
        {width: widthPerso? widthPerso : "90%"},
        {position: position, bottom: localB, left: localL},
        {borderColor: cBorder, borderWidth:tBorder},
        {flexDirection:"row"}
      ]}
    >
      {image && <Image source={image} style={{width: "80%", height: 30}}/>}
      {icon && <Ionicons name={icon} color={"#fff"} size={24} />}
      {!onlyImage && <Text style={{fontSize: 20, color: textColor || "#00000066", fontWeight:"bold"}}>{nome}</Text>}
    </TouchableOpacity>
  );
};
