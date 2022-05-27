import { View, Text, Image,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './Kategori.style'



export default function Kategori({kategori,onSelect}) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>

        <View style={styles.kategori_container}>
            <View style={styles.kategori_image_container}>
                <Image
                    style={styles.kategori_image}
                    source={{ uri: kategori.imageUrl }}
                    />
            </View>

            <View>
                <Text style={styles.kategori_text}>{kategori.kategori_title}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>



    )
}