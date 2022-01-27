import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Header from "./Header";
import Add_button from "./Add_button";
import Device_button from "./Device_button";

export default () => {
    return (
        <View>
            <Header title={""}>

            </Header>
            <Text style={styles.text}>
                Username > Home 1 > Room 1
            </Text>
            <View style={styles.container}>


                <View style={styles.main}>
                    <View style={styles.item}>
                        <Device_button></Device_button>
                    </View>
                    <View style={styles.item}>
                        <Device_button></Device_button>
                    </View>
                    <View style={styles.item}>
                        <Device_button></Device_button>
                    </View>
                    <View style={styles.item}>
                        <Add_button></Add_button>
                    </View>


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
    }
})