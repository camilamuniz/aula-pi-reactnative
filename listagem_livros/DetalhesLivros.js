import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function DetalhesLivro({ route, navigation }) {
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{livro.titulo}</Text>
        <Text style={styles.autor}>{livro.autor}</Text>

        <Image
          source={{ uri: "https://placehold.co/200x300" }}
          style={styles.imagem}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  autor: {
    fontSize: 14,
    color: "gray",
    marginBottom: 15,
  },
  imagem: {
    width: 200,
    height: 300,
    borderRadius: 5,
    marginBottom: 20,
  },
  botao: {
    marginTop: 20,
    backgroundColor: "#ff0095",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
