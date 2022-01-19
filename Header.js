import React from 'react';
import {Linking, StyleSheet, View,} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import Menu_form, {Menu} from "./Menu";


// type HeaderComponentProps = {
//     title: string;
//     view?: string;
// };

// type ParamList = {
//     Detail: {
//         openDrawer: void;
//     };
// };

const Header_form: React.FunctionComponent<> = () => {

    const backNavigate = () => {

    };

    const MenuOpen = () => {

    };

    return (
        <View>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#B5F7D3" translucent = {true}/>
            <Header backgroundColor= '#FD9A3F'
                leftComponent={
                  <TouchableOpacity  onPress={{}}>
                      <Icon name='chevron-left'
                            type =  'font-awesome'
                            color= '#fff'>

                      </Icon>
                  </TouchableOpacity>
                    
                }
                rightComponent={

                    <View style={styles.headerItem}>

                            <View>
                                <Menu_form>
                                </Menu_form>
                                <Icon name="menu" color="white"/>

                            </View>



                    </View>
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
});

export default Header_form;