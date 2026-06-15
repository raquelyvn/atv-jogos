import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Home({ navigation }) {

  const jogos = [
    {
      id: '1',
      nome: 'Minecraft',
      categoria: 'Sandbox',
      plataforma: 'PC',
      descricao: 'Jogo de construção em mundo aberto.'
    },
    {
      id: '2',
      nome: 'Fortnite',
      categoria: 'Battle Royale',
      plataforma: 'PC',
      descricao: 'Combates online.'
    },
    {
      id: '3',
      nome: 'Free Fire',
      categoria: 'Battle Royale',
      plataforma: 'Mobile',
      descricao: 'Partidas rápidas.'
    }
  ];

  return (
    <View style={styles.container}>

      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate(
                'Detalhes',
                { jogo: item }
              )
            }
          >

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text>
              {item.categoria}
            </Text>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  card: {
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});