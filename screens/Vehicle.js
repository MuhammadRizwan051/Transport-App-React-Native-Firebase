import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from '../styling'
import { buildArgv } from 'jest-cli/build/cli'
import SMTouchableOpacity from '../component/SMTouchableOpacity'

const Vehicle = ({ navigation, route }) => {
    let obj = route.params

    let [reviewList, setReviewList] = useState([
        {
            name: 'Muhammad Ali',
            feedback: 'Ksjfnak mewfkl nusdifh wemfk nfdj mmk sdmfkl smndfk ksmdkl lmsdl.'
        },
        {
            name: 'Zain Fahad',
            feedback: 'Qwemfk nfdj mmk sdmfklr f few wq smndfk.'
        },
        {
            name: 'Kashif Zeeshan',
            feedback: 'Osfh wemfk nfdj mmk sdmfkl Qwemfk nfdj mmk mewfkl nusdifh'
        },
    ])

    console.log(obj)
    return (
        <>
            <View style={[styles.bgLight, { height: '100%', paddingHorizontal: 20, }]}>
                <View>
                    <Text style={{ fontSize: 32, color: 'black' }}>{obj.vehicleName}</Text>
                    <Text>Seats: {obj.noOfSeats}</Text>
                    <Text>Starting Destination: {obj.startDest}</Text>
                    <Text>End Destination: {obj.endDest}</Text>
                </View>

                <View style={[styles.bgWhite, { borderRadius: 15, paddingHorizontal: 20, paddingVertical: 15, marginVertical: 30 }]}>
                    <Text style={[{ color: '#023047', marginBottom: 10, fontSize: 22, fontWeight: 'bold', textAlign: 'center' }]}>Review</Text>
                    <ScrollView>
                        {reviewList.map((e, i) => (
                            <View key={i} style={[styles.bgLight, { paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginBottom: 10 }]}>
                                <Text style={[{ fontStyle: 'italic', fontSize: 22, color: '#023047', fontWeight: 'bold' }]}>{e.name}</Text>
                                <Text style={[{ color: 'black', fontStyle: 'italic' }]}>{e.feedback}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={{ position: 'absolute', bottom: 30, left: 20, right: 20 }}>
                    <SMTouchableOpacity onPress={() => navigation.navigate('Add Booking', obj)} value='Book Now'
                        textStyle={[styles.colorLight, { textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }]}
                        touchableStyle={[styles.bgDark, { borderRadius: 20, paddingVertical: 10 }]} />
                </View>
            </View>
        </>
    )
}

export default Vehicle