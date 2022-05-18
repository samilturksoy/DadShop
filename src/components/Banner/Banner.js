import { View, Text,ScrollView,Image } from 'react-native'
import React from 'react'
import banner_Data from '../data/banner_data.json'

import styles from './Banner.style'

export default function Banner() {
  return (
    
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingTop:10}}> 
            {
                banner_Data.map(bannerData => (
                    <Image 
                        key={bannerData.id}
                        source={{uri:bannerData.imageUrl}}
                        style={styles.banner_image}
                    />
                ))
            }
        </ScrollView>
      
  )
}