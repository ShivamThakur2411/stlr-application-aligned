import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ImageBackground, Platform, StatusBar, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <SafeAreaView>
                    <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Text style={styles.titleText}>
                                STELLAR APP
                            </Text>
                        </View>

                        <View style={styles.titleBar}>
                            <Image
                                source={require('../assets/main-icon.png')}
                                style={{height:300, width:300}}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={
                                ()=>{
                                    this.props.navigation.navigate("Space Craft")
                                }}
                                    style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Space Craft
                                </Text>
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/space_crafts.png')}
                                style={{height:100, width:100}}
                            />
                        </View>


                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={
                                ()=>{
                                    this.props.navigation.navigate("Daily Pic")
                                }}
                                    style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Daily Pics
                                </Text>
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/daily_pictures.png')}
                                style={{height:100, width:100}}
                            />
                        </View>


                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={
                                ()=>{
                                    this.props.navigation.navigate("Star Map")
                                }}
                                    style={styles.button}>
                                <Text style={styles.buttonText}>
                                    Star Map here
                                </Text>
                            </TouchableOpacity>
                            <Image
                                source={require('../assets/star_map.png')}
                                style={{height:100, width:100}}
                            />
                        </View>

                    </ImageBackground>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenText:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
    },
    titleBar:{
        justifyContent:'center',
        alignSelf:'center',
        textAlign:'center',
    },
    titleText:{
        fontSize:50,
        fontWeight:'bold',
        color:'white',
    },
    buttonContainer:{
        flex:1,
        alignSelf:'center',
        textAlign:'center',
        marginTop:40,
        flexDirection:'row',
    },
    button:{
        alignSelf:'center',
        borderRadius:100,
        borderWidth:5,
        backgroundColor:'white',
        width:300,
        height:60,
    },
    buttonText:{
        fontSize:35,
        fontWeight:'bold',
        color:'purple',
        textAlign:'center',
    }
})