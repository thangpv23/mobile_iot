import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Header from "./Header";
import Add_button from "./Add_button";
import House_button from "./House_button";
import {Button, Icon, Overlay} from "react-native-elements";

type OverlayComponentProps = {};

export default ({navigation}) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View>
            <Header title={""}>

            </Header>
            <Text style={styles.text}>
                Username
            </Text>
            <View style={styles.container}>


                <View style={styles.main}>
                    <View style={styles.item}>
                        <House_button></House_button>
                    </View>
                    <View style={styles.item}>
                        <House_button></House_button>
                    </View>
                    <View style={styles.item}>
                        <House_button></House_button>
                    </View>
                    <TouchableOpacity style={styles.item} onPress={toggleOverlay}>
                        <Add_button></Add_button>
                    </TouchableOpacity>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={styles.form}>
                            <View style={styles.form}>
                                <View style={styles.form}>
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
                                        flexDirection: "row",
                                        alignContent:'center',
                                        alignItems: 'center',
                                        backgroundColor: '#FD9A3F',
                                        borderRadius: 100/50

                                    }}>
                                        <Button
                                            buttonStyle={{
                                                backgroundColor:'rgba(253, 154, 63, 1)',
                                                borderRadius : 30,
                                            }}
                                            borderRadius= {100/50}
                                            icon={
                                                <Icon
                                                    name="plus"
                                                    type="font-awesome"
                                                    color="white"
                                                    size={25}
                                                    iconStyle={{marginRight: 10}}

                                                />
                                            }
                                            title="Add"
                                            onPress={() => {
                                                navigation.navigate("Room");
                                                toggleOverlay()
                                            }}

                                        />

                                    </View>
                                </View>
                            </View>
                        </View>
                    </Overlay>


                </View>
            </View>
        </View>


    )

};
const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100/5

    },
    main: {
        width: 500,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',

    },
    item: {
        padding: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 20,
        color: "#FD9A3F"
    },
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

        fontFamily: 'Roboto Mono',
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 50,
        color: '#FD9A3F',
        alignItems: 'flex-end',
        marginLeft: 20,
    },
    form: {

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100/50
    }
})