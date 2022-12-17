import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../styling'
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
            feedback: 'Osfh wemfk nfdj mmk sdmfkl Qwemfk nfdj mmk mewfkl nusdifh.'
        },
        {
            name: 'Wasif Bilal',
            feedback: 'Uiojwgnj Qwemfk nfdj mmk sdmfklr f few wq smndfk Qwemfk nfdj.'
        },
    ])

    console.log(obj)
    return (
        <>
            <View style={[styles.bgLight, { height: '100%', paddingHorizontal: 20 }]}>
                <View style={{ marginTop: 10 }}>
                    <Text style={[styles.colorDark, { textAlign: 'center', fontSize: 32, fontWeight: 'bold' }]}>{obj.vehicleName}</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={[styles.bgDark, styles.colorWhite, { borderRadius: 15, marginBottom: 10, fontSize: 14, paddingVertical: 10, paddingHorizontal: 10 }]}>ID: {obj.id}</Text>
                        <Text style={[styles.bgDark, styles.colorWhite, { borderRadius: 15, marginBottom: 10, fontSize: 14, paddingVertical: 10, paddingHorizontal: 10 }]}>Time: {obj.time}</Text>
                        <Text style={[styles.bgDark, styles.colorWhite, { borderRadius: 15, marginBottom: 10, fontSize: 14, paddingVertical: 10, paddingHorizontal: 10 }]}>{obj.noOfSeats} Seater</Text>
                    </View>
                </View>

                <View style={[styles.bgWhite, { position: 'absolute', bottom: 100, left: 20, right: 20, height: '40%', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 15, marginVertical: 30 }]}>
                    <ScrollView>
                        <Text style={[{ color: '#023047', marginBottom: 10, fontSize: 22, fontWeight: 'bold', textAlign: 'center' }]}>Review</Text>
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
                        textStyle={[styles.colorWhite, { textAlign: 'center', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }]}
                        touchableStyle={[styles.bgDark, { borderRadius: 20, paddingVertical: 10 }]} />
                </View>
            </View>
        </>
    )
}

export default Vehicle