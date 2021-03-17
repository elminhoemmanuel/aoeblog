import {useState, useEffect} from 'react';
import firebase from "./utilities/Firebase";

const useFetch = (url)=>{

    const [data,setData] = useState(null);
    const [isPending,setIspending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{

        const abortCont = new AbortController(); 

        // const blogRef = firebase.database().ref("blogs")
        // ;
        // blogRef.on("value",(snapshot)=>{
        //     // console.log(snapshot.val());
        //     setData(snapshot.val()); 
        //     setIspending(false);
        //     setError(null);
        // })
        

        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error("Could not fetch required data");
                }
                return res.json();
            })
            .then(returnedData=>{
            setData(returnedData); 
            setIspending(false);
            setError(null);
            })
            .catch(err=>{
                if (err.name === 'AbortError'){
                    console.log("Fetch aborted");
                }else{
                    setIspending(false);
                    setError(err.message);
                };
            })
        }, 1000);

        

        return ()=>abortCont.abort();

    },[url]);

    return {data, isPending, error}
}

export default useFetch;