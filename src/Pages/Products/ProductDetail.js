import { View, Text,ActivityIndicator,SafeAreaView } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/'
import Header from '../../components/Header'


export default function ProductDetail({route,navigation}) {
    const {id} = route.params;
    
    const { loading, data, error } = useFetch('https://fakestoreapi.com/products/' + id);
    console.log("https://fakestoreapi.com/products/" + id)
    console.log(data)
    if (loading) {
        return <ActivityIndicator size={'large'} />
    }
    if (error) {
        return 
        <SafeAreaView>
                <Text>{error}</Text>
        </SafeAreaView>
       
    }

  return (
    <View>
      <Text>ProductDetail</Text>
    </View>
  )
}