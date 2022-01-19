import React from 'react';
import {Icon, Input} from 'react-native-elements';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from 'react-native-elements';
import Header from "./Header";


export default ({navigation}) => {

    return (
        <View style={styles.container}>
            <Header title={""}>

            </Header>
            <View style={styles.container}>

                <View >

                    <Text style={styles.textName}>
                        Smartinum
                    </Text>

                    <TextInput style={styles.inputText}
                               placeholder="Username"
                               errorStyle={{color: "red"}}
                               errorMessage="ENTER A VALID ERROR HERE"
                    />
                    <TextInput placeholder="Password" secureTextEntry={true}
                               style={styles.inputText}

                    />

                    <View style={{
                        flexDirection:"row",
                    }}>
                        <Button
                            title="Log in"
                            containerStyle={{
                                flex: 1,
                                height: 40,
                                width: 100,
                                marginHorizontal: 20,
                                marginVertical: 20,
                            }}
                            buttonStyle={{
                                backgroundColor: '#FD9A3F',
                                borderRadius: 100 / 2
                            }}
                            titleStyle={{
                                color: 'white',
                                marginHorizontal: 20,
                            }}
                            onPress={() => navigation.navigate("User_info")}

                        />
                        <Button
                            containerStyle={{
                                flex: 1,
                                width: 100,
                                marginHorizontal: 20,
                                marginVertical: 20,
                            }}
                            title="Sign up"
                            type="clear"
                            titleStyle={{color: '#FD9A3F'}}
                            onPress={() => navigation.navigate("Sign Up")}
                        />
                    </View>
                </View>
            </View>
        </View>


    );

};

const styles = StyleSheet.create({
    inputText: {
        borderColor:"black",
        backgroundColor:"#FFFFFF",
        width:300,
        borderWidth: 0,
        borderStyle: "solid",
        fontSize:15,
        borderRadius: 25,
        margin: 10,
        paddingLeft: 20,


    },
    textName: {
        marginBottom: 30,
        fontFamily: 'Roboto Mono',
        fontWeight: "bold",
        fontSize: 38,
        lineHeight: 50,
        color: '#FD9A3F',
        alignItems: 'flex-end',
        marginLeft: 20,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",

    },
});

