import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Header from "../AppHeader";
import AddButton from "../Components/Button/AddButton";
import Room_button from "../Room_button";
import {Button, Icon, Overlay} from "react-native-elements";
import {useAddRoomMutation, useGetRoomsQuery} from "../services/room/room";

export default ({route,navigation}) => {

    const [inputState,setInputState] = useState({
        name:"",
    });

    const [visible, setVisible] = useState(false);
    const {homeId,homeName} = route.params;

    const {data} = useGetRoomsQuery(homeId);
    const [addRoom] = useAddRoomMutation();

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const handleAddRoom =  async () =>{
        try{
            if(inputState.name){
                const body = inputState;
                await addRoom({body,homeId}).unwrap();
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
    const openDeviceList = () =>{
        console.log("device");
        // navigation.navigate("Device");
    }
    return (
        <ScrollView>
            <Header title={""} navigation={navigation}/>
            <Text style={styles.text}>
                Username > {homeName}
            </Text>
            <View style={styles.container}>
                <View style={styles.main}>
                    {
                        data?.map(room =>{
                            return(
                                <TouchableOpacity key={room._id} style={styles.item} onPress={() => openDeviceList(room._id)}>
                                    <Room_button  name={room.name}/>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <TouchableOpacity style={styles.item} onPress={toggleOverlay}>
                        <AddButton/>
                    </TouchableOpacity>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <View style={styles.form}>
                            <View style={styles.form}>
                                <View style={styles.form}>
                                    <Text style={styles.textName}>
                                        Add Room
                                    </Text>
                                    <TextInput style={styles.inputText}
                                               placeholder="Room name"
                                               onChangeText={(value) =>handleInput("name",value)}
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
                                            onPress={handleAddRoom}
                                        />

                                    </View>
                                </View>
                            </View>
                        </View>
                    </Overlay>


                </View>
            </View>
        </ScrollView>


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
        fontSize: 30,
        lineHeight: 50,
        color: '#FD9A3F',
        alignItems: 'flex-end',
        marginLeft: 20,
    },
    form: {

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 50
    }
})