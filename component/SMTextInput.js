import React from 'react'
import { TextInput } from 'react-native'

function SMTextInput(props) {
    const { value, placeholder, placeholderTextColor, onChangeText, editable, style } = props
    return (
        <>
            <TextInput
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                editable={editable}
                style={style} />
        </>
    )
}

export default SMTextInput