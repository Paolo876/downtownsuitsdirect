import React, { useState, useEffect} from 'react'
import DocumentHead from "../components/DocumentHead"
import GalleryShowcase from '../components/GalleryShowcase';
import Navbar from "../components/Navbar"
import StoreInformation from '../components/StoreInformation'
import YelpReviews from '../components/YelpReviews';
import LoadingPage from '../components/LoadingPage';
import About from '../components/About';
import { useCollection } from '../hooks/useCollection';
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';

const Home = () => {
  const { documents, isLoading } = useCollection("store-data");
  // const [ imagekitKeys, setImagekitKeys ] = useState(JSON.parse(localStorage.getItem("imagekitKeys")))
  const [ imagekitKeys, setImagekitKeys ] = useState(null);
  useEffect(() => {
    httpsCallable(functions, "getImagekitKeys")().then((res) => {
      setImagekitKeys(res.data)
    })
  }, [])
  
  if(isLoading || !documents || !imagekitKeys) return <LoadingPage/>
  if(documents && imagekitKeys) {
    const information = documents.find(item => item.id === "information");
    const gallery = documents.find(item => item.id === "gallery");
    return <>
      <DocumentHead title="Downtown Suits Direct | Home"/>
      <Navbar/>
      <StoreInformation data={information}/>
      <GalleryShowcase data={gallery} imagekitKeys={imagekitKeys}/>
      <About storeImage={information["store-image"]} imagekitKeys={imagekitKeys}/>
      <YelpReviews/>
    </>}
}

export default Home