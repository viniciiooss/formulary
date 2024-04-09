import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams ={
    nome: string;
    email: string;
    idade: string;
    username: string;
    password: string;
}
export default function Profile(){
    const route = useRoute();
    const {nome,email,idade,username,password} = route.params as RouteParams;
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titlebox}> BEM VINDO </Text>
                <Text style={styles.titlebox}> {username} </Text> 
                <View style={styles.dados}>
                    <Text style={styles.text}> Dados: </Text>
                    <Text style={styles.text}> 1. Seu nome é {nome} </Text>
                    <Text style={styles.text}> 2. Seu email é {email} </Text>
                    <Text style={styles.text}> 3. Sua idade é {idade} </Text>
                    <Text style={styles.text}> 4. Seu username é {username} </Text>
                    <Text style={styles.text}> 5. Sua senha é {password} </Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.textbutton}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}