import { View, Text, ScrollView, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import SMTextInput from '../component/SMTextInput'
import styles from '../styling'
import SMTouchableOpacity from '../component/SMTouchableOpacity'
import database from '@react-native-firebase/database'

const AddBooking = ({ navigation, route }) => {
  let vehicleObj = route.params
  let [model, setModel] = useState({})

  let bookNow = () => {
    model.vehicleDetails = vehicleObj
    database().ref('bookings/').set(model).then(res => {
      console.log(res)
      ToastAndroid.show('Booking Created Successfully', ToastAndroid.SHORT)
    })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <View style={[styles.bgLight, { height: '100%', paddingHorizontal: 20, paddingVertical: 20 }]}>
      <Text style={{ fontSize: 20, color: 'black' }}>Create Vehicle Booking</Text>
      <View style={{ height: '70%', paddingVertical: 30 }}>
        <ScrollView>
          <View style={[styles.bgWhite, { borderRadius: 15, paddingHorizontal: 20, paddingVertical: 15, marginBottom: 20 }]}>
            <View>
              <Text style={[{ color: '#023047', marginBottom: 10, fontSize: 22, fontWeight: 'bold', textAlign: 'center' }]}>Personal Details</Text>
            </View>
            <View>
              <SMTextInput onChangeText={(e) => setModel({ ...model, userName: e })} style={style.input} placeholderTextColor='#06283D' placeholder='User Name' />
            </View>
            <View>
              <SMTextInput onChangeText={(e) => setModel({ ...model, userName: e })} style={style.input} placeholderTextColor='#06283D' placeholder='Contact' />
            </View>
            <View>
              <SMTextInput onChangeText={(e) => setModel({ ...model, userName: e })} style={style.input} placeholderTextColor='#06283D' placeholder='CNIC' />
            </View>
            <View>
              <SMTextInput onChangeText={(e) => setModel({ ...model, userName: e })} style={style.input} placeholderTextColor='#06283D' placeholder='Address' />
            </View>
            <View>
              <SMTextInput onChangeText={(e) => setModel({ ...model, userName: e })} style={style.input} placeholderTextColor='#06283D' placeholder='Pick Up Point' />
            </View>
            <View>
              <SMTextInput onChangeText={(e) => setModel({ ...model, userName: e })} style={style.input} placeholderTextColor='#06283D' placeholder='Drop Point' />
            </View>
          </View>
          <View style={[styles.bgWhite, { borderRadius: 15, paddingHorizontal: 20, paddingVertical: 15 }]}>
            <View>
              <Text style={[{ color: '#023047', marginBottom: 10, fontSize: 22, fontWeight: 'bold', textAlign: 'center' }]}>Vehicle Details</Text>
            </View>
            <View>
              <SMTextInput editable={false} value={vehicleObj.vehicleName} style={style.input} placeholderTextColor='#06283D' placeholder='Vehicle Name' />
            </View>
            <View>
              <SMTextInput editable={false} value={vehicleObj.vehicleType} style={style.input} placeholderTextColor='#06283D' placeholder='Vehicle Type' />
            </View>
            <View>
              <SMTextInput editable={false} value={vehicleObj.noOfSeats} style={style.input} placeholderTextColor='#06283D' placeholder='No of Seats' />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ marginTop: 10, position: 'absolute', bottom: 30, left: 20, right: 20 }}>
        <SMTouchableOpacity
          touchableStyle={[styles.bgDark, { paddingVertical: 10, borderRadius: 10 }]}
          textStyle={[styles.colorLight, { textAlign: 'center', fontSize: 20 }]}
          value='Book Now'
          onPress={bookNow} />
      </View>
    </View>
  )
}

export default AddBooking

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
  }
})