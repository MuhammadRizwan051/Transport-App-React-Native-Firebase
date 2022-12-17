import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import RegisterVehicle from '../screens/RegisterVehicle';
import AddBooking from '../screens/AddBooking';
import Bookings from '../screens/Bookings';
import Vehicle from '../screens/Vehicle';
import Splash from '../screens/Splash';
import { Image, Text, View } from 'react-native';


const Stack = createNativeStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Vehicle" component={Vehicle} />
        <Stack.Screen name="Add Booking" component={AddBooking} />
    </Stack.Navigator>
)
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }} >
        <Tab.Screen name="HomeScreen" component={Home} options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 22, height: 22, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }} />
                    <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>HOME</Text>
                </View>
            )
        }} />
        <Tab.Screen name="Register Vehicle" component={RegisterVehicle} options={{
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 22, height: 22, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }} />
                    <Text numberOfLines={1} style={{ marginTop: 1, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>Register</Text>
                </View>
            )
        }} />
        {/* <Tab.Screen name="Add Booking" component={AddBooking} options={{
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 22, height: 22, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }} />
                    <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>Add Booking</Text>
                </View>
            )
        }} /> */}
        <Tab.Screen name="Bookings" component={Bookings} options={{
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 22, height: 22, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }} />
                    <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>Bookings</Text>
                </View>
            )
        }} />
        {/* <Tab.Screen name="Vehicle" component={Vehicle} options={{
            tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 22, height: 22, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }} />
                    <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>Vehicle</Text>
                </View>
            )
        }} /> */}
    </Tab.Navigator>
)


const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </>
    )
}

export default AppNavigation