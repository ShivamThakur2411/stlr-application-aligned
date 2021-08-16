import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class DailyPicScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.screenText}>
                    This is my DailyPic SCREEN
                </Text>
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
    }
})