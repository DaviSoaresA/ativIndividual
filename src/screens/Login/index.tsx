import { Text, View } from "react-native";
import { styles } from "./style";
import {TextInputField} from "../../components/TextInputField";
import { ButtonComp } from "../../components/ButtonComp";
import facebook from "../../Mock/images/facebook.png";
import google from "../../Mock/images/google_auth_button.png";

export default function Login() {
  return (
    <View style={styles.container}>
      <ButtonComp onlyImage={false} position="absolute" localB={630} localL={-10} nome="X" widthPerso={"20%"}/>
      <Text style={{
          position: "absolute",
          bottom: 639,
          textAlign: "center",
          fontSize: 22,
          color: "#999999",
          paddingHorizontal: 20,
          fontWeight:"bold",
        }}>Enter your details</Text>
      <TextInputField
        placeHolderPerso="Usuário ou e-mail"
        bLeft={0}
        bRight={0}
        tLeft={20}
        tRight={20}
      />
      <TextInputField
        placeHolderPerso="Senha"
        bLeft={20}
        bRight={20}
        tLeft={0}
        tRight={0}
      />
      <ButtonComp
        onlyImage={false}
        nome="Entrar"
        backgroundColorPerso="#aaaaaa44"
        localB={130}
        position="relative"
      />
      <ButtonComp
        onlyImage={false}
        nome="Esqueci a senha"
        textColor="#1090ff"
        localB={120}
        position="relative"
      />
      <ButtonComp
        onlyImage={true}
        localB={50}
        widthPerso="45%"
        position="absolute"
        localL={10}
        cBorder="#aaaaaa"
        tBorder={2}
        image={facebook}
      />
      <ButtonComp
        onlyImage={true}
        localB={50}
        widthPerso="45%"
        position="absolute"
        localL={185}
        cBorder="#aaaaaa"
        tBorder={2}
        image={google}
      />
      <Text
        style={{
          position: "absolute",
          bottom: 10,
          textAlign: "center",
          fontSize: 14,
          color: "#777777",
          paddingHorizontal: 20,
        }}
      >
        By singing in to Duolingo, you agree to our{" "}
        <Text style={{ fontWeight: "bold" }}>Terms</Text> and{" "}
        <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>
      </Text>
    </View>
  );
}
