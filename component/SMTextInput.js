import React from 'react'
import { TextInput } from 'react-native'

function SMTextInput(props) {
    const {placeholder, placeholderTextColor, onChangeText, style} = props
    return (
        <>
            <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} onChangeText={onChangeText} style={style} />
        </>
    )
}

export default SMTextInput