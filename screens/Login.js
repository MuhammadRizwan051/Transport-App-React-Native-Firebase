import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ToastAndroid } from 'react-native';
import SMTextInput from '../component/SMTextInput';
import auth from '@react-native-firebase/auth';
import styles from '../styling';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Login({ navigation }) {
    let [userData, setUserData] = useState([])
    const initialData = {
        email: '',
        password: ''
    }
    const [model, setModel] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false)

    let loginuser = () => {
        setIsLoading(true)
        auth().signInWithEmailAndPassword(model.email, model.password)
            .then(res => {
                setIsLoading(false)
                // console.log(res.user)
                ToastAndroid.show('User Login Successfully', ToastAndroid.SHORT)
                setModel(initialData)
                // setTimeout(() => {
                //     navigation.navigate('Home')
                // }, 200);

                const storeData = async () => {
                    try {
                        const jsonValue = JSON.stringify(res.user)
                        await AsyncStorage.setItem('LoginUser', jsonValue)
                        console.log('Data stored', jsonValue)
                    } catch (e) {
                        // saving error
                        console.log('Data not stored')
                    }
                }

                storeData()

                const getData1 = async () => {
                    try {
                        const jsonValue = await AsyncStorage.getItem('LoginUser')
                        // const abc = JSON.parse(jsonValue)
                        setUserData(JSON.parse(jsonValue))
                        console.log('Home Login Data', JSON.parse(jsonValue))
                        // return jsonValue != null ? console.log('Home Console', JSON.parse(jsonValue)) : null;
                    } catch (e) {
                        // error reading value
                    }
                }
                getData1()
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }

    return (
        <>
            <View style={[styles.bgLight, { height: '100%', alignItems: 'center', paddingTop: '30%' }]}>
                <Text style={[styles.colorDark, { fontSize: 26, fontWeight: 'bold', fontSize: 26 }]}>{userData ? userData.email : ''}</Text>
                <Text style={[styles.colorDark, { fontSize: 26, fontWeight: 'bold', fontSize: 26 }]}>LOGIN</Text>
                <Icon name='person' size={80} color='#06283D' />
                <View style={{ width: '100%', paddingTop: 25, paddingHorizontal: 20 }}>
                    <Text style={[styles.colorDark, { fontWeight: 'bold', fontSize: 15, marginStart: 10, marginBottom: 2 }]}>Email</Text>
                    <SMTextInput value={model.email} label="Email" style={style.input} placeholder='rizwan@gmail.com' placeholderTextColor='grey' onChangeText={e => setModel({ ...model, email: e })} />
                </View>
                <View style={{ width: '100%', paddingTop: 25, paddingHorizontal: 20 }}>
                    <Text style={[styles.colorDark, { fontWeight: 'bold', fontSize: 15, marginStart: 10, marginBottom: 2 }]}>Password</Text>
                    <SMTextInput value={model.password} secureTextEntry={true} label="Password" style={style.input} placeholder='123456' placeholderTextColor='grey' onChangeText={e => setModel({ ...model, password: e })} />
                </View>

                <View style={{ padding: 20, width: '100%', paddingTop: 50 }}>
                    <TouchableOpacity style={{ backgroundColor: '#2B3A55', paddingVertical: 10, borderRadius: 15 }} onPress={loginuser}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>{isLoading ? <ActivityIndicator size='large' color="white" /> : 'LOGIN'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16 }}>
                        Need an account? </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignUp');
                        }}
                    >
                        <Text style={{ textAlign: 'center', color: '#023047', fontWeight: 'bold' }}>
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
export default Login;

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
})