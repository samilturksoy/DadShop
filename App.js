import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Pages/Home'
import FavoritesScreen from './src/Pages/Favorites'
import OrderScreen from './src/Pages/Order'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarIcon: () => (
            <Icon name='home' size={30} />
          ),
          title: 'Anasayfa'

        }} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}