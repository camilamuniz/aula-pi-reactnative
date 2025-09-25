import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página Inicial</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate("Detalhes", { produtoId: 101 })}
      />
    </View>
  );
}
