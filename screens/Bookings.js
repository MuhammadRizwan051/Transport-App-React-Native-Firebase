import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import database from '@react-native-firebase/database'
import styles from '../styling'

const Bookings = ({ navigation }) => {
  let [dataLoader, setDataLoader] = useState(false)
  let [list, setList] = useState([])

  let getData = () => {
    setDataLoader(true)
    database()
      .ref('bookings')
      .on('value', dt => {
        setDataLoader(false)
        let li = Object.values(dt.val())
        setList([...li])
      })
  }
  console.log('list', list)
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <View style={[styles.bgDark, { paddingVertical: 10, paddingHorizontal: 10 }]}>
        <Text style={[styles.colorWhite, { textAlign: 'center', fontSize: 26, fontWeight: 'bold' }]}>Bookings</Text>
      </View>
      <View style={[styles.bgLight, { height: '100%', paddingVertical: 20, paddingHorizontal: 15 }]}>
        {dataLoader ? <View style={{ height: '100%', justifyContent: 'center' }}>
          <ActivityIndicator size={60} color='red' />
        </View>
          :
          <ScrollView>
            {list.map((e, i) => (
              <View key={i} style={[styles.bgWhite, { marginBottom: 15, width: '100%', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 10 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={[styles.colorDark, { fontSize: 24, fontWeight: 'bold' }]}>{e.vehicleDetails.vehicleName}</Text>
                  <TouchableOpacity>
                    <Icon name="favorite" size={20} color='red' />
                  </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 10, fontWeight: 'bold', color: 'black' }}>User Details</Text>
                <Text>{e.userName}</Text>
                <Text>{e.contact}</Text>
                <Text>{e.address}</Text>
                <Text>{e.cnic}</Text>
                <Text>{e.pickUpPoint}</Text>
                <Text>{e.dropPoint}</Text>
                <Text style={{ marginTop: 10, fontWeight: 'bold', color: 'black' }}>Vehicle Details</Text>
                <Text>{e.vehicleDetails.noOfSeats} Seater</Text>
                <Text>{e.vehicleDetails.time}</Text>
              </View>
            ))}
          </ScrollView>
        }
      </View>
    </>
  )
}

export default Bookings