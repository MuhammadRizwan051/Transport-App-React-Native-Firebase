import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import database from '@react-native-firebase/database'
import styles from '../styling'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ navigation }) => {
    // let obj = route.params
    // console.log(route.params)
    let [userData, setUserData] = useState([])

    let [dataLoader, setDataLoader] = useState(false)
    let [list, setList] = useState([])
    let getData = () => {
        setDataLoader(true)
        database()
            .ref('vehicles')
            .on('value', dt => {
                setDataLoader(false)
                // console.log(dt.val())
                let li = Object.values(dt.val())
                setList([...li])
            })
    }


    const getData1 = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('LoginUser')
            // const abc = JSON.parse(jsonValue)
            setUserData(JSON.parse(jsonValue))
            console.log('Home', JSON.parse(jsonValue))
            // return jsonValue != null ? console.log('Home Console', JSON.parse(jsonValue)) : null;
        } catch (e) {
            // error reading value
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
        getData1()
    }, [])
    // console.log('list', list)


    return (
        <>
            <View style={[styles.bgDark, { paddingVertical: 10, paddingHorizontal: 10 }]}>
                <Text style={[styles.colorWhite, { textAlign: 'center', fontSize: 26, fontWeight: 'bold' }]}>{userData.email}</Text>
            </View>
            <View style={[styles.bgLight, { height: '100%', paddingHorizontal: 20, paddingVertical: 20 }]}>
                <View>
                    <Image resizeMode='cover' style={{ height: 200, width: '100%', borderRadius: 10 }} source={{ uri: 'https://media.istockphoto.com/id/1399747292/photo/logistics-transportation-import-export-and-container-cargo-freight-ship-freight-train-cargo.jpg?b=1&s=170667a&w=0&k=20&c=j18xZM7GzIU_pzvhoYFkO2UWUrWBK1z5x1kLk4ndEZw=' }} />
                </View>
                <View style={{ height: '60%', marginVertical: 30, justifyContent: 'center' }}>
                    {dataLoader ? <ActivityIndicator size={60} color='red' />
                        :
                        <ScrollView>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {list && list.map((e, i) => (
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
                                                                ""
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
                    }
                </View>
            </View>
        </>
    )
}

export default Home