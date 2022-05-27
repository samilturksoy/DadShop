import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Pages/Home'
import FavoritesScreen from './src/Pages/Favorites'
import OrderScreen from './src/Pages/Order'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KategoriDetayScreen from './src/Pages/Kategori/KategoriDetay'



export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const HomePageTab =() =>{
    return(
      <Tab.Navigator>
          <Tab.Screen name="Anasayfa" component={HomeScreen} />
          <Tab.Screen name="Order" component={OrderScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    );
  };

 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePageTab} />
        <Stack.Screen name='KategoriDetay' component={KategoriDetayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}