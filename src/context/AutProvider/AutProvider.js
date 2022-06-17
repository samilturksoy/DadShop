import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // yeni versiyon da configureStore içine taşınmış toolkit kullanımını henüz bilmiyorum.
import reducers from './reducers';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [AutLoading, SetAutLoading] = useState(true);

    useEffect(() => {
        //promise yapısında kullandığımız için user'ı cihazın belleğine yazmasını beklemedik. İsterse 5 dk sonra yazsın program akısına devam edecek.
        //
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && setUser(JSON.parse(userSession));
            SetAutLoading(false);
        });
    }, []);

    const store = createStore(reducers,{user,AutLoading});
    return <Provider store={store}>{children}</Provider> 
};

export default AuthProvider;