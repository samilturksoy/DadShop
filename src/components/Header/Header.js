import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Header.style'
import SelectDropdown from 'react-native-select-dropdown'

const countries = ["İstanbul", "Ankara", "İzmir", "Manisa"]

function Header() {
  return (
    <View style={styles.header_container}>
      <View>
        <Text style={styles.logo}>dadshop</Text>
      </View>
      <View style={styles.search_container}>
        <TextInput
          placeholder='Ürün Ara'
          style={styles.seacrh_input}
        />
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          defaultButtonText='Adres Seçiniz'
          rowStyle={styles.selectList}

        />
      </View>
    </View>
  )
}



export default Header;