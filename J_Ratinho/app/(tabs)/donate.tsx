import {StyleSheet, View, Text} from "react-native";

export default function Donate() {
  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quer ser um patrocinador?</Text>
        <Text style={styles.sectionSubtitle}>
          Contribua regularmente para apoiar nossas iniciativas.
        </Text>
        <Button 
          title="Seja Patrocinador" 
          onPress={() => console.log("Seja Patrocinador")}
          color="#5087CA"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prefere uma doação?</Text>
        <Text style={styles.sectionSubtitle}>
          Faça uma contribuição única sem compromissos.
        </Text>
        <Button 
          title="Doar Agora" 
          onPress={() => console.log("Doar Agora")}
          color="#5087CA"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Doe em nosso endereço</Text>
        <Text style={styles.sectionSubtitle}>
          Se preferir, você pode entregar sua doação pessoalmente.
        </Text>
        <Button 
          title="Ver Endereço" 
          onPress={() => console.log("Ver Endereço")}
          color="#5087CA"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  section: {
    backgroundColor: "#FEF7FF",
    marginBottom: 10,
    padding: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
});
