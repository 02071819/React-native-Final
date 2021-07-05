import React, { useRef, useState, useContext, useEffect } from 'react';
import Carousel from 'react-native-anchor-carousel';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, AsyncStorage, Dimensions } from 'react-native';
import { Ionicons, FontAwesome, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { gs, colors } from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TravelScreen from "./screens/Screen/TravelScreen";
import Taipei101 from "./screens/Screen/Taipei101";
import ceremony1 from "./screens/Screen/ceremony1";
import ceremony2 from "./screens/Screen/ceremony2";
import West from "./screens/Screen/West";
import Museum from "./screens/Screen/Museum";
import Park from "./screens/Screen/Park";
import TaiwanMus from "./screens/Screen/TaiwanMus";
import Park2 from "./screens/Screen/Park2";
import RedBuild from "./screens/Screen/RedBuild";
import Egg from "./screens/Screen/Egg";
import NM1 from "./screens/Screen/NM1";
import NM2 from "./screens/Screen/NM2";
import NM3 from "./screens/Screen/NM3";
import NM4 from "./screens/Screen/NM4";
import NM5 from "./screens/Screen/NM5";
import mp101 from "./screens/Screen/mp101";
import mpcere1 from "./screens/Screen/mpcere1";
import mpcere2 from "./screens/Screen/mpcere2";
import mpWest from "./screens/Screen/mpWest";
import mpMus from "./screens/Screen/mpMus";
import mpPark1 from "./screens/Screen/mpPark1";
import mpTaiwanMus from "./screens/Screen/mpTaiwanMus";
import mpPark2 from "./screens/Screen/mpPark2";
import mpRB from "./screens/Screen/mpRB";
import mpEgg from "./screens/Screen/mpEgg";
import mpNM1 from "./screens/Screen/mpNM1";
import mpNM2 from "./screens/Screen/mpNM2";
import mpNM3 from "./screens/Screen/mpNM3";
import mpNM4 from "./screens/Screen/mpNM4";
import mpNM5 from "./screens/Screen/mpNM5";
import FoodScreen from "./screens/Screen/FoodScreen";
import mpfood1 from "./screens/Screen/mpfood1";
import mpfood2 from "./screens/Screen/mpfood2";
import mpfood3 from "./screens/Screen/mpfood3";
import mpfood4 from "./screens/Screen/mpfood4";
import mpfood5 from "./screens/Screen/mpfood5";
import mpfood6 from "./screens/Screen/mpfood6";
import mpfood7 from "./screens/Screen/mpfood7";
import HotelScreen from "./screens/Screen/HotelScreen";
import TaipeiScreen from "./screens/Screen/TaipeiScreen";
import TaichungScreen from "./screens/Screen1/TaichungScreen";
import TaichungTravel from "./screens/Screen1/TaichungTravel";

import HomeData from "./screens/JSON/HomeAlbum.json";
import LoginScreen from "./screens/Screen/LoginScreen";
import Setting from './screens/Screen/Setting';
import Serve from './screens/Screen/Serve';
import Taiwanheader from "./screens/components/Taiwanheader";
import { SplashScreen } from 'expo';


function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar barstyle="light-content" />
      <Taiwanheader />

      <ScrollView>
        <View style={gs.sectionContainer}>
          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaipeiScreen')} style={styles.amentity}  >
                <Image
                  style={{ width: 100, height: 93 }}
                  source={{ uri: HomeData.Image[0].icon1 }}
                />
              </TouchableOpacity>
              <Text style={styles.amenityName}>台北</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer2}>
              <TouchableOpacity
                onPress={() => navigation.navigate('FoodScreen')} style={styles.amentity}>
                <Image source={{ uri: HomeData.Image[0].icon2 }} style={{ width: 100, height: 90, marginLeft: 8 }} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>新北</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer3}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaipeiScreen')} style={styles.amentity}>
                <Image source={{ uri: HomeData.Image[0].icon3 }} style={{ width: 100, height: 90 }} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>桃園</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer4}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaichungScreen')} style={styles.amentity}  >
                <Image
                  style={{ width: 100, height: 93 }}
                  source={{ uri: HomeData.Image[0].icon1 }}
                />
              </TouchableOpacity>
              <Text style={styles.amenityName}>台中</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer5}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaipeiScreen')} style={styles.amentity}  >
                <Image
                  style={{ width: 100, height: 93 }}
                  source={{ uri: HomeData.Image[0].icon1 }}
                />
              </TouchableOpacity>
              <Text style={styles.amenityName}>台南</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer6}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaipeiScreen')} style={styles.amentity}  >
                <Image
                  style={{ width: 100, height: 93 }}
                  source={{ uri: HomeData.Image[0].icon1 }}
                />
              </TouchableOpacity>
              <Text style={styles.amenityName}>高雄</Text>
            </View>
          </View>

        </View >
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const CityStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Travel"
        component={TravelScreen}
      />
      <Stack.Screen
        name="Taipei101"
        component={Taipei101}
      />
      <Stack.Screen
        name="ceremony1"
        component={ceremony1}
      />
      <Stack.Screen
        name="ceremony2"
        component={ceremony2}
      />
      <Stack.Screen
        name="West"
        component={West}
      />
      <Stack.Screen
        name="Museum"
        component={Museum}
      />
      <Stack.Screen
        name="Park"
        component={Park}
      />
      <Stack.Screen
        name="TaiwanMus"
        component={TaiwanMus}
      />
      <Stack.Screen
        name="Park2"
        component={Park2}
      />
      <Stack.Screen
        name="RedBuild"
        component={RedBuild}
      />
      <Stack.Screen
        name="Egg"
        component={Egg}
      />
      <Stack.Screen
        name="NM1"
        component={NM1}
      />
      <Stack.Screen
        name="NM2"
        component={NM2}
      />
      <Stack.Screen
        name="NM3"
        component={NM3}
      />
      <Stack.Screen
        name="NM4"
        component={NM4}
      />
      <Stack.Screen
        name="NM5"
        component={NM5}
      />
      <Stack.Screen
        name="mp101"
        component={mp101}
      />
      <Stack.Screen
        name="mpcere1"
        component={mpcere1}
      />
      <Stack.Screen
        name="mpcere2"
        component={mpcere2}
      />
      <Stack.Screen
        name="mpWest"
        component={mpWest}
      />
      <Stack.Screen
        name="mpMus"
        component={mpMus}
      />
      <Stack.Screen
        name="mpPark1"
        component={mpPark1}
      />
      <Stack.Screen
        name="mpTaiwanMus"
        component={mpTaiwanMus}
      />
      <Stack.Screen
        name="mpPark2"
        component={mpPark2}
      />
      <Stack.Screen
        name="mpRB"
        component={mpRB}
      />
      <Stack.Screen
        name="mpEgg"
        component={mpEgg}
      />
      <Stack.Screen
        name="mpNM1"
        component={mpNM1}
      />
      <Stack.Screen
        name="mpNM2"
        component={mpNM2}
      />
      <Stack.Screen
        name="mpNM3"
        component={mpNM3}
      />
      <Stack.Screen
        name="mpNM4"
        component={mpNM4}
      />
      <Stack.Screen
        name="mpNM5"
        component={mpNM5}
      />
      <Stack.Screen
        name="FoodScreen"
        component={FoodScreen}
      />
      <Stack.Screen
        name="mpfood1"
        component={mpfood1}
      />
      <Stack.Screen
        name="mpfood2"
        component={mpfood2}
      />
      <Stack.Screen
        name="mpfood3"
        component={mpfood3}
      />
      <Stack.Screen
        name="mpfood4"
        component={mpfood4}
      />
      <Stack.Screen
        name="mpfood5"
        component={mpfood5}
      />
      <Stack.Screen
        name="mpfood6"
        component={mpfood6}
      />
      <Stack.Screen
        name="mpfood7"
        component={mpfood7}
      />
      <Stack.Screen
        name="HotelScreen"
        component={HotelScreen}
      />
      <Stack.Screen
        name="TaipeiScreen"
        component={TaipeiScreen}
      />
      <Stack.Screen
        name="TaichungScreen"
        component={TaichungScreen}
      />
      <Stack.Screen
        name="TaichungTravel"
        component={TaichungTravel}
      />
    </Stack.Navigator>
  );
}

const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";

const App = () => {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAfJjBh-q89uGaYzWGh6W3BEHWjbqFDWsY",
      authDomain: "f2e2020-93de0.firebaseapp.com",
      databaseURL: "https://f2e2020-93de0.firebaseio.com",
      projectId: "f2e2020-93de0",
      storageBucket: "f2e2020-93de0.appspot.com",
      messagingSenderId: "195178592876",
      appId: "1:195178592876:web:0f891d50ca8f77a52e3649",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);


  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer initialState={initialNavigationState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }>

        <Tab.Navigator
          initialRoute="Home"
          activeColor="#00BFFF"
          inactiveColor="#dedede"
          style={{ backgroundColor: '#000' }}
          barStyle={{ backgroundColor: '#0f0f0f', padding: 4 }}
        >
          <Tab.Screen name="首頁" component={CityStack}
            options={{
              tabBarLabel: '首頁',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen name="收藏" component={Serve}
            options={{
              tabBarLabel: '收藏',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen name="我的" component={LoginStack}
            options={{
              tabBarLabel: '我的',
              tabBarIcon: ({ color }) => (
                <Ionicons name="md-person" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        option={{
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.text,
  },
  amentitiesContainer: {
    marginTop: 25,
  },
  amentityContainer1: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    right: 228,
    top: -5,
  },
  amentityContainer2: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 105,
    top: -30,
  },
  amentityContainer3: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 230,
    top: -55,
  },
  amentityContainer4: {
    alignItems: "center",
    position: 'absolute',
    width: 95,
    left: -12,
    bottom: -125,
  },
  amentityContainer5: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 110,
    bottom: -100,
  },
  amentityContainer6: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 230,
    bottom: -75,
  },
  amentity: {
    width: 50,
    height: 50,
    borderRadius: 48 / 2,
    ...gs.center,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    // backgroundColor: "#444",
  },
  amenityName: {
    color: colors.darkBg,
    fontSize: 13,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "center",
  },
  carouselContainer: {
    marginTop: 70,
    width: "100%",
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Carousel: {
    flex: 1,
    overflow: 'visible',
  },
  carouselImage: {
    width: 200,
    height: 250,
    borderRadius: 10,
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0,9)',
  },
  carouselText: {
    fontSize: 12,
    padding: 14,
    color: colors.text,
    bottom: 45,
    left: 13,
    fontWeight: 'bold',
  },
  LocationIcon: {
    position: "absolute",
    top: 215,
    left: 3,
  },
});

export default App;