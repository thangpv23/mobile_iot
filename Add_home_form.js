import React from 'react';
import {Icon, Input} from 'react-native-elements';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from 'react-native-elements';
import Header from "./AppHeader";


export default ({navigation}) => {

    return (
        <View style={styles.container}>
            <Header title={""}>

            </Header>
            <View style={styles.container}>

                <View >

                    <Text style={styles.textName}>
                        Add House
                    </Text>

                    <TextInput style={styles.inputText}
                               placeholder="House name"


                    />
                    <TextInput style={styles.inputText}
                               placeholder="Address"


                    />

                    <View style={{
                        flexDirection:"row",
                    }}>
                        <Button
                            icon={
                                <Icon
                                    name="plus"
                                    type="font-awesome"
                                    color="white"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            title="Start Building"

                            onPress={() => {
                                navigation.navigate("User_info");
                                toggleOverlay()
                            }}

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

