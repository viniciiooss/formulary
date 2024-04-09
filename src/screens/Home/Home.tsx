import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import InputButton from "../../components/inputbutton/inputbutton";
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
    const navigation = useNavigation();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    function Enviar() {
        if (!nome.trim() || !email.trim() || !idade.trim() || !username.trim() || !password.trim()) {
            alert("Campos vazios! Por favor, preencha todos os campos.");
            return;
        }
        navigation.navigate("Profile", {
            nome,
            email,
            idade,
            username,
            password
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}> Fomulário </Text>
                <ScrollView style={styles.form}>
                    <InputButton
                        cName="Nome"
                        onChangeText={(text) => setNome(text)}
                    />
                    <InputButton
                        cName="E-mail"
                        onChangeText={(text) => setEmail(text)}
                    />
                    <InputButton
                        cName="Idade"
                        onChangeText={(text) => setIdade(text)}
                    />
                    <InputButton
                        cName="Username"
                        onChangeText={(text) => setUsername(text)}
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Senha"
                            secureTextEntry={!showPassword}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity onPress={toggleShowPassword} style={styles.togglePasswordButton}>
                            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={Enviar}>
                    <Text style={styles.textbutton}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
