/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import logo from "../assets/images/netflixN.png";
import netflixRightIcon from "../assets/images/netflixRight.png";
import GamesScreen from "../screens/GamesScreen";
import ComingSoonScreen from "../screens/ComingSoonScreen";
import FastLaughsScreen from "../screens/FastLaughsScreen";
import DownloadsScreen from "../screens/DownloadsScreen";
import TVShowsScreen from "../screens/TVShowsScreen";
import MoviesScreen from "../screens/MoviesScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"HomeScreen">) => ({
          title: "Home",
          headerTitle: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="search"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 20 }}
              />
              <Image
                source={netflixRightIcon}
                style={{ width: 30, height: 30, marginHorizontal: 10 }}
              />
            </View>
          ),
          headerLeft: () => (
            <View>
              <Image source={logo} style={{ width: 40, height: 40 }} />
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="GamesScreen"
        component={GamesScreen}
        options={{
          title: "Games",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="gamepad" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ComingSoonScreen"
        component={ComingSoonScreen}
        options={{
          title: "Coming Soon",
          tabBarIcon: ({ color }) => (
            <View style={{ position: "relative" }}>
              <TabBarIcon name="video-camera" color={color} />
              <Text style={styles.badge}>4</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="FastLaughsScreen"
        component={FastLaughsScreen}
        options={{
          title: "Fast Laughs",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="smile-o" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="DownloadsScreen"
        component={DownloadsScreen}
        options={{
          title: "Downloads",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="download" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MoviesScreen"
        component={MoviesScreen}
        options={({ navigation }: RootTabScreenProps<"MoviesScreen">) => ({
          title: "Movies",
          tabBarItemStyle: { display: "none" },
          headerRight: () => (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="search"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 20 }}
              />
              <Image
                source={netflixRightIcon}
                style={{ width: 30, height: 30, marginHorizontal: 10 }}
              />
            </View>
          ),
          headerLeft: () => (
            <View>
              <FontAwesome
                name="arrow-left"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginLeft: 10 }}
                onPress={() => navigation.canGoBack() && navigation.goBack()}
              />
            </View>
          ),
        })}
      />
      <BottomTab.Screen
        name="TVShowsScreen"
        component={TVShowsScreen}
        options={({ navigation }: RootTabScreenProps<"TVShowsScreen">) => ({
          title: "TV Shows",
          tabBarItemStyle: { display: "none" },
          headerRight: () => (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="search"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 20 }}
              />
              <Image
                source={netflixRightIcon}
                style={{ width: 30, height: 30, marginHorizontal: 10 }}
              />
            </View>
          ),
          headerLeft: () => (
            <View>
              <FontAwesome
                name="arrow-left"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginLeft: 10 }}
                onPress={() => navigation.canGoBack() && navigation.goBack()}
              />
            </View>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -10 }} {...props} />;
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "red",
    color: "#fff",
    height: 20,
    width: 20,
    borderRadius: 50,
    textAlign: "center",
  },
});
