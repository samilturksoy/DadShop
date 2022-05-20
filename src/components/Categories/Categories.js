import { View, Text, ScrollView,Image} from 'react-native'
import React from 'react'
import styles from './Categories.style'
import categori_data from '../data/categories_data.json'

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {
        categori_data.map(item => (
          <View key={item.id} style={styles.categori_container}>
            <Image 
              source={{uri:item.imageUrl}}
              style={styles.categori_image}
            />
          </View>
        ))
      }
    </ScrollView>
  )
}