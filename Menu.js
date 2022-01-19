import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger} from 'react-native-popup-menu';
import React from "react";
import {Text} from "react-native";

const Menu_form: React.FunctionComponent<> = () => {
    return (
        <MenuProvider>
            <Menu>
                <MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Save`)} text='Save'/>
                        <MenuOption onSelect={() => alert(`Delete`)}>
                            <Text style={{color: 'red'}}>Delete</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled'/>
                    </MenuOptions>
                </MenuTrigger>

            </Menu>

        </MenuProvider>
    );

};

export default Menu_form;
