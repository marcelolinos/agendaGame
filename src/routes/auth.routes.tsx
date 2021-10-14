import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SingIn } from '../screens/SignIn';
import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            //headerMode="none"
            screenOptions={{
            headerShown: false,
                cardStyle: {
                    //backgroundColor: 'transparent'
                    backgroundColor: 'blue'
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SingIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )  
}