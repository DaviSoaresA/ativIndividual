import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
    },

    header: {
        flexDirection: "row",
        alignItems:"center",
        width:"100%",
        height: 140,
        position:"absolute",
        top: 0,
        left: 0,
        backgroundColor: "#20dd10",
        zIndex: 1,
        borderBottomWidth:2,
        borderColor:"#20bb10"
    },

    tab:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-evenly",
        width:"100%",
        height: 90,
        position:"absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#fff",
        zIndex: 1,
        borderTopWidth:2,
        borderColor:"#aaaaaa"
    }
})