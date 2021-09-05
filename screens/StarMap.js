import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';

export default class StarMapScreen extends React.Component{
    
    constructor(){
        super();
        this.state={
            location:{},
        }
    }

    getLocationFunction=()=>{
        axios.get(path) 
        .then((response)=>{
            this.setState({
                location:response.data,
            })
            .catch((error)=>{
                alert(error.message)
            })
        })
    }

    render(){
        const longitude = this.state;
        const latitude = this.state;
        
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`

        return(
            <View atyle={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}>

                    <TextInput
                        style={{height:40, borderColor:'violet', borderWidth:2, borderRadius:20}}
                        placeholder="ENTER YOUR LATITUDE"
                        placeholderTextColor = "#ffff#000000"
                        onChangeText={(text)=>{
                            this.setState({
                                latitude:text,
                            })
                        }}
                    />

                    <TextInput
                        style={{height:40, borderColor:'violet', borderWidth:2, borderRadius:20}}
                        placeholder="ENTER YOUR LONGITUDE"
                        placeholderTextColor = "#ffff#000000"
                        onChangeText={(text)=>{
                            this.setState({
                                longitude:text,
                            })
                        }}
                    />


                    <WebView
                        scalesPageToFit={true}
                        source={{uri: path}}
                        style={{marginTop:20, marginBottom:20,}}
                        region={{
                            latitude:this.state.location.latitude,
                            longitude:this.state.location.longitude,
                            latitudeDelta:100,
                            longitudeDelta:100,
                        }}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'center',
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    map:{
        width:'100%',
        height:'100%',
    }
})