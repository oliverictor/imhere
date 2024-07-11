import { Participant } from "@/src/components/Participant";
import { Text, TextInput, TouchableOpacity, View, ScrollView, FlatList } from "react-native";
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

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParcipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    )
}
