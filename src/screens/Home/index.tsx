import { Participant } from "@/src/components/Participant";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {

    function handleParcipantAdd() {
        console.log('Você adicionou um participante')
    }

    function handleParcipantRemove(name: string) {
        console.log(`Você removeu o participante ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text >
            <Text style={styles.eventDate}>
                Sexta, 4 de novembro de 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                />

                <TouchableOpacity style={styles.button} onPress={handleParcipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant name="Victor" onRemove={() => handleParcipantRemove("Victor")}/>
        </View>
    )
}
