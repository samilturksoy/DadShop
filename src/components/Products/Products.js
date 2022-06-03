import { View, Text, Image,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './Products.style'



export default function Products({products,onSelect}) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>

        <View style={styles.kategori_container}>
            <View style={styles.kategori_image_container}>
                <Image
                    style={styles.kategori_image}
                    source={{ uri: products.image }}
                    />
            </View>

            <View>
                <Text style={styles.kategori_text}>{products.title.substr(0, 24) + "..."}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>



    )
}