import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Agenda do dia</Text>

      <Text style={styles.name}>Rodrigo Silva Castro</Text>
      <Text style={styles.className}>Engenharia de Software 6º Semestre</Text>

      <View style={{ marginTop: 40 }}>
        <Button
          title="Meus compromissos"
          onPress={() => navigation.navigate("Meus compromissos")}
        />

        <View style={{ height: 20 }} />

        <Button
          title="Compromissos da equipe"
          onPress={() => navigation.navigate("Compromissos da equipe")}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 40,
  },
  name: {
    fontSize: 18,
    marginBottom: 5,
  },
  className: {
    fontSize: 17,
    marginBottom: 20,
  },
});
