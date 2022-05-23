import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header/'
import Banner from './src/components/Banner'
import Categories from './src/components/Categories'
import Kategori from './src/components/Kategori/Kategori'
import kategori_data from './src/components/data/kategori_data.json'
import styles from './src/components/Header/Header.style'

export default function App() {

  const RenderKategori = ({ item }) => <Kategori kategori={item} />

  return (
    <SafeAreaView>

      <Header />
      
      <FlatList
        ListHeaderComponent={
          <View>
            <Banner />
            <Categories />
          </View>}
        data={kategori_data}
        horizontal={false}
        numColumns={3}
        keyExtractor={item => item.id.toString()}
        style={styless.kategori_flatlist}
        renderItem={RenderKategori}
      />
    </SafeAreaView>

  )
}

const styless = StyleSheet.create({
  kategori_flatlist: {
    marginVertical: 10
  }
})

