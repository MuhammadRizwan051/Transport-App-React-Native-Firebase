import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database'

const Bookings = () => {
  let [list, setList] = useState([])

  let getData = () => {
    database()
      .ref('bookings')
      .once('value', dt => {
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
      {list.map((e, i) => (
        <View key={i}>
          <Text>{e.userName}</Text>
          <Text>{e.vehicleDetails.noOfSeats}</Text>
          <Text>{e.contact}</Text>
        </View>
      ))}
    </>
  )
}

export default Bookings