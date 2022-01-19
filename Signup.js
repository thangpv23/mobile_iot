import React from 'react';
import {Button} from 'react-native-elements';
import {StyleSheet, Text, TextInput, View} from "react-native";
import Header from "./Header";


export default ({navigation}) => {

    return (
        <View style={styles.container}>
            <Header title={""}>

            </Header>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textName}>
                        Sign Up
                    </Text>

                    <TextInput style={styles.inputText}
                               placeholder="Email"
                               errorStyle={{color: "red"}}
                               errorMessage="Not a valid"
                    />
                    <TextInput style={styles.inputText}
                               placeholder="Username"
                               errorStyle={{color: "red"}}
                               errorMessage="Not a valid"
                    />
                    <TextInput placeholder="Password" secureTextEntry={true}
                               style={styles.inputText}
                               errorStyle={{color: "red"}}
                               errorMessage="Too short"

                    />

                    <TextInput placeholder="Confirm Password" secureTextEntry={true}
                               style={styles.inputText}
                               errorStyle={{color: "red"}}
                               errorMessage="Must be the same password"

                    />

                    <View style={{
                        flexDirection: "row",
                    }}>
                        <Button
                            title="Sign up"
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
                            onPress={() => navigation.navigate('Log In')}

                        />
                        <Button
                            containerStyle={{
                                flex: 1,
                                width: 100,
                                marginHorizontal: 20,
                                marginVertical: 20,
                            }}
                            title="Cancel"
                            type="clear"
                            titleStyle={{color: '#FD9A3F'}}
                            onPress={() => navigation.navigate('Log In')}
                        />
                    </View>
                </View>

            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    inputText: {
        borderColor: "black",
        backgroundColor: "#FFF",
        width: 300,
        borderWidth: 0,
        borderStyle: "solid",
        fontSize: 15,
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

