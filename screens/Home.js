import React, { useEffect, useState } from 'react'
import { View, Text, Touchable, TouchableOpacity, ListViewBase, ScrollView } from 'react-native'
import database from '@react-native-firebase/database'
import styles from '../styling'

const Home = ({ navigation }) => {
    let [list, setList] = useState([])
    let getData = () => {
        database()
            .ref('vehicles')
            .once('value', dt => {
                // console.log(dt.val())
                let li = Object.values(dt.val())
                setList([...li])
            })
    }
    // console.log('list', list)
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <View style={[styles.bgLight, { height: '100%', paddingHorizontal: 20, paddingVertical: 20 }]}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginBottom: 10, backgroundColor: 'black', width: '100%', paddingVertical: 10 }} onPress={() => navigation.navigate('Register Vehicle')}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 22 }}>Register Vehicle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 10, backgroundColor: 'black', width: '100%', paddingVertical: 10 }} onPress={() => navigation.navigate('Bookings')} >
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 22 }}>Bookings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 10, backgroundColor: 'black', width: '100%', paddingVertical: 10 }} onPress={() => navigation.navigate('Add Booking')} >
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 22 }}>Add Booking</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {list.map((e, i) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Vehicle', e)} style={{ paddingHorizontal: 10, paddingVertical: 10, width: '50%' }}>
                                <View key={i} style={[styles.bgWhite, { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }]}>
                                    <Text style={{ textAlign: 'center' }}>{i + 1}</Text>
                                    <Text>Id:{e.id}</Text>
                                    <Text>Time: {e.time}</Text>
                                    <Text>Vehicle Name:{e.vehicleName}</Text>
                                    <Text>Vehicle Type:{e.vehicleType}</Text>
                                    <Text>No of Seats:{e.noOfSeats}</Text>
                                    <Text>Start Dest:{e.startDest}</Text>
                                    <Text>End Dest:{e.endDest}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Home