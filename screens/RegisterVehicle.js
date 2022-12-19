import { View, Text, StyleSheet, ToastAndroid, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SMTextInput from '../component/SMTextInput'
import SMTouchableOpacity from '../component/SMTouchableOpacity'
import database from '@react-native-firebase/database'
import styles from '../styling'
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


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

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Mobiles' },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers' },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]


    return (
        <>
            <View style={[styles.bgDark, { paddingVertical: 10, paddingHorizontal: 10 }]}>
                <Text style={[styles.colorWhite, { textAlign: 'center', fontSize: 26, fontWeight: 'bold' }]}>Register Vehicle</Text>
            </View>
            <View style={{ backgroundColor: '#B4CDE6', height: '100%', borderWidth: 1, paddingVertical: 70, justifyContent: 'center', paddingHorizontal: 30 }}>
                <ScrollView>
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
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                            arrowicon={<Icon name="expand-more" size={18} color={'black'} />} 
                            // search={false}
                            // dropdownShown={false}
                            searchPlaceholder='Search...'
                            placeholder='Type of Vehicle'
                            placeholderTextColor='red'
                            dropdownStyles={[styles.bgLight, { borderWidth: 3, borderColor: '#06283D', marginBottom: 20, marginTop: 0 }]}
                            dropdownTextStyles={[styles.colorWhite]}
                            dropdownItemStyles={[styles.bgDark, { marginBottom: 5 }]}
                            inputStyles={{ color: '#06283D' }}
                            boxStyles={{
                                borderBottomWidth: 5,
                                borderBottomColor: '#06283D',
                                borderRightWidth: 1,
                                borderRightColor: '#06283D',
                                borderLeftWidth: 1,
                                borderLeftColor: '#06283D',
                                borderTopWidth: 1,
                                borderTopColor: '#06283D',
                                marginBottom: 15,
                                backgroundColor: 'white',
                                borderRadius: 25,
                                // marginBottom: 0
                            }}
                        />
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
                </ScrollView>
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