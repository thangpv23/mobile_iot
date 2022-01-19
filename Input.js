import React from 'react';
import {Icon, Input} from 'react-native-elements';

export default () => {

    return (
        <>
            {/*<Input*/}
            {/*    placeholder='BASIC INPUT'*/}
            {/*/>*/}

            {/*<Input*/}
            {/*    placeholder='INPUT WITH ICON'*/}

            {/*/>*/}

            {/*<Input*/}
            {/*    placeholder='INPUT WITH CUSTOM ICON'*/}
            {/*    leftIcon={*/}
            {/*        <Icon*/}
            {/*            name='user'*/}
            {/*            size={24}*/}
            {/*            color='white'*/}
            {/*        />*/}
            {/*    }*/}
            {/*    style={{*/}
            {/*        justifyContent: "center",*/}
            {/*        alignItems: "center",*/}
            {/*    }}*/}
            {/*/>*/}


            {/*<Input*/}
            {/*    placeholder="Comment"*/}
            {/*    leftIcon={{type: 'font-awesome', name: 'comment'}}*/}
            {/*    onChangeText={value => this.setState({comment: value})}*/}
            {/*/>*/}

            <Input
                placeholder='INPUT WITH ERROR MESSAGE'
                errorStyle={{color: 'red'}}
                errorMessage='ENTER A VALID ERROR HERE'
            />

            <Input placeholder="Password" secureTextEntry={true}
                   style={{
                       marginTop: 10,
                       justifyContent: "center"

                   }}/>
        </>
    );
};