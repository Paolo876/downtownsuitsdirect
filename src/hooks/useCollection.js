import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";

export const useCollection = (_collection, _query) => {
  const [ documents, setDocuments ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  const q = useRef(_query).current;

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    let ref = collection(db, _collection);

    if(q) ref = query(ref, where(...q));
    
    getDocs(ref)
      .then(res => {
        let result = {};
        res.forEach((doc) => {
          result[doc.id] = doc.data()
        });
        setDocuments(result)
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err)
        setError(`Failed to fetch data. \nCollection: ${_collection}`);
        setIsLoading(false)
      })
    
    // const unsub = onSnapshot(ref, snapshot => {
    //     setDocuments( snapshot.docs.map( item => { return { id: item.id, ...item.data() } } ) )
    //     setIsLoading(false)
    // }, error => {
    //   console.log(error)
    //   setError(`Failed to fetch data. \nCollection: ${_collection}`);
    //   setIsLoading(false)
    // });
    // return () => unsub();   //run on unmount to cancel subscription
  
  }, [_collection, q])

  return {
      documents,
      isLoading,
      error
  }
}