import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#151515",
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    box: {
        backgroundColor:"#ffffff",
        alignItems:"center",
        justifyContent:"center",
        width: "85%",
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius: 15,
    },
    titlebox: {
        fontSize: 28,
        fontWeight: 'bold',
        alignItems: "center",
        justifyContent:"center",
        marginBottom: 20,
    },
    dados: {
        backgroundColor: "#dcdcdc",
        minWidth: "90%",
        width:250,
        borderRadius: 15,
        padding: 10, 

    },
    text: {
        fontSize:18,
        margin:10,
    },
    button: {
        backgroundColor: "#00008B",
        height:55,
        minWidth:"35%",
        alignItems:"center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 10,
    },
    textbutton: {
        color: "#ffffff",
        fontSize:25,
    }
});