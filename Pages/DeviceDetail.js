import React, {useState} from "react";
import {StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from "react-native";
import AppHeader from "../AppHeader";

import {Button, Icon, Overlay} from "react-native-elements";
import ModalSelector from 'react-native-modal-selector'
import DeviceControler from "../Components/Button/DeviceControler";


export default ({navigation}) => {
    const [visible, setVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const toggleDeleteOverlay = () => {
        setDeleteVisible(!deleteVisible);
    };
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const handleLongPressButton = () => {
        toggleDeleteOverlay();
    }

    let index = 0;
    const data = [
        {key: index++, section: true, label: 'Devices List'},
        {key: index++, label: 'Device 1'},
        {key: index++, label: 'Device 2'},
        {key: index++, label: 'Device 3'},

    ];
    return (
        <View>
            <AppHeader title={""}>

            </AppHeader>
            <Text style={styles.text}>
                Username > Home 1 > Room 1
            </Text>
            <View style={styles.container}>


                <View style={styles.main}>
                    <View style={styles.item}>
                        <DeviceControler/>
                    </View>

                    <View style={styles.switch} onPress={toggleOverlay}>
                        <Text style={styles.text}>
                            {/*Off*/}
                            Lock
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#FD9A3F" : "#f4f3f4"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <Text style={styles.text}>
                            {/*On*/}
                            Open
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        maxWidth: 300
                    }}>
                        <Button
                            title="Rename"
                            containerStyle={{
                                flex: 1,
                                height: 40,
                                width: 100,
                                marginHorizontal: 5,
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
                            onPress={toggleOverlay}


                        />
                        <Button
                            containerStyle={{
                                flex: 1,
                                width: 100,
                                marginHorizontal: 5,
                                marginVertical: 20,
                            }}
                            title="Delete"
                            type="clear"
                            titleStyle={{color: '#FD9A3F'}}
                            onPress={toggleDeleteOverlay}

                        />
                    </View>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={styles.form}>
                            <Text style={styles.textName}>
                                Rename Device
                            </Text>
                            <TextInput style={styles.inputText}
                                       // onChangeText={(value) => handleInput("username", value)}
                                       placeholder="Device name"

                            />
                            <View style={{
                                flexDirection: "row",
                                alignContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#FD9A3F',
                                borderRadius: 100 / 50
                            }}
                            >
                                <Button
                                    buttonStyle={{
                                        backgroundColor: 'rgba(253, 154, 63, 1)',
                                        borderRadius: 30,
                                        width:"100%",
                                    }}
                                    borderRadius={100 / 50}

                                    title="Done"

                                    onPress={() => {
                                        navigation.navigate("Device");
                                        toggleOverlay()
                                    }}
                                />
                            </View>
                        </View>
                    </Overlay>
                    <Overlay isVisible={deleteVisible} onBackdropPress={toggleDeleteOverlay}>
                        <View style={styles.containerOverlay}>
                            <Text style={styles.textName}>Delete Device?</Text>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <Button
                                    title="Delete"
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
                                    onPress={toggleDeleteOverlay}
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
                                    onPress={toggleDeleteOverlay}
                                />
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
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 5

    },
    main: {
        width: 500,
        alignItems: 'center',
        justifyContent: 'center',

    },
    item: {
        paddingTop: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 20,
        color: "#FD9A3F"
    },
    inputText: {
        borderColor: "black",
        backgroundColor: "#FFFFFF",
        width: 200,
        borderWidth: 0,
        borderStyle: "solid",
        fontSize: 15,
        borderRadius: 25,
        margin: 10,
        paddingLeft: 20,
    },
    textName: {

        fontFamily: 'Roboto Mono',
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 50,
        color: '#FD9A3F',
        alignItems: 'flex-end',
        marginLeft: 20,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        borderRadius: 100 / 50
    },
    containerOverlay: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 5,
        maxWidth: 300

    },
    switch: {

        flexDirection:"row",
        padding: 30,
    }
})
