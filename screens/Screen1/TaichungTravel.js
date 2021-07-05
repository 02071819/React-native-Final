import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Octicons } from "@expo/vector-icons";
import { gs, colors } from "../../styles";
import TravelData from "../JSON/TravelAlbum.json";

export default function TaichungTravel({ navigation }) {

    const goTo101 = () => {
        navigation.navigate('Taipei101')
    }
    const goToCerem1 = () => {
        navigation.navigate('ceremony1')
    }
    const goToCerem2 = () => {
        navigation.navigate('ceremony2')
    }
    const goToWest = () => {
        navigation.navigate('West')
    }
    const goToMus = () => {
        navigation.navigate('Museum')
    }

    const goToPark = () => {
        navigation.navigate('Park')
    }
    const goToTaiwanMus = () => {
        navigation.navigate('TaiwanMus')
    }
    const goToPark2 = () => {
        navigation.navigate('Park2')
    }
    const goToRedBuild = () => {
        navigation.navigate('RedBuild')
    }
    const goToEgg = () => {
        navigation.navigate('Egg')
    }

 
    const goToNM1 = () => {
        navigation.navigate('NM1')
    }
    const goToNM2 = () => {
        navigation.navigate('NM2')
    }
    const goToNM3 = () => {
        navigation.navigate('NM3')
    }
    const goToNM4 = () => {
        navigation.navigate('NM4')
    }
    const goToNM5 = () => {
        navigation.navigate('NM5')
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.TravelList}>
                    <View>
                        <Text style={styles.Title}>熱門景點</Text>
                    </View>

                    <ScrollView horizontal={true}>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goTo101}>
                                    <Image source={{ uri: TravelData.Image[0].image2 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>台北101</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goToCerem1}>
                                    <Image source={{ uri: TravelData.Image[0].image3 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>國父紀念館</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goToCerem2}>
                                    <Image source={{ uri: TravelData.Image[0].image4 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>中正紀念堂</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goToWest}>
                                    <Image source={{ uri: TravelData.Image[0].image5 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>西門町</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goToMus}>
                                    <Image source={{ uri: TravelData.Image[0].image6 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>故宮博物院</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    {/* <View>
                        <FlatList
                            horizontal={true}
                            data={gallery}
                            renderItem={({ item }) => {
                                console.log(item)
                                return (
                                    <View style={{ paddingVertical: 20 }}>
                                        <TouchableOpacity onPress={goTo101}>
                                            <Image source={item.image} style={{
                                                width: 150,
                                                marginRight: 14, height: 250, borderRadius: 10
                                            }} />

                                            <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                                style={styles.LocationIcon} />
                                            <Text style={styles.ImageText}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    </View> */}
                    <View>
                        <Text style={styles.Title2}>藝文館所</Text>
                    </View>

                    <ScrollView horizontal={true}>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToPark}>
                                    <Image source={{ uri: TravelData.Image[0].image7 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>華山1914文創園區</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToTaiwanMus}>
                                    <Image source={{ uri: TravelData.Image[0].image8 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>國立臺灣博物館</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToRedBuild}>
                                    <Image source={{ uri: TravelData.Image[0].image9 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>西門紅樓</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToPark2}>
                                    <Image source={{ uri: TravelData.Image[0].image10 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>松山文創園區</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToEgg}>
                                    <Image source={{ uri: TravelData.Image[0].image11 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>臺北小巨蛋</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    {/* <View>
                        <FlatList
                            horizontal={true}
                            data={gallery2}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ paddingVertical: 60 }}>
                                        <TouchableOpacity>
                                            <Image source={item.image} style={{
                                                width: 150,
                                                marginRight: 14, height: 250, borderRadius: 10
                                            }} />

                                            <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                                style={styles.LocationIcon1} />
                                            <Text style={styles.ImageText}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    </View> */}

                    <View>
                        <Text style={styles.Title3}>夜市商圈</Text>
                    </View>

                    <ScrollView horizontal={true}>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM1}>
                                    <Image source={{ uri: TravelData.Image[0].image12 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>信義商圈</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM2}>
                                    <Image source={{ uri: TravelData.Image[0].image13 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>饒河街觀光夜市</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM3}>
                                    <Image source={{ uri: TravelData.Image[0].image14 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>東區商圈</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM4}>
                                    <Image source={{ uri: TravelData.Image[0].image15 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>公館商圈</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM5}>
                                    <Image source={{ uri: TravelData.Image[0].image16 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>士林觀光夜市</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    {/* <View>
                        <FlatList
                            horizontal={true}
                            data={gallery3}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ paddingVertical: 60 }}>
                                        <TouchableOpacity>
                                            <Image source={item.image} style={{
                                                width: 150,
                                                marginRight: 14, height: 250, borderRadius: 10
                                            }} />

                                            <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                                style={styles.LocationIcon2} />
                                            <Text style={styles.ImageText}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    </View> */}

                </View>
            </ScrollView>

            <View style={styles.headerstyle}>
                <Image source={{ uri: TravelData.Image[0].image1 }} style={styles.HeadImg} />

                <TouchableOpacity onPress={() => navigation.navigate('TaipeiScreen')}>
                    <AntDesign name="left" size={24} color={colors.text} />
                </TouchableOpacity>

                <View>
                    <TextInput style={styles.searchBox}
                        placeholder='Search Destination'
                        placeholderTextColor={colors.darkHl}>
                    </TextInput>

                    <TouchableOpacity style={styles.HeadSearch}>
                        <Octicons name="search" size={20} color={colors.darkHl} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.text,
    },
    TravelList: {
        marginTop: 80,
    },
    headerstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        paddingLeft: 8,
        paddingRight: 12,
        elevation: 2,
        position: 'absolute',
    },
    HeadSearch: {
        marginLeft: 270,
        position: 'relative',
        bottom: 30,
        right: 40,
        opacity: 0.6,
    },
    HeadImg: {
        width: 375,
        height: 450,
        position: "absolute",
        borderBottomRightRadius: 65,
    },
    searchBox: {
        position: 'relative',
        right: 32,
        height: 43,
        marginTop: 350,
        paddingRight: 150,
        backgroundColor: colors.text,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    Title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.darkBg,
        marginTop: 210,
        marginLeft: 20,
    },
    Title2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.darkBg,
        position: 'absolute',
        marginLeft: 20,
        marginTop: 10,
    },
    Title3: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.darkBg,
        position: 'absolute',
        marginLeft: 20,
    },
    LocationIcon: {
        position: "absolute",
        marginTop: 210,
        left: 5,
    },
    LocationIcon1: {
        position: "absolute",
        marginTop: 210,
        left: 5,
    },
    LocationIcon2: {
        position: "absolute",
        marginTop: 210,
        left: 5,
    },
    ImageText: {
        color: colors.text,
        fontSize: 12,
        position: 'absolute',
        marginTop: 218,
        left: 30,
        fontWeight:"600",
    },
});