import { View, Text, ActivityIndicator, FlatList ,SafeAreaView} from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/'
import ProductsComponent from '../../components/Products'
import Header from '../../components/Header'


export default function Products({ navigation }) {

    const { loading, data, error } = useFetch('https://fakestoreapi.com/products');

    const RenderProducts = ({ item }) => <ProductsComponent products={item} onSelect={() => handdleProduct(item.id)} />

    const handdleProduct = id => {
        console.log(id);
        navigation.navigate("ProductDetail", { id })
    }


    if (loading) {
        return <ActivityIndicator size={'large'} />
    }
    if (error) {
        return <Text>{error}</Text>
    }
    return (
        <SafeAreaView>
            <Header />

            <FlatList
                data={data}
                horizontal={false}
                numColumns={3}
                keyExtractor={item => item.id.toString()}
                //style={{ paddingBottom: 40 }}
                renderItem={RenderProducts}

            />
        </SafeAreaView>
    )
}