import { FlatList, Image, Text, View } from "react-native";
import { DataAPI } from "../../Mock/Data";
import { styles } from "./style";
import start from "../../Mock/images/Start.png"
import regular from "../../Mock/images/Regular.png"
import { ButtonComp } from "../ButtonComp";
import caderneta from "../../Mock/images/Caderneta.png"

export function ListFlat() {

    return (
        <FlatList
        horizontal={false}
        data={DataAPI}
        keyExtractor={dados => dados.id.toString()}
        renderItem={({ item }) =>
            <View style={item.end ? [styles.container, {marginBottom: 100}]: styles.container}>
              <View style={item.start ? [styles.header, {marginTop: 140}]: styles.header}>
                <Text style={{fontSize: 30, fontWeight:"bold", color: "#fff"}}>{item.name}</Text>
                <Text style={{fontSize: 18, color: "#fff"}}>{item.description}</Text>
                <ButtonComp onlyImage={true} position="absolute" localB={25} backgroundColorPerso="#20dd10" widthPerso={"20%"} localL={260} image={caderneta} tBorder={2} cBorder="#20aa10"/>
              </View>
              {item.start && <Image source={start} alt="Botão de fase" />}
              {!item.start && <Image source={regular} alt="Botão de fase" />}
              <Image source={regular} style={item.inveted ? {position:"relative", left: 50}: {position:"relative", left: -50}} alt="Botão de fase" />
              <Image source={regular} style={item.inveted ? {position:"relative", left: 100}: {position:"relative", left: -100}} alt="Botão de fase" />
              <Image source={regular} style={item.inveted ? {position:"relative", left: 50}: {position:"relative", left: -50}} alt="Botão de fase" />
              <Image source={regular} alt="Botão de fase" />
            </View>
        }
      />
    );
  }