import { View, Text } from "react-native";

export default function ProfileScreen({ route }) {
  const produtoId = route.params?.produtoId; // com ? para evitar erro

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela Perfil</Text>
      {produtoId && <Text>ID recebido: {produtoId}</Text>}
    </View>
  );
}
