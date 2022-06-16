import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [AutLoading, SetAutLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && setUser(JSON.parse(userSession));
            SetAutLoading(false);
        });
    }, []);

    const store = createStore(reducers,{user,AutLoading});
    return <Provider store={store}>{children}</Provider> 
};

export default AuthProvider;