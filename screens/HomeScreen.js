import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView , TouchableOpacity, StatusBar, Platform, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>
                                STELLAR APP
                            </Text>

                            <Image
                                source={require('../assets/main-icon.png')}
                                style={{height:300, width:300, margin:90,}}
                            />
                        </View>

                        <TouchableOpacity style={styles.routeCard}
                            onPress={
                                ()=>{
                                    this.props.navigation.navigate("Space Craft")
                                }
                            }>
                            <Text style={styles.routeText}>
                               Space Crafts
                            </Text>
                            <Text style={styles.knowMore}>{"know more --->"}</Text>
                            
                            <Image source={require("../assets/space_crafts.png")} style={styles.iconImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard}
                            onPress={
                                ()=>{
                                    this.props.navigation.navigate("Daily Pic")
                                }
                            }
                        >
                            <Text style={styles.routeText}>
                                Daily Pictures
                            </Text>
                            <Text style={styles.knowMore}>{"know more --->"}</Text>
                            
                            <Image source={require("../assets/daily_pictures.png")} style={styles.iconImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard}
                            onPress={
                                ()=>{
                                    this.props.navigation.navigate("Star Map")
                                }
                            }
                        >
                            <Text style={styles.routeText}>
                                Star Map
                            </Text>
                            <Text style={styles.knowMore}>{"know more --->"}</Text>
                            
                            <Image source={require("../assets/star_map.png")} style={styles.iconImage}/>
                        </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"? StatusBar.currentHeight:0,
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center',
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white',
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30,
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15,
    },
    bgDigit:{
        position:"absolute",
        color:'blue',
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1,
    },
    iconImage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80,
    }
})