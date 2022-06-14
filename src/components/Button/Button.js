import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './Button.style'

const Button = ({ text, onPress, loading }) => {
    return (
        <TouchableOpacity styles={styles.container} onPress={onPress} disabled={loading}>
            {
                loading ? (
                    <ActivityIndicator color='white' />
                ) : (
                    <Text style={styles.title}>{text}</Text>
                )
            }
        </TouchableOpacity>
    );
};

export default Button;
