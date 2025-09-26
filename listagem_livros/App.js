import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaLivros from "./ListaLivros";
import DetalhesLivros from "./DetalhesLivros";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaLivros">
        <Stack.Screen
          name="ListaLivros"
          component={ListaLivros}
          options={{ title: "Lista de Livros" }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesLivros}
          options={{ title: "Detalhes do Livro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 