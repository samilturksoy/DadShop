import { StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    banner_image:{
        height:Dimensions.get('window').height / 7,
        width:Dimensions.get('window').width / 1,
        resizeMode:'stretch',
    }
  });

  export default styles;