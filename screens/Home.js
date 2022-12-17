import React, { useEffect, useState } from 'react'
import { View, Text, Touchable, TouchableOpacity, ListViewBase, ScrollView, ImageBackground, Image } from 'react-native'
import database from '@react-native-firebase/database'
import styles from '../styling'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
// import Icon from 'react-native-vector-icons/AntDesign';




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
                <View style={{ height: '40%', marginVertical: 20 }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', borderWidth: 1 }}>
                            {list.map((e, i) => (
                                <TouchableOpacity key={i} onPress={() => navigation.navigate('Vehicle', e)} style={{ width: '100%', marginBottom: 15 }}>
                                    <View style={[styles.bgWhite, { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }]}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ width: '15%', justifyContent: 'center' }}>
                                                {e.vehicleName == 'Bike' ?
                                                    <Image source={{ uri: 'https://thumbs.dreamstime.com/b/stylized-motorbiker-37573634.jpg' }} style={{ height: 50, width: 50 }} />
                                                    :
                                                    e.vehicleName == 'Coaster' ?
                                                        <Image source={{ uri: 'https://dbz-images.dubizzle.com/images/2022/10/30/50758f956b3f4961bc950b35bcce3463-DUBIZZLESANDBOX.jpeg' }} style={{ height: 50, width: 50 }} />
                                                        :
                                                        e.vehicleName == 'Hiace' ?
                                                            <Image resizeMode='contain' source={{ uri: 'https://tourmover.com/wp-content/uploads/2019/03/toyota-hiace.jpg' }} style={{ height: 50, width: '100%' }} />
                                                            :
                                                            <Image source={{ uri: 'https://www.zehnservices.com/wp-content/uploads/2020/02/driver-kolkata.jpg' }} style={{ height: 50, width: 50 }} />

                                                }
                                            </View>
                                            <View style={{ width: '85%', paddingStart: 15 }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <Text style={[styles.colorDark, { fontSize: 20, fontWeight: 'bold', textAlign: 'center', }]}>{e.vehicleName}</Text>
                                                    <TouchableOpacity>
                                                        <Icon name="favorite" size={20} color='red' />
                                                    </TouchableOpacity>
                                                </View>
                                                <Text>{e.noOfSeats} Seater</Text>
                                                <Text>{e.time}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    )
}
{/* <Text>Vehicle Type:{e.vehicleType}</Text> */ }
{/* <Text style={{ textAlign: 'center' }}>{i + 1}</Text> */ }
{/* <Text>Id:{e.id}</Text> */ }
{/* <Text>Start Dest:{e.startDest}</Text>
<Text>End Dest:{e.endDest}</Text> */}

export default Home