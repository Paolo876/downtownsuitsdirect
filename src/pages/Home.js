import React from 'react'
import DocumentHead from "../components/DocumentHead"
import GalleryShowcase from '../components/GalleryShowcase';
import Navbar from "../components/Navbar"
import StoreInformation from '../components/StoreInformation'
import YelpReviews from '../components/YelpReviews';
import { useDocument } from '../hooks/useDocuments';

const Home = () => {
  const { document, error, isLoading } = useDocument("store-data", "information");

  return (
    <>
      <DocumentHead title="Downtown Suits Direct | Home"/>
      <Navbar/>
      {document && <StoreInformation document={document}/>}
      <GalleryShowcase/>
      <YelpReviews/>
    </>
  )
}

export default Home