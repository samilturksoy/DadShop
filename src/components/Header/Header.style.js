import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    header_container:{
      backgroundColor:'blue'
    },
    header_logo_container:{
      textAlign:'center',
      backgroundColor:'red'
    },
    logo:{
      textAlign:'center',
      color:'white',
      fontSize:20,
      paddingTop:30
    },
    search_container:{
      flexDirection:'row',
      justifyContent:'space-around',
      paddingTop:20,
      paddingBottom:20
    },
    searchText:{
      borderColor:'red'
    },
    seacrh_input:{
      backgroundColor:'white',
      width:200,
      height:40,
      borderRadius:15,
      padding:10,
      fontSize:16
    },
    selectList:{
      borderRadius:10,
      backgroundColor:'white'
    }
  });

  export default styles;