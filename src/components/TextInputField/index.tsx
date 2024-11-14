import { View, Text, TextInput } from "react-native";
import React from "react";
import { Propsinput } from "./type";
import { styles } from "./style";

export function TextInputField({placeHolderPerso,typeInput, bLeft,bRight,tLeft,tRight}: Propsinput) {

  return (
    <TextInput
      placeholder={placeHolderPerso}
      placeholderTextColor={"#00000066"}
      style={[
        styles.inputArea,
        {
          borderBottomLeftRadius: bLeft,
          borderBottomRightRadius:  bRight,
          borderTopLeftRadius: tLeft,
          borderTopRightRadius: tRight,
        },
      ]}
      defaultValue=""
      secureTextEntry={typeInput}
    />
  );
}
