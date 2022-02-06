import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";


export default ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textName}>Smartinum</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.inputText}
                                   value={username}
                                   onChangeText={setUsername}
                                   placeholder="Username"
                                   errorStyle={{color: "red"}}
                                   errorMessage="ENTER A VALID ERROR HERE"
                        />
                        {
                            username   ?
                            <TouchableOpacity style={styles.closeButtonParent} onPress={() => setUsername("")}>
                                <Image style={styles.closeButton} source={require("../../assets/close.png")}/>
                            </TouchableOpacity>:null
                        }
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder="Password" secureTextEntry={true}
                                   value={password}
                                   onChangeText={setPassword}
                                   style={styles.inputText}
                        />
                        {
                            password ?
                            <TouchableOpacity style={styles.closeButtonParent} onPress={() => setPassword("")}>
                                <Image style={styles.closeButton} source={require("../../assets/close.png")}/>
                            </TouchableOpacity>:null
                        }
                    </View>
                    <View style={{
                        flexDirection: "row",
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
    inputWrapper: {
        display: "flex",
        flexDirection: "row",
        borderColor: "black",
        backgroundColor: "#FFFFFF",
        width: 300,
        borderRadius: 25,
        borderWidth: 0,
        borderStyle: "solid",
        fontSize: 15,
        margin: 10,
        paddingLeft: 20,
    },
    inputText: {
        flexGrow: 1,
    },
    closeButtonParent: {
        marginRight: 15,
        justifyContent: "center",
    },
    closeButton: {
        height: 12,
        width: 12,
    },
});

