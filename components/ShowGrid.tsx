import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import ShowThumbnails from "./ShowThumb";

export default function ShowGrid({ title, showList }: any) {
  return (
    <View style={styles.genreGrid}>
      <Text style={styles.generHead}>{title}</Text>
      <View>
        <ShowThumbnails showList={showList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  genreGrid: {
    width: "95%",
    marginVertical: 8,
  },

  generHead: {
    fontSize: 22,
    color: "white",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
});
