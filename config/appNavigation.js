import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RegisterVehicle from '../screens/RegisterVehicle';
import AddBooking from '../screens/AddBooking';
import Bookings from '../screens/Bookings';
import Vehicle from '../screens/Vehicle';


const AppNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Register Vehicle" component={RegisterVehicle} />
                    <Stack.Screen name="Add Booking" component={AddBooking} />
                    <Stack.Screen name="Bookings" component={Bookings} />
                    <Stack.Screen name="Vehicle" component={Vehicle} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigation