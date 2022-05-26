import { View, Text,Button } from 'react-native'
import React from 'react'

export default function Profilim({ navigation }) {
  return (
    <View>
      <Button title='ProfilDetayaGit' onPress={() => navigation.navigate('ProfilDetay')} />
    </View>
  )
}