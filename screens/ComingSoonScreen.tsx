import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import * as Animatable from "react-native-animatable";

export default function ComingSoonScreen({
  navigation,
}: RootTabScreenProps<"ComingSoonScreen">) {
  return (
    <Animatable.View animation="fadeInLeft" style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/ComingSoonScreen.tsx" />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
