import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../styling'

const Splash = ({navigation}) => {
    let move = () => {
        setTimeout(() => {
            navigation.navigate('Home')
        },3000)
    }
    useEffect(() => {
        move()
    }, [])
    return (
        <>
            <View style={[styles.bgLight, { paddingTop: '50%', height: '100%' }]}>
                <Text style={[styles.colorDark, { textAlign: 'center', fontSize: 50, fontStyle: 'italic', fontWeight: 'bold' }]}>Transport</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                    <Image style={{ height: 200, width: 300 }} source={{ uri: 'https://play-lh.googleusercontent.com/kuBRgQP5t7C9ojkv3sKHgMdgZKlyR8_svy3liDd8FzF37nvcInz4G0G-yvCkkAuXUsg=w600-h300-pc0xffffff-pd' }} />
                </View>
            </View>
        </>
    )
}

export default Splash