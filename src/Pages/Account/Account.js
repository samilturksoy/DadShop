import { View, Text,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'


export default function Account() {
  const dispatch = useDispatch()
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={()=>dispatch({type: 'REMOVE_USER'})}>
            <Text>Çıkış yap</Text>

            </TouchableOpacity>
    </SafeAreaView>
  )
}