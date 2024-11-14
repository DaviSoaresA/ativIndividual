import { Image, Text, View } from "react-native";
import { styles } from "./style";
import flagJ from "../../Mock/images/Flags(Japan).png";
import flame from "../../Mock/images/streak-flame-updated-v0-3n46sx7a0e9b1.png";
import gem from "../../Mock/images/Gem.png";
import heart from "../../Mock/images/Hearts.png";
import { ButtonComp } from "../../components/ButtonComp";
import { ListFlat } from "../../components/ListFlat";
import tab1 from "../../Mock/images/Tab1.png"
import tab3 from "../../Mock/images/Tab2.png"
import tab2 from "../../Mock/images/Tab3.png"
import tab4 from "../../Mock/images/Tab4.png"
import tab5 from "../../Mock/images/Tab5.png"
import tab6 from "../../Mock/images/Tab6.png"

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={flagJ}
          style={{
            width: 40,
            height: 30,
            position: "relative",
            left: 10,
            top: -10,
          }}
        />
        <Image
          source={flame}
          style={{
            width: 40,
            height: 30,
            position: "relative",
            left: 60,
            top: -10,
          }}
        />
        <Text
          style={{
            width: 40,
            height: 30,
            position: "absolute",
            left: 140,
            bottom: 61,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 16,
          }}
        >
          1
        </Text>
        <Image
          source={gem}
          style={{
            width: 40,
            height: 30,
            position: "relative",
            left: 110,
            top: -10,
          }}
        />
        <Text
          style={{
            width: 40,
            height: 30,
            position: "absolute",
            left: 225,
            bottom: 61,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 16,
          }}
        >
          450
        </Text>
        <Image
          source={heart}
          style={{
            width: 40,
            height: 30,
            position: "relative",
            left: 160,
            top: -10,
          }}
        />
        <Text
          style={{
            width: 40,
            height: 30,
            position: "absolute",
            left: 325,
            bottom: 61,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 16,
          }}
        >
          5
        </Text>
        <ButtonComp
          onlyImage={false}
          position="absolute"
          localB={5}
          localL={20}
          icon="chevron-up-sharp"
          nome="Section 1:Rookie"
          textColor="#fff"
          backgroundColorPerso="#20dd10"
        />
      </View>
      <View style={{width: "100%"}}>
        <ListFlat/>
      </View>
      <View style={styles.tab}>
          <ButtonComp onlyImage={true} widthPerso={"14%"} image={tab1}/>
          <ButtonComp onlyImage={true} widthPerso={"14%"} image={tab2}/>
          <ButtonComp onlyImage={true} widthPerso={"14%"} image={tab3}/>
          <ButtonComp onlyImage={true} widthPerso={"14%"} image={tab4}/>
          <ButtonComp onlyImage={true} widthPerso={"14%"} image={tab5}/>
          <ButtonComp onlyImage={true} widthPerso={"14%"} image={tab6}/>
      </View>
    </View>
  );
}
