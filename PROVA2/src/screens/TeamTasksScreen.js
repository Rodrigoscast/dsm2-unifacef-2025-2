import { View, Text, StyleSheet, SectionList } from "react-native";

const dados = [
  {
    title: "(Eu)",
    data: [
      "08h30: Reunião 'Daily'",
      "14h00: Reunião com cliente Carros & Carros",
      "16h30: Prazo final Projeto X",
    ],
  },
  {
    title: "Jurema (chefe)",
    data: [
      "09h30: Reunião 'Daily'",
      "12h00: Almoço com o diretor",
      "15h00: Saída viagem",
    ],
  },
  {
    title: "Aderbal",
    data: [
      "09h30: Reunião 'Daily'",
      "13h30: Visita técnica Uni-FACEF",
      "16h30: Prazo final Projeto X",
    ],
  },
];

export default function TeamTasksScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
          <Text style={styles.name}>Rodrigo Silva Castro</Text>
          <Text style={styles.className}>Engenharia de Software 6º Semestre</Text>
      </View>

      {/* Lista em seções */}
      <SectionList
        sections={dados}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        contentContainerStyle={{ paddingTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  top: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  className: {
    fontSize: 16,
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
  },
  item: {
    fontSize: 16,
    marginTop: 6,
  },
});
