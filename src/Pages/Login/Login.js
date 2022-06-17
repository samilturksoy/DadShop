import { View, Text, SafeAreaView, Image, Alert ,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import usePost from '../../hooks/usePost'
import { Formik } from 'formik'
import styles from './Login.style'
import { useDispatch } from 'react-redux'

const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            console.log(error)
            alert("Bir hata oluştu")
        }
        if (data) {
            console.log(data)
            if (data.status === 'Error') {
                alert("Kullanıcı Bulunamadı")
            }
            else {
                dispatch({type:'SET_USER',payload:{user}})
                //burada cihazın belleğine gelen değeri yazmadık reducers dosyamızda yazmayı tercih ettik 
               // navigation.navigate("Home") // navigate etmeye gerek var mı 
            }
        }
    }, [data, error])

    function handleLogin(values) {
        console.log(values);
        post("https://fakestoreapi.com/auth/login", values)
    }


    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.logo_container}>
            
                <Image style={styles.logo} source={require("../../assets/login_logo.png")} />
            </View>

            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={handleLogin}
            >
                {
                    ({ handleSubmit, handleChange, values }) => (
                        <View style={styles.body_container} >
                            <Input
                                placeholder="Email"
                                value={values.username}
                                onType={handleChange("username")}
                                iconName="account"
                            />
                            <Input
                                placeholder="Şifrenizi girin"
                                value={values.password}
                                onType={handleChange("password")}
                                iconName="key"
                                isSecure={true}
                            />
                            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                        </View>)}
            </Formik>
            
        </SafeAreaView>
    );
};

const user = {
    id:1,
    email:'John@gmail.com',
    username:'johnd',
    password:'m38rmF$',
    name:{
        firstname:'John',
        lastname:'Doe'
    },
    address:{
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
        }
    },
    phone:'1-570-236-7033'
}
export default Login;