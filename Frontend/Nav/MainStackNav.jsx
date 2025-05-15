import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../src/HomeScreen';


const Stack = createStackNavigator();

const MainStackNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Home" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStackNav;