import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './Login';
import Signup from "./Signup";
import User_info from "./User_info";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import Home from "./Home_list";
import Room from "./Room_list";
import Device from "./Device_list";


const Stack = createNativeStackNavigator();
const MyStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
        {/*<Stack.Screen name="Log In" component={Login}/>*/}
        {/*<Stack.Screen name="Sign Up" component={Signup}/>*/}
        {/*<Stack.Screen name="User_info" component={User_info}/>*/}
        {/*<Stack.Screen name="Home" component={Home}/>*/}
        {/*<Stack.Screen name="Room" component={Room}/>*/}
        <Stack.Screen name="Device" component={Device}/>
    </Stack.Navigator>
);

const styles = StyleSheet.create({

});

export default () => (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
)



