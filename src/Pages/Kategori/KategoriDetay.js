import { View, Text } from 'react-native'
import React from 'react'
import kategori_detay_data from '../../components/data/kategori_detay.json'


export default function KategoriDetay({route}) {
  
  const {id} = route.params;
  const items = kategori_detay_data.filter(item => item.kategoriId == id)

  return (
    <View>
      <Text>{items[0].kategori_title}</Text>
    </View>
  )
}