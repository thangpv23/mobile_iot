import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import AppHeader from "../AppHeader";
import Add_button from "../Components/Button/AddButton";
import DeviceButton from "../Components/Button/DeviceButton";
import {Button, Icon, Overlay} from "react-native-elements";
import ModalSelector from 'react-native-modal-selector';

import {
    useAddDeviceMutation,
    useDeleteDeviceMutation,
    useGetDevicesQuery,
    usePutDeviceMutation
} from "../services/device/device";
import HouseButton from "../Components/Button/HouseButton";
import {useGetControllerQuery} from "../services/controller/controller";



export default ({ route, navigation}) => {

    const {roomId,roomName} = route.params;

    const {data} = useGetControllerQuery(roomId);
    console.log(data)

    // const {homeName} = route.params;

    const openDeviceDetail = (deviceID,deviceName) =>{
        navigation.navigate("DeviceDetail",{controllerId:deviceID, controllerName: deviceName});
    };

    const [inputState,setInputState] = useState({
        name:"",
    });
    const [visible, setVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [addDevice] = useAddDeviceMutation();
    const toggleDeleteOverlay = () => {
        setDeleteVisible(!deleteVisible);
    };
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const handleLongPressButton = () => {
        toggleDeleteOverlay();
    }
    const handleAddDevice =  async () =>{
        try{
            if(inputState.name){
                const body = inputState;
                await addDevice({body}).unwrap();
                toggleOverlay();
            }
        }catch (err){
            console.log(err);
        }
    }

    const handleInput = (type, value) => {
        setInputState({
            ...inputState,
            [type]: value,
        })
    };


    return (
        <View>
            <AppHeader title={""} navigation={navigation}>
            </AppHeader>
            <Text style={styles.text}>
                Username >
            </Text>
            <View style={styles.container}>

                <View style={styles.main}>
                    {/*{*/}
                    {/*//     data?.map(device => {*/}
                    {/*//         return (*/}
                    {/*//             <TouchableOpacity  key={device.id} style={styles.item}*/}
                    {/*//                                onLongPress={() =>handleLongPressButton(device.id)}*/}
                    {/*//                                onPress={() => openDeviceDetail(device.id, device.name)}>*/}
                    {/*//                 <HouseButton name={device.name} homeId={device.id} />*/}
                    {/*//             </TouchableOpacity >*/}
                    {/*//         )*/}
                    {/*//     })*/}
                    {/*}*/}
                    <TouchableOpacity style={styles.item} onPress={toggleOverlay}>
                        <Add_button/>
                    </TouchableOpacity>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={styles.form}>
                            <Text style={styles.textName}>
                                Add House
                            </Text>
                            <TextInput style={styles.inputText}
                                       placeholder="Device name"
                                       onChangeText={(value) => handleInput("name", value)}
                            />
                            <TextInput style={styles.inputText}
                                       placeholder="ID"
                                       onChangeText={(value) => handleInput("id", value)}
                            />

                            <View style={{
                                flexDirection: "row",
                                alignContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#FD9A3F',
                                borderRadius: 100 / 50

                            }}>
                                <Button
                                    buttonStyle={{
                                        backgroundColor: 'rgba(253, 154, 63, 1)',
                                        borderRadius: 30,
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
                                    onPress={handleAddDevice}
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
})
