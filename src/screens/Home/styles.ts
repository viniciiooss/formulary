import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#151515",
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: "center",
        justifyContent:"center",
    },
    box: {
        backgroundColor:"#ffffff",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:20,
        borderRadius: 15,
    },
    form:{
        marginVertical:20,
        maxHeight:'48%',
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
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
    },
    passwordInput: {
        flex: 1,
        height: 40,
        fontSize: 18,
        paddingLeft: 10,
    },
    togglePasswordButton: {
        padding: 10,
    },
});
