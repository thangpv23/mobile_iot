import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import Header from '../AppHeader';
import {useGetUserQuery} from "../services/user/user";
import {Button} from "react-native-elements";

export default () => {

    const {data} = useGetUserQuery();
    const initState = {
        firstName: "",
        lastName:"",
    }
    const [inputState, setInputState] = useState(initState);
    const handleInput = (type, value) => {
        setInputState({
            ...inputState,
            [type]: value,
        })
    }

    const handleSubmit = () => {
        console.log("change user info")
    };

    return (
        <ScrollView>
            <Header title={""}/>
            <View>
                <Text style={styles.textName}>
                    Thông tin tài khoản
                </Text>

                <View style={styles.info}>
                    <View>
                        <Text style={styles.text}>
                            First Name
                        </Text>
                        <TextInput style={styles.inputText}
                                   placeholder="firstName"
                                   defaultValue={data?.firstName}
                                   onChangeText={(value) =>handleInput("firstName",value)}
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                        />

                        <Text style={styles.text}>
                            Last Name
                        </Text>
                        <TextInput style={styles.inputText}
                                   placeholder="lastName"
                                   onChangeText={(value) =>handleInput("lastName",value)}
                                   defaultValue={data?.lastName}
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                        />

                        <Text style={styles.text}>
                            Email
                        </Text>
                        <TextInput style={styles.inputText}
                                   placeholder="Email"
                                   value={data?.email}
                                   editable={false}
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                        />

                        <Text style={styles.text}>
                            Username
                        </Text>
                        <TextInput style={styles.inputText}
                                   placeholder="Username"
                                   editable={false}
                                   value={data?.login}
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                        />
                    </View>
                </View>


            </View>

        </ScrollView>
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
        paddingTop: 20,
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
