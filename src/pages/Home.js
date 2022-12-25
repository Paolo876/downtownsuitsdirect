import React from 'react'
import DocumentHead from "../components/DocumentHead"
import GalleryShowcase from '../components/GalleryShowcase';
import Navbar from "../components/Navbar"
import StoreInformation from '../components/StoreInformation'
import YelpReviews from '../components/YelpReviews';
import LoadingPage from '../components/LoadingPage';
import { useCollection } from '../hooks/useCollection';
import About from '../components/About';
const Home = () => {
  const { documents, isLoading } = useCollection("store-data")
  if(isLoading) return <LoadingPage/>
  if(documents) {
    const information = documents.find(item => item.id === "information");
    const gallery = documents.find(item => item.id === "gallery");
    return <>
      <DocumentHead title="Downtown Suits Direct | Home"/>
      <Navbar/>
      <StoreInformation data={information}/>
      <GalleryShowcase data={gallery}/>
      <About storeImage={information["store-image"]}/>
      <YelpReviews/>
    </>}
}

export default Home