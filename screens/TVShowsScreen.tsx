import { StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import * as Animatable from "react-native-animatable";

import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { StatusBar } from "expo-status-bar";

import ShowGrid from "../components/ShowGrid";

import banner from "../assets/images/thumbs/johnWick.jpg";
import bB from "../assets/images/thumbs/breakingBad.jpg";
import bN from "../assets/images/thumbs/brooklynNine.jpg";
import dD from "../assets/images/thumbs/dareDevil.jpg";
import dark from "../assets/images/thumbs/dark.png";
import dS from "../assets/images/thumbs/demonSlayer.jpg";
import frN from "../assets/images/thumbs/friends.jpg";
import jW from "../assets/images/thumbs/johnWick.jpg";
import jK from "../assets/images/thumbs/jujutsuKaisen.jpg";
import luCi from "../assets/images/thumbs/lucifer.jpg";
import mH from "../assets/images/thumbs/moneyHeist.jpg";
import nT from "../assets/images/thumbs/naruto.jpg";
import pB from "../assets/images/thumbs/peakyBlinder.jpg";
import pnS from "../assets/images/thumbs/punisher.jpg";
import rM from "../assets/images/thumbs/rickMorty.jpg";
import sT from "../assets/images/thumbs/strangerThings.jpg";
import suits from "../assets/images/thumbs/suits.jpeg";
import LoadingThumbnails from "../components/LoadingThumbnails";
import { useEffect, useState } from "react";

const TVshows = [
  { id: "tv1", showUrl: bB },
  { id: "tv2", showUrl: bN },
  { id: "tv3", showUrl: dD },
  { id: "tv4", showUrl: dark },
  { id: "tv5", showUrl: dS },
  { id: "tv6", showUrl: frN },
  { id: "tv7", showUrl: jW },
  { id: "tv8", showUrl: sT },
  { id: "tv9", showUrl: pB },
  { id: "tv10", showUrl: jK },
  { id: "tv11", showUrl: mH },
];

const TrendingNow = [
  { id: "trending1", showUrl: sT },
  { id: "trending2", showUrl: pB },
  { id: "trending3", showUrl: jK },
  { id: "trending4", showUrl: dark },
  { id: "trending5", showUrl: mH },
  { id: "trending6", showUrl: frN },
  { id: "trending7", showUrl: rM },
];

const MyList = [
  { id: "my1", showUrl: luCi },
  { id: "my2", showUrl: nT },
  { id: "my3", showUrl: pnS },
  { id: "my4", showUrl: suits },
  { id: "my5", showUrl: mH },
  { id: "my6", showUrl: frN },
  { id: "my7", showUrl: rM },
];

const Recommended = [
  { id: "rec1", showUrl: suits },
  { id: "rec2", showUrl: dark },
  { id: "rec3", showUrl: frN },
  { id: "rec4", showUrl: suits },
  { id: "rec5", showUrl: jK },
  { id: "rec6", showUrl: frN },
  { id: "rec7", showUrl: sT },
];

const genres = ["Omnious", "Scary", "Suspenseful", "Chilling"];

export default function TVShowsScreen({
  navigation,
}: RootTabScreenProps<"TVShowsScreen">) {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // mocked load data from backend finish
      setloading(false);
    }, 2000);
  }, []);

  return (
    <LoadingThumbnails loading={loading}>
      <Animatable.View animation="slideInDown" style={styles.container}>
        <ScrollView style={styles.scroller}>
          <View style={styles.scrollWrapper}>
            <View style={styles.bigFrame}>
              <Image source={banner} style={styles.bannerPic} />
              <LinearGradient
                colors={["black", "transparent"]}
                style={styles.header}
              >
                <View style={styles.catBtn}>
                  <Text
                    style={styles.catText}
                    onPress={() => navigation.navigate("Modal")}
                  >
                    TV Shows{" "}
                    <Icon
                      type="feather"
                      color={"white"}
                      size={25}
                      name={"chevron-down"}
                      tvParallaxProperties={undefined}
                    ></Icon>
                  </Text>
                  <Text
                    style={styles.catText}
                    onPress={() => navigation.navigate("Modal")}
                  >
                    All Categories{" "}
                    <Icon
                      type="feather"
                      color={"white"}
                      size={25}
                      name={"chevron-down"}
                      tvParallaxProperties={undefined}
                    ></Icon>
                  </Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={["transparent", "#0008", "black"]}
                style={styles.bannerPlay}
              >
                <View style={styles.gener}>
                  {genres.map((genre) => {
                    return (
                      <Text key={genre} style={styles.genreText}>
                        {genre}
                      </Text>
                    );
                  })}
                </View>
                <View style={styles.BannerBox}>
                  <TouchableOpacity style={styles.bannerBtnSide}>
                    <Icon
                      type="ant-design"
                      color={"white"}
                      size={25}
                      name={"plus"}
                      tvParallaxProperties={undefined}
                    />
                    <Text style={styles.sideBtnText}>My List</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.showPlay}>
                    <Icon
                      type="entypo"
                      color={"black"}
                      size={35}
                      name={"controller-play"}
                      tvParallaxProperties={undefined}
                    />
                    <Text style={styles.playBtn}>Play</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.bannerBtnSide}>
                    <Icon
                      type="feather"
                      color={"white"}
                      size={25}
                      name={"info"}
                      tvParallaxProperties={undefined}
                    />
                    <Text style={styles.sideBtnText}>Info</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>

            <View style={styles.thumbFrame}>
              <ShowGrid
                title={"Top 10 TV Shows in Turkey"}
                showList={TVshows}
              />
              <ShowGrid title={"Popular On Netflix"} showList={MyList} />
              <ShowGrid title={"Trending Now"} showList={TrendingNow} />
              <ShowGrid title={"Recommended"} showList={Recommended} />
            </View>
          </View>
        </ScrollView>

        <StatusBar style="auto" />
      </Animatable.View>
    </LoadingThumbnails>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  scroller: {
    width: "99%",
    backgroundColor: "black",
  },

  scrollWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  bigFrame: {
    width: "98%",
    height: 530,
    backgroundColor: "black",
  },

  bannerPic: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  catBtn: {
    flexDirection: "row",

    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    paddingTop: 10,
  },

  catText: {
    flex: 1,
    fontSize: 18,
    color: "white",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    // gap: 4,
  },

  bannerPlay: {
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  gener: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  BannerBox: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  genreText: {
    flex: 1,
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },

  bannerBtnSide: {
    flex: 1,
  },

  sideBtnText: {
    color: "white",
    textAlign: "center",
  },

  showPlay: {
    width: "30%",
    height: "90%",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  playBtn: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },

  thumbFrame: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 10,
  },

  item: {
    width: 110,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
    margin: 10,
  },

  showImage: {
    width: "100%",
    height: "100%",
  },
});
