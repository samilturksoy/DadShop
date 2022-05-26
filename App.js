import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Pages/Home'
import FavoritesScreen from './src/Pages/Favorites'
import OrderScreen from './src/Pages/Order'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilimScreen from './src/Pages/Profilim';
import ProfilDetayScreen from './src/Pages/ProfilDetay'


export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const MyAccount =() =>{
    return(
      <Stack.Navigator>
          <Stack.Screen name="Profilim" component={ProfilimScreen} />
          <Stack.Screen name="ProfilDetay" component={ProfilDetayScreen} />
      </Stack.Navigator>
    );
  };

  const Urun =() =>{
    return(
      <Stack.Navigator>
          <Stack.Screen name="UrunDetay" component={ProfilimScreen} />
          <Stack.Screen name="Urun1" component={ProfilDetayScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: () => (
            <Icon name='home' size={30} />
          ),
          title: 'Anasayfa'

        }} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />
        <Tab.Screen name="Profil" component={MyAccount} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}