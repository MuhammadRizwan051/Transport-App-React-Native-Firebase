import React, { useEffect, useState } from 'react'
import { View, Text, Touchable, TouchableOpacity, ListViewBase } from 'react-native'
import database from '@react-native-firebase/database'

const Home = ({ navigation }) => {
    let [list, setList] = useState([])
    let getData = () => {
        database()
            .ref('vehicles')
            .on('value', dt => {
                // console.log(dt.val())
                let li = Object.values(dt.val())
                setList([...li])
            })
    }
    console.log(list)
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: '80%', paddingVertical: 10 }} onPress={() => navigation.navigate('Register Vehicle')}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 22 }}>Register Vehicle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: '80%', paddingVertical: 10 }} onPress={() => navigation.navigate('Bookings')} >
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 22 }}>Bookings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: '80%', paddingVertical: 10 }} onPress={() => navigation.navigate('Add Booking')} >
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 22 }}>Add Booking</Text>
                </TouchableOpacity>
            </View>
            {list.map((e,i)=>(
                <Text key={i}>{e.time}</Text>
            ))}
        </>
    )
}

export default Home