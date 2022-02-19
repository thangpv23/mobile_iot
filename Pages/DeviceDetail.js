import React, {useState} from "react";
import {StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from "react-native";
import AppHeader from "../AppHeader";
import {Button, Icon, Overlay} from "react-native-elements";
import ModalSelector from 'react-native-modal-selector'
import DeviceController from "../Components/Button/DeviceController";

import {
    useAddDeviceMutation,
    useDeleteDeviceMutation,
    useGetDevicesQuery,
    usePutDeviceMutation
} from "../services/device/device";

export default ({navigation}) => {



    const initState = {
        status: "",
    };

    const [deviceState, setDeviceState] = useState(initState);
    const [putDevice] = usePutDeviceMutation();
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
    };


    const handleUsePutDeviceMutation = async () => {
        try {
            toggleSwitch();
            console.log("status");
            await putDevice(deviceId).unwrap();


        } catch (e) {
            console.log(e)
        }
    };


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
                        <DeviceController/>
                    </View>

                    <View style={styles.switch} onPress={toggleOverlay}>
                        <Text style={styles.text}>
                            {/*Off*/}
                            Lock
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#FD9A3F" : "#f4f3f4"}
                            onValueChange={handleUsePutDeviceMutation}
                            value={isEnabled}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                        />
                        <Text style={styles.text}>
                            {/*On*/}
                            Open
                        </Text>
                    </View>


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
