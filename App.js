import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import {MenuProvider} from 'react-native-popup-menu';
import ControllerList from "./Pages/ControllerList";
import RoomList from "./Pages/RoomList";
import HomeList from "./Pages/HomeList";
import UserInfo from "./Pages/UserInfo";
import Signup from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import {Provider, useSelector} from 'react-redux';
import {store} from "./services/store";


const Stack = createNativeStackNavigator();
const MyStack = () => {
    const isLogin = useSelector(state => state.loginInfo.isLogin);
    console.log(isLogin);
    return (
        <MenuProvider>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                {
                    isLogin ? (
                        <>
                            <Stack.Screen name="Home" component={HomeList}/>
                            <Stack.Screen name="User_info" component={UserInfo}/>
                            <Stack.Screen name="Room" component={RoomList}/>
                            <Stack.Screen name="Controller" component={ControllerList}/>
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Log In" component={SignIn}/>
                            <Stack.Screen name="Sign Up" component={Signup}/>
                        </>
                    )
                }
            </Stack.Navigator>
        </MenuProvider>
    );
}

const styles = StyleSheet.create({});

export default () => (
    <Provider store={store}>
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    </Provider>
)



