import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import { MenuProvider } from 'react-native-popup-menu';
import DeviceList from "./Pages/DeviceList";
import RoomList from "./Pages/RoomList";
import HomeList from "./Pages/HomeList";
import UserInfo from "./Pages/UserInfo";
const Stack = createNativeStackNavigator();
const MyStack = () => (
    <MenuProvider>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            {/*<Stack.Screen name="Log In" component={Login}/>*/}
            {/*<Stack.Screen name="Sign Up" component={Signup}/>*/}
            {/*<Stack.Screen name="User_info" component={UserInfo}/>*/}
            {/*<Stack.Screen name="Home" component={HomeList}/>*/}
            {/*<Stack.Screen name="Room" component={RoomList}/>*/}
            {/*<Stack.Screen name="Device" component={DeviceList}/>*/}
        </Stack.Navigator>
    </MenuProvider>
);

const styles = StyleSheet.create({});

export default () => (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
)



