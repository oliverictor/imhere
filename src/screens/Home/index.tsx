import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do eventos
            </Text >
            <Text style={styles.eventDate}>
                Sexta, 4 de novembro de 2022
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6b6b6b"
            />
        </View>
    )
}
