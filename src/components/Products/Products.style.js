import {StyleSheet,Dimensions} from 'react-native'

const styles =StyleSheet.create({
    kategori_container:{
        height:Dimensions.get('window').width / 3,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'white',
        flex:1,
        margin:6,
        borderWidth:0.5


    },
    kategori_image:{
        height:70,
        width:70,
        resizeMode:'contain'
    },
    kategori_text:{textAlign:'center'}
});

export default styles;