import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import * as Animatable from "react-native-animatable";

export default function ModalScreen({ navigation, route }: any) {
  const routes = [
    { label: "Home", url: "HomeScreen" },
    { label: "TV Shows", url: "TVShowsScreen", active: true },
    { label: "Movies", url: "MoviesScreen" },
  ];

  return (
    <Animatable.View animation="slideInDown" style={styles.container}>
      <View style={styles.routes}>
        {routes.map((r) => {
          return (
            <View style={styles.route} key={r.label}>
              <Text
                style={[
                  styles.routeText,
                  r.active ? styles.routeTextActive : {},
                ]}
                onPress={() => navigation.navigate("Root", { screen: r.url })}
              >
                {r.label}
              </Text>
            </View>
          );
        })}
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  routes: {},
  route: {
    marginVertical: 10,
  },
  routeText: {
    fontSize: 20,
    textAlign: "center",
  },
  routeTextActive: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
