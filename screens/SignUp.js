import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ImageBackground, ToastAndroid } from 'react-native';
import styles from '../styling';
import SMTextInput from '../component/SMTextInput';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Alert } from 'react-native';


function SignUp({ navigation }) {
    const [model, setModel] = useState({});
    const [err, setErr] = useState()
    const [isLoading, setIsLoading] = useState(false)

    let signupuser = () => {
        setIsLoading(true)
        if (!model) {
            Alert.alert(
                "Alert Title",
                "My Alert Msg",
                [
                    // {
                    //   text: "Ask me later",
                    //   onPress: () => console.log("Ask me later pressed")
                    // },
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                {
                    cancelable: true,
                    // onDismiss: () =>
                    //   Alert.alert(
                    //     "This alert was dismissed by tapping outside of the alert dialog."
                    //   ),
                }
            );
        }
        auth().createUserWithEmailAndPassword(model.email, model.password)
            .then(res => {
                console.log(res)
                database()
                    .ref(`appUsers/${res.user.uid}`)
                    .set(model)
                    .then(() => {
                        setIsLoading(false)
                        ToastAndroid.show('User Registered Successfully', ToastAndroid.SHORT)
                        setTimeout(() => {
                            navigation.navigate('Login')
                        }, 500);
                    })
                    .catch(dberr => {
                        setIsLoading(false)
                        ToastAndroid.show(dberr, ToastAndroid.SHORT)
                        console.log(dberr)
                        setErr(dberr)
                    })
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }


    return (
        <>
            {/* <ImageBackground style={{ height: '100%', width: '100%' }} source={{ uri: 'https://img.freepik.com/premium-photo/skyline-asphalt-pavement-blue-sky-white-cloud_1417-12062.jpg?w=2000' }}> */}
            <View style={[styles.bgLight, { height: '100%', width: '100%', alignItems: 'center', paddingTop: '30%' }]}>
                <Text style={{ fontSize: 26, color: 'black', fontWeight: 'bold', fontSize: 26 }}>SIGNUP</Text>
                <Icon name='person' size={80} color='#06283D' />
                <View style={{ width: '100%', paddingTop: 25, paddingHorizontal: 20 }}>
                    <Text style={[styles.colorDark, { fontWeight: 'bold', fontSize: 15, marginStart: 10, marginBottom: 2 }]}>Email</Text>
                    <SMTextInput label="Email" style={style.input} placeholder='rizwan@gmail.com' placeholderTextColor='grey' onChangeText={e => setModel({ ...model, email: e })} />
                </View>
                <View style={{ width: '100%', paddingTop: 25, paddingHorizontal: 20 }}>
                    <Text style={[styles.colorDark, { fontWeight: 'bold', fontSize: 15, marginStart: 10, marginBottom: 2 }]}>Password</Text>
                    <SMTextInput secureTextEntry={true} label="Password" style={style.input} placeholder='123456' placeholderTextColor='grey' onChangeText={e => setModel({ ...model, password: e })} />
                </View>
                <View style={{ padding: 20, width: '100%', paddingTop: 50 }}>
                    <TouchableOpacity style={{ backgroundColor: '#2B3A55', paddingVertical: 10, borderRadius: 15 }} onPress={signupuser}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>{isLoading ? <ActivityIndicator size='large' color="white" /> : 'SIGNUP'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16 }}>Already a user? </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                    >
                        <Text style={{ textAlign: 'center', color: '#023047', fontWeight: 'bold' }}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </ImageBackground> */}
        </>
    );
}
export default SignUp;

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