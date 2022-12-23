import React from 'react'
import DocumentHead from "../components/DocumentHead"
import GalleryShowcase from '../components/GalleryShowcase';
import Navbar from "../components/Navbar"
import StoreInformation from '../components/StoreInformation'
import YelpReviews from '../components/YelpReviews';
import { useDocument } from '../hooks/useDocuments';
import { useCollection } from '../hooks/useCollection';
const Home = () => {
  // const { document, error, isLoading } = useDocument("store-data", "information");
  const { documents } = useCollection("store-data")

  if(documents) return (
    <>
      <DocumentHead title="Downtown Suits Direct | Home"/>
      <Navbar/>
      <StoreInformation data={documents.find(item => item.id === "information")}/>
      <GalleryShowcase/>
      <YelpReviews/>
    </>
  )
}

export default Home