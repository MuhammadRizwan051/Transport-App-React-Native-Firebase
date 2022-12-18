import { View, Text, StyleSheet, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import SMTextInput from '../component/SMTextInput'
import SMTouchableOpacity from '../component/SMTouchableOpacity'
import database from '@react-native-firebase/database'
import styles from '../styling'

const RegisterVehicle = () => {
    const initialData = {
        vehicleName: '',
        vehicleType: '',
        noOfSeats: '',
        time: '',
        startDest: '',
        endDest: '',
    }
    let [model, setModel] = useState(initialData)
    let [isLoading, setIsLoading] = useState(false)
    let register = () => {
        setIsLoading(true)
        console.log(model)
        model.id = database().ref('vehicles/').push().key
        database()
            .ref(`vehicles/${model.id}`).set(model)
            .then(res => {
                setIsLoading(false)
                ToastAndroid.show('Vehicle Registered Successfully', ToastAndroid.SHORT)
                console.log(res)
                setModel(initialData)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }
    return (
        <>
            <View style={[styles.bgDark, { paddingVertical: 10, paddingHorizontal: 10 }]}>
                <Text style={[styles.colorWhite, { textAlign: 'center', fontSize: 26, fontWeight: 'bold' }]}>Register Vehicle</Text>
            </View>
            <View style={{ height: '100%', backgroundColor: '#B4CDE6', justifyContent:'center' }}>
                {/* <Text style={{ fontSize: 32, textAlign: 'center', paddingVertical: 30, color: '#06283D', fontWeight: 'bold' }}>Register Vehicle</Text> */}
                <View style={{ paddingHorizontal: 30 }}>
                    <View>
                        <SMTextInput value={model.vehicleName} onChangeText={e => setModel({ ...model, vehicleName: e })} placeholderTextColor='#06283D' placeholder='Vehicle Name' style={style.input} />
                    </View>
                    <View>
                        <SMTextInput value={model.vehicleType} onChangeText={e => setModel({ ...model, vehicleType: e })} placeholderTextColor='#06283D' placeholder='Type of Vehicle' style={style.input} />
                    </View>
                    <View>
                        <SMTextInput value={model.noOfSeats} onChangeText={e => setModel({ ...model, noOfSeats: e })} placeholderTextColor='#06283D' placeholder='No of Seats' style={style.input} />
                    </View>
                    <View>
                        <SMTextInput value={model.time} onChangeText={e => setModel({ ...model, time: e })} placeholderTextColor='#06283D' placeholder='Time' style={style.input} />
                    </View>
                    <View>
                        <SMTextInput value={model.startDest} onChangeText={e => setModel({ ...model, startDest: e })} placeholderTextColor='#06283D' placeholder='Starting Destination' style={style.input} />
                    </View>
                    <View>
                        <SMTextInput value={model.endDest} onChangeText={e => setModel({ ...model, endDest: e })} placeholderTextColor='#06283D' placeholder='End Destination' style={style.input} />
                    </View>
                    <View>
                        <SMTouchableOpacity onPress={register} value={isLoading ? <ActivityIndicator color='white' size={25} /> : 'Register'} textStyle={style.btnText} touchableStyle={style.btn} />
                    </View>
                </View>
            </View>
        </>
    )
}

export default RegisterVehicle

const style = StyleSheet.create({
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