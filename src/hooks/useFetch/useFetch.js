import { useState,useEffect } from 'react';
import axios from 'axios';

function useFetch(url){
    console.log(url)
    const [data, setData] = useState([]);
    const [loading, seLoading] = useState(true);
    const [error,setError] = useState(null);

    const fetcData = async () => {
        try {
            const {data : responseData} = await axios.get(url);
            seLoading(false);
            setData(responseData);
            
        } catch (err) {
            console.log(err);
            setError(err.message);
            seLoading(false);
        }
    }

    useEffect(()=>{
        fetcData();
    },[]);

    return {error,data,loading};
}

export default useFetch;