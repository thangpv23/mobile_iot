import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppHeader from "../AppHeader";
import Add_button from "../Components/Button/AddButton";
import DeviceButton from "../Components/Button/DeviceButton";
import {Button, Icon, Overlay} from "react-native-elements";
import ModalSelector from 'react-native-modal-selector'

export default ({navigation}) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
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
                        <DeviceButton/>
                    </View>
                    <View style={styles.item}>
                        <DeviceButton/>
                    </View>
                    <View style={styles.item}>
                        <DeviceButton/>
                    </View>
                    <TouchableOpacity style={styles.item} onPress={toggleOverlay}>
                        <Add_button/>
                    </TouchableOpacity>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={styles.form}>
                            <Text style={styles.textName}>
                                Add Device
                            </Text>
                            <ModalSelector
                                style={{padding: 20}}
                                data={data}
                                initValue="Select Device"
                                onChange={(option) => {
                                    alert(`Selected ${option.label} (${option.key})`)
                                }}/>
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
                                        width:"100%"
                                    }}
                                    borderRadius={100 / 50}
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
                                        navigation.navigate("Device");
                                        toggleOverlay()
                                    }}
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

        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 5

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
        borderColor: "black",
        backgroundColor: "#FFFFFF",
        width: 300,
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
    }
})
