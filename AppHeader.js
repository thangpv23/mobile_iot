import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View,} from 'react-native';
import {Header, Icon, Overlay} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from "react-native-elements/dist/helpers";


// type HeaderComponentProps = {
//     title: string;
//     view?: string;
// };

// type ParamList = {
//     Detail: {
//         openDrawer: void;
//     };
// };

const AppHeader = () => {

    const [toggle, setToggle] = useState(false);
    const [color,setColor] = useState("red");

    const handleToggle = () => {
        setToggle(prev => !prev)
        console.log("test")
    };

    return (
        <View>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#B5F7D3" translucent={true}/>
            <Header backgroundColor='#FD9A3F'
                    leftComponent={
                        <TouchableOpacity onPress={{}}>
                            <Icon name='chevron-left'
                                  type='font-awesome'
                                  color='#fff'>
                            </Icon>
                        </TouchableOpacity>
                    }
                    rightComponent={
                        <>
                            <TouchableOpacity style={styles.headerItem}>
                                <Icon name="menu" color="white" onPress={handleToggle}/>
                            </TouchableOpacity>
                            <Overlay isVisible={toggle}
                                     overlayStyle={styles.overlay}
                                     onBackdropPress={handleToggle}
                                     backdropStyle={styles.backdrop}
                            >
                                <TouchableOpacity style={styles.button}>
                                    <Text style={{fontSize:20}}>User info</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={{fontSize:20}}>Log out</Text>
                                </TouchableOpacity>
                            </Overlay>
                        </>
                    }
                    centerComponent={{text: 'Smartinum', style: styles.heading}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FD9A3F',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerItem: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    overlay: {
        backgroundColor: "white",
        top: 30,
        right: 20,
        position: "absolute",

    },
    backdrop: {
        opacity: 0
    },
    button: {
        fontWeight: "100",
    },
});

export default AppHeader;