import { Participant } from "@/src/components/Participant";
import { Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./styles";

export function Home() {
    const participants = [
        'Victor', 'Vini', 'Rodrigo', 'Diego', 'Fabio',
        'Duca', 'Luiz', 'Tio', 'Karina', 'Julia', 'João',
        'Daniel', 'Guilherme', 'Rafael', 'Isa',
    ]

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

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map((participant) => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={() => handleParcipantRemove(participant)}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}
