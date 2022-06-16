import React from 'react';
import App from '../App';
import AutProvider from '../src/context/AutProvider';

export default () => {
    return(
        <AutProvider>
            <App />
        </AutProvider>
    );
};