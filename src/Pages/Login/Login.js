import { View, Text, SafeAreaView, Image, Alert } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import usePost from '../../hooks/usePost'
import { Formik } from 'formik'
import styles from './Login.style'

const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost();

    function handleLogin(values){
        console.log(values);
        post("https://fakestoreapi.com/auth/login",values)

        
    }

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
            navigation.navigate("Home")
        }
        
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

export default Login;