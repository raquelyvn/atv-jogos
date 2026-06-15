import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default function Detalhes({
  route,
  navigation
}) {

  const { jogo } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        {jogo.nome}
      </Text>

      <Text>
        Categoria: {jogo.categoria}
      </Text>

      <Text>
        Plataforma: {jogo.plataforma}
      </Text>

      <Text>
        {jogo.descricao}
      </Text>

      <Button
        title="Voltar"
        onPress={() =>
          navigation.goBack()
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }
});