import { View, Text, ActivityIndicator, SafeAreaView, ScrollView,TouchableOpacity, Button, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'




export default function ProductDetail({ route, navigation }) {
  const { id } = route.params;

  const { loading, data, error } = useFetch('https://fakestoreapi.com/products/' + id);

  if (loading) {
    return <ActivityIndicator size={'large'} color="#0000ff" />
  }
  if (error) {
    return <Text>{error}</Text>
  }
  function backToProducts() {
    navigation.goBack();
  }
  return (
    <View style={styles.product_datail_container}>

      <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', padding: 20, borderBottomColor: 'gray', borderBottomWidth: 0.5 }}>
        <Icon name='arrow-left' size={20} onPress={backToProducts} />
        <Text>Ürün Detay</Text>
        <Icon name='share-variant-outline' color='#275CE6' size={20} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 2, alignItems: 'center', backgroundColor: '#fff', paddingTop: 15 }}>
          <Image
            style={styles.prodcut_detail_image}
            source={{ uri: data.image }}
          />
          <Text style={{ padding: 15 }}>{data.description}</Text>
          <Text style={{ padding: 15 }}>{data.description}</Text>
          <Text style={{ padding: 15 }}>{data.description}</Text>
          <Text style={{ padding: 15 }}>{data.description}</Text>
          <Text style={{ padding: 15 }}>{data.description}</Text>
          <Text style={{ padding: 15 }}>{data.description}</Text>
          <Text style={{ padding: 15 }}>{data.description}</Text>
          <View style={{ alignSelf: 'flex-end' }}>

            <Text style={{ fontWeight: 'bold' }}>Kategori : {data.category}</Text>
          </View>

        </View>
      </ScrollView>
      <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 5 }}>
        <Text style={styles.price}>{data.price} TL</Text>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sepete Ekle</Text>
        </TouchableOpacity>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({

  product_datail_container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 40,
    marginBottom: 20
  },
  buttonContainer: {
    backgroundColor: "#275CE6",
    borderRadius: 10,
    width: 200

  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",

    margin: 10
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20
  },
  prodcut_detail_image: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  }
});