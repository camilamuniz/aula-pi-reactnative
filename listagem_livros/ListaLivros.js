import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const livros = [
  { id: "1", titulo: "Guerra dos Tronos", autor: "George R. R. Martin" },
  { id: "2", titulo: "Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
  { id: "3", titulo: "Morro dos Ventos Uivantes", autor: "Emily Brontë" },
  { id: "4", titulo: "O Vilarejo", autor: "Raphael Montes" },
  { id: "5", titulo: "Anne de Green Gables", autor: "Romance por L. M. Montgomery" },
];

export default function ListaLivros({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.autor}>{item.autor}</Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("Detalhes", { livro: item })}
            >
              <Text style={styles.botaoTexto}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  autor: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },
  botao: {
    backgroundColor: "#ff0095ff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
