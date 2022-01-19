import React from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import Header from './Header';
export default () => {

    return (
        <View>
            <Header title={""}>

            </Header>

            <View>
                <Text style={styles.textName}>
                    Thông tin tài khoản
                </Text>

                <View style={styles.info}>
                    <View>
                        <Text style={styles.text}>
                            Email
                        </Text>
                        <TextInput style={styles.inputText}
                                   placeholder="Email"
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                        />

                        <Text style={styles.text}>
                            Username
                        </Text>
                        <TextInput style={styles.inputText}
                                   placeholder="Username"
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                        />
                        <Text style={styles.text}>
                            Password
                        </Text>
                        <TextInput style={styles.inputText}
                                   placeholder="Password"
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
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
        fontSize: 20,
        lineHeight: 50,
        color: '#FD9A3F',
        alignItems: 'flex-start',
        marginLeft: 20,
    },

    info: {
        paddingTop: 100,
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        paddingLeft: 20,
        color: '#FD9A3F',
        fontSize: 14,
        fontWeight: "bold",
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
