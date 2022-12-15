import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SMTextInput from '../component/SMTextInput'
import SMTouchableOpacity from '../component/SMTouchableOpacity'
import database from '@react-native-firebase/database'

const RegisterVehicle = () => {
    let [model, setModel] = useState()
    let register = () => {
        console.log(model)
        model.id = database().ref('vehicles/').push().key
        database()
            .ref(`vehicles/${model.id}`).set(model)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            setModel({})
    }
    return (
        <View style={{ height: '100%', backgroundColor: '#B4CDE6', paddingTop: '10%' }}>
            <Text style={{ fontSize: 32, textAlign: 'center', paddingVertical: 30, color: '#06283D', fontWeight: 'bold' }}>Register Vehicle</Text>
            <View style={{ paddingHorizontal: 30 }}>
                <View>
                    <SMTextInput onChangeText={e => setModel({ ...model, vehicleName: e })} placeholderTextColor='#06283D' placeholder='Vehicle Name' style={styles.input} />
                </View>
                <View>
                    <SMTextInput onChangeText={e => setModel({ ...model, vehicleType: e })} placeholderTextColor='#06283D' placeholder='Type of Vehicle' style={styles.input} />
                </View>
                <View>
                    <SMTextInput onChangeText={e => setModel({ ...model, noOfSeats: e })} placeholderTextColor='#06283D' placeholder='No of Seats' style={styles.input} />
                </View>
                <View>
                    <SMTextInput onChangeText={e => setModel({ ...model, time: e })} placeholderTextColor='#06283D' placeholder='Time' style={styles.input} />
                </View>
                <View>
                    <SMTextInput onChangeText={e => setModel({ ...model, startDest: e })} placeholderTextColor='#06283D' placeholder='Starting Destination' style={styles.input} />
                </View>
                <View>
                    <SMTextInput onChangeText={e => setModel({ ...model, endDest: e })} placeholderTextColor='#06283D' placeholder='End Destination' style={styles.input} />
                </View>
                <View>
                    <SMTouchableOpacity onPress={register} value='Register' textStyle={styles.btnText} touchableStyle={styles.btn} />
                </View>
            </View>
        </View>
    )
}

export default RegisterVehicle

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 15,
        borderBottomWidth: 5,
        borderBottomColor: '#06283D',
        borderRightWidth: 1,
        borderRightColor: '#06283D',
        borderLeftWidth: 1,
        borderLeftColor: '#06283D',
        borderTopWidth: 1,
        borderTopColor: '#06283D',
    },
    btn: {
        backgroundColor: '#06283D',
        borderRadius: 25,
        paddingVertical: 10,
        paddingVertical: 8,
        marginTop: 20
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})



















