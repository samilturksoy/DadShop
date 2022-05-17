import React from 'react'
import { View, Text} from 'react-native'
import styles from './Header.style'

function Header(){
    return(
      <View style={styles.header_container}>
        <View>
          <Text style={styles.logo}>dadshop</Text>
        </View>
        <View style={styles.search_container}>
        <Text>Ara yeri</Text>
          <Text>Selectbox yeri</Text>
        </View>
      </View>
    )
  }


  
  export default Header;