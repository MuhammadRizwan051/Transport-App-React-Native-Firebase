import React, { useEffect, useState } from 'react'
import { View, Text, Touchable, TouchableOpacity, ListViewBase, ScrollView, ImageBackground, Image } from 'react-native'
import database from '@react-native-firebase/database'
import styles from '../styling'

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
    // console.log('list', list)
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <View style={[styles.bgDark, { paddingVertical: 10, paddingHorizontal: 10 }]}>
                <Text style={[styles.colorWhite, { textAlign: 'center', fontSize: 26, fontWeight: 'bold' }]}>Transport</Text>
            </View>
            <View style={[styles.bgLight, { height: '100%', paddingHorizontal: 20, paddingVertical: 20 }]}>
                <View>
                    <Image resizeMode='cover' style={{ height: 200, width: '100%', borderRadius: 10 }} source={{ uri: 'https://media.istockphoto.com/id/1399747292/photo/logistics-transportation-import-export-and-container-cargo-freight-ship-freight-train-cargo.jpg?b=1&s=170667a&w=0&k=20&c=j18xZM7GzIU_pzvhoYFkO2UWUrWBK1z5x1kLk4ndEZw=' }} />
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {list.map((e, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('Vehicle', e)} style={{ paddingHorizontal: 10, paddingVertical: 10, width: '50%' }}>
                                <View style={[styles.bgWhite, { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }]}>
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