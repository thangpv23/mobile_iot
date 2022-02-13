import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Icon} from 'react-native-elements';


export default (props) => {
    // const openRoomList = () =>{
    //     console.log("touch");
    //     props.navigation.navigate("Room",{homeID:props.homeId});
    // };
    return (
        <View >
            <View  style={styles.container}>
                <Icon name='home-outline'
                      type =  'ionicon'
                      color='#FFF'
                      size={30}
                      style={styles.icon}>
                </Icon>
            </View>
            <Text style={styles.text}>
                {props.name}
            </Text>
        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        height: 100,
        width: 100,
        borderRadius: 100/5,
        alignContent: 'center',
        backgroundColor:'#FD9A3F',
        justifyContent:"center"
    },
    icon:{
        alignSelf: 'center',
        alignItems: 'center'
        // backgroundColor: '#FD9A3F',


    },
    text:{
        paddingTop: 10,
        alignSelf: 'center',
        alignItems: 'center'
        // backgroundColor: '#FD9A3F',


    }
})