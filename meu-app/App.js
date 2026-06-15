import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import Jogo from './componentes/Jogo';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './telas/Home';
import Detalhes from './telas/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'GameStore Mobile'
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}