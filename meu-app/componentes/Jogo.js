import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';

import Estatisticas from './Estatisticas';

export default function Jogo(props) {

  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  return (
    <View style={styles.card}>

      <Image
        source={{ uri: props.imagem }}
        style={styles.imagem}
      />

      <Text style={styles.nome}>{props.nome}</Text>

      <Text>Categoria: {props.categoria}</Text>

      <Text>Plataforma: {props.plataforma}</Text>

      <Text>Data: {props.data}</Text>

      <Button
        title={
          mostrarDescricao
            ? 'Ocultar Descrição'
            : 'Mostrar Descrição'
        }
        onPress={() =>
          setMostrarDescricao(!mostrarDescricao)
        }
      />

      {mostrarDescricao && (
        <Text>{props.descricao}</Text>
      )}

      <Estatisticas />

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10
  },

  imagem: {
    width: '100%',
    height: 200
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5
  }
});