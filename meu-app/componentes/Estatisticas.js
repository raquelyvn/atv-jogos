import React, { useState } from 'react';

import {
  View,
  Text,
  Button,
  TextInput,
  Alert
} from 'react-native';

export default function Estatisticas() {

  const [curtidas, setCurtidas] = useState(0);
  const [comentarios, setComentarios] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [texto, setTexto] = useState('');

  function comentar() {

    if (texto.trim() === '') {
      Alert.alert('Digite um comentário');
      return;
    }

    setComentarios(comentarios + 1);
    setTexto('');

    Alert.alert(
      'Sucesso',
      'Comentário enviado!'
    );
  }

  return (
    <View>

      <Text>Curtidas: {curtidas}</Text>

      <Button
        title="Curtir"
        onPress={() =>
          setCurtidas(curtidas + 1)
        }
      />

      <Button
        title="Descurtir"
        onPress={() =>
          curtidas > 0 &&
          setCurtidas(curtidas - 1)
        }
      />

      <Text>
        Comentários: {comentarios}
      </Text>

      <TextInput
        placeholder="Digite um comentário"
        value={texto}
        onChangeText={setTexto}
        style={{
          borderWidth: 1,
          marginVertical: 5,
          padding: 5
        }}
      />

      <Button
        title="Enviar Comentário"
        onPress={comentar}
      />

      <Text>
        Favorito: {favorito ? '⭐ Sim' : '❌ Não'}
      </Text>

      <Button
        title="Favoritar"
        onPress={() =>
          setFavorito(!favorito)
        }
      />

    </View>
  );
}