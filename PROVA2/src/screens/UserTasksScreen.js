import { View, Text, StyleSheet, FlatList } from "react-native";

const compromissos = [
  { id: "1", hora: "09h30", descricao: "Reunião 'Daily'" },
  { id: "2", hora: "14h00", descricao: "Reunião com cliente Carros & Carros" },
  { id: "3", hora: "16h30", descricao: "Prazo final Projeto X" },
];

export default function UserTasksScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
          <Text style={styles.name}>(Eu)</Text>
          <Text style={styles.className}>Rodrigo Silva Castro</Text>
          <Text style={styles.className}>Engenharia de Software 6º Semestre</Text>
      </View>

      {/* Lista */}
      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.hora}: {item.descricao}
          </Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  className: {
    marginBottom: 5,
  },
  item: {
    fontSize: 16,
    marginTop: 15,
  },
});
