import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from '../styling'
import { buildArgv } from 'jest-cli/build/cli'

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
            <View style={[styles.bgLight, { height: '100%' }]}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 32, color: 'black' }}>{obj.vehicleName}</Text>
                    <Text>Seats: {obj.noOfSeats}</Text>
                    <Text>Starting Destination: {obj.startDest}</Text>
                    <Text>End Destination: {obj.endDest}</Text>
                </View>

                <View style={[styles.bgWhite, { borderRadius: 25,paddingHorizontal: 20, paddingVertical: 15, marginHorizontal: 20 }]}>
                    <Text style={{ fontSize: 22, color: 'red' }}>Review</Text>
                    {reviewList.map((e, i) => (
                        <View key={i} style={[styles.bgLight, { paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, marginBottom: 10 }]}>
                            <Text style={[{ fontSize: 18, }]}>{e.name}</Text>
                            <Text style={[]}>{e.feedback}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    )
}

export default Vehicle