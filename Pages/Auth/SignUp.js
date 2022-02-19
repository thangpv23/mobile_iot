import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useSignUpMutation} from "../../services/auth/auth";


export default ({navigation}) => {

    const initState = {
        fistName: "",
        LastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    };
    const [inputState, setInputState] = useState(initState);
    const [signUp, {isLoading}] = useSignUpMutation();

    const handleInput = (type, value) => {
        setInputState({
            ...inputState,
            [type]: value,
        })
    }
    const handleSignUp = async () => {
        try {
            const body = {
                email: inputState.email,
                login: inputState.username,
                password: inputState.password,
                firstName:inputState.firstName,
                lastName: inputState.lastName,
            };
            await signUp(body).unwrap();
            navigation.navigate("Log_in");
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textName}>
                            Sign Up
                        </Text>
                        <TextInput style={styles.inputText}
                                   placeholder="First Name"
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                                   onChangeText={(value) => handleInput("firstName", value)}
                        />
                        <TextInput style={styles.inputText}
                                   placeholder="Last name"
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                                   onChangeText={(value) => handleInput("lastName", value)}
                        />
                        <TextInput style={styles.inputText}
                                   placeholder="Email"
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                                   onChangeText={(value) => handleInput("email", value)}
                        />
                        <TextInput style={styles.inputText}
                                   placeholder="Username"
                                   errorStyle={{color: "red"}}
                                   errorMessage="Not a valid"
                                   onChangeText={(value) => handleInput("username", value)}
                        />
                        <TextInput placeholder="Password" secureTextEntry={true}
                                   style={styles.inputText}
                                   errorStyle={{color: "red"}}
                                   errorMessage="Too short"
                                   onChangeText={(value) => handleInput("password", value)}

                        />

                        <TextInput placeholder="Confirm Password" secureTextEntry={true}
                                   style={styles.inputText}
                                   errorStyle={{color: "red"}}
                                   errorMessage="Must be the same password"
                                   onChangeText={(value) => handleInput("confirmPassword", value)}
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
                                onPress={handleSignUp}
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
                                onPress={() => navigation.navigate('Log_in')}
                            />
                        </View>
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

