import { SafeAreaView, FlatList, StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Kategori from '../components/Kategori/Kategori'
import kategori_data from '../components/data/kategori_data.json'


export default function App({ navigation }) {


  const RenderKategori = ({ item }) => <Kategori kategori={item} onSelect={() => handdleProduct(item.id)} />

  const handdleProduct = id => {
    console.log(id);
    navigation.navigate("KategoriDetay", { id })
  }
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

