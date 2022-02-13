/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          HomeScreen: {
            screens: {
              HomeScreen: "one",
            },
          },
          GamesScreen: {
            screens: {
              GamesScreen: "two",
            },
          },
          ComingSoonScreen: {
            screens: {
              ComingSoonScreen: "three",
            },
          },
          FastLaughsScreen: {
            screens: {
              FastLaughsScreen: "four",
            },
          },
          DownloadsScreen: {
            screens: {
              DownloadsScreen: "five",
            },
          },
          MoviesScreen: {
            screens: {
              MoviesScreen: "six",
            },
          },
          TVShowsScreen: {
            screens: {
              TVShowsScreen: "seven",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
