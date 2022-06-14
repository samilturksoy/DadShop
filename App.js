import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Pages/Home'
import FavoritesScreen from './src/Pages/Favorites'
import OrderScreen from './src/Pages/Order'
import KategoriDetayScreen from './src/Pages/Kategori/KategoriDetay'
import ProductsScreen from './src/Pages/Products/Products'
import ProductDetailScreen from './src/Pages/Products/ProductDetail'
import AccountScreen from './src/Pages/Account'
import LoginScreen from './src/Pages/Login'




export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const HomePageTab =() =>{
    return(
      <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Anasayfa" component={HomeScreen} options={{
            tabBarIcon: () => (
              <Icon name="home" size={30} />
            )
          }}/>
          <Tab.Screen name="Products" component={ProductsScreen} options={{
            tabBarIcon: () =>(
              <Icon name="shipping-pallet" size={30} />
            )
          }}/>
          <Tab.Screen name="Order" component={OrderScreen} options={{
            tabBarIcon : () => (
              <Icon name="cart" size={30} />
            )
          }}/>
          <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
            tabBarIcon : () =>(
              <Icon name='cards-heart' size={30} />
            )
          }}/>
          <Tab.Screen name="Account" component={AccountScreen} options={{
            tabBarIcon : () =>(
              <Icon name='account' size={30} />
            )
          }}/>
      </Tab.Navigator>
    );
  };

 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login'  component={LoginScreen} />
        <Stack.Screen name='Home'  component={HomePageTab} />
        <Stack.Screen name='KategoriDetay' component={KategoriDetayScreen} />
        <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}