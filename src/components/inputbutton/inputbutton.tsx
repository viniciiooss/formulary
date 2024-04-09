import React from 'react';
import { View, TextInput, Text , Platform } from "react-native";
import { styles } from "./styles";

type Props = {
    cName: string;
    onChangeText: (text: string) => void;
}

export default function InputButton({ cName, onChangeText,}: Props) {
    return (
        <View style={styles.viewTextButton}>
            <TextInput
                style={styles.textInput}
                placeholder={cName}
                placeholderTextColor='#666666'
                keyboardType={Platform.select({
                    ios: 'numbers-and-punctuation',
                    android: 'visible-password'
                })}
                onChangeText={onChangeText}
            />
        </View>
    );
}
