import { SafeAreaView } from 'react-native'
import React from 'react'
import Header  from './src/components/Header/'
import Banner from './src/components/Banner'
import Categories from './src/components/Categories'

export default function App() {
  return (
    <SafeAreaView>
      
     <Header />
     <Banner />
     <Categories />
    </SafeAreaView>
    
  )
}



