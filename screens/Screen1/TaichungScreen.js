import React, { useRef, useState, useContext, useEffect } from 'react';
import Carousel from 'react-native-anchor-carousel';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, AsyncStorage, Dimensions } from 'react-native';
import { Ionicons, FontAwesome, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { gs, colors } from "../../styles";
import Taichungheader from "../components/Taichungheader";
import HomeData from "../JSON/HomeAlbum.json";

function TaichungScreen({ navigation }) {

    const goToTravel = () => {
        navigation.navigate('TaichungTravel')
    }
    const goToFood = () => {
        navigation.navigate('FoodScreen')
    }
    const goToHotel = () => {
        navigation.navigate('HotelScreen')
    }
  
    return (
      <View style={styles.container}>
        <StatusBar barstyle="light-content" />
        <Taichungheader />
  
        <ScrollView>
          <View style={gs.sectionContainer}>
            <View style={styles.amentitiesContainer}>
              <View style={styles.amentityContainer1}>
                <TouchableOpacity
                  onPress={goToTravel} style={styles.amentity}  >
                  <Image
                    style={{ width: 100, height: 93 }}
                    source={{ uri: HomeData.Image[0].icon1 }}
                  />
                </TouchableOpacity>
                <Text style={styles.amenityName}>觀光</Text>
              </View>
            </View>
  
            <View style={styles.amentitiesContainer}>
              <View style={styles.amentityContainer2}>
                <TouchableOpacity
                  onPress={goToFood} style={styles.amentity}>
                  <Image source={{ uri: HomeData.Image[0].icon2 }} style={{ width: 100, height: 90, marginLeft: 8 }} />
                </TouchableOpacity>
                <Text style={styles.amenityName}>美食</Text>
              </View>
            </View>
  
            <View style={styles.amentitiesContainer}>
              <View style={styles.amentityContainer3}>
                <TouchableOpacity
                  onPress={goToHotel} style={styles.amentity}>
                  <Image source={{ uri: HomeData.Image[0].icon3 }} style={{ width: 100, height: 90 }} />
                </TouchableOpacity>
                <Text style={styles.amenityName}>住宿</Text>
              </View>
            </View>
  
            {/* <View style={styles.carouselContainer}>
              <Carousel style={styles.carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                seperatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View> */}
  
          </View >
        </ScrollView>
      </View>
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
  amentityContainer4: {
    alignItems: "center",
    position: 'absolute',
    width: 95,
    left: -12,
    top: -25,
  },
  amentityContainer5: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 105,
    top: -50,
  },
  amentityContainer6: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 230,
    top: -75,
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

export default TaichungScreen;