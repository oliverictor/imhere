import { Participant } from "@/src/components/Participant";
import { Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participanName, setParticipamentName] = useState<string>('')

    function handleParcipantAdd() {
        if (participants.includes(participanName)) {
            return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome')
        }

        setParticipants(prevState => [...prevState, participanName])
        setParticipamentName('')
    }

    function handleParcipantRemove(name: string) {
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleParticipantNameChange(name: string){
        setParticipamentName(name)
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
                    onChangeText={handleParticipantNameChange}
                    value={participanName}
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
