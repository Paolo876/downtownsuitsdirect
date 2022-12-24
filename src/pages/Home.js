import React from 'react'
import DocumentHead from "../components/DocumentHead"
import GalleryShowcase from '../components/GalleryShowcase';
import Navbar from "../components/Navbar"
import StoreInformation from '../components/StoreInformation'
import YelpReviews from '../components/YelpReviews';
import LoadingPage from '../components/LoadingPage';
import { useDocument } from '../hooks/useDocuments';
import { useCollection } from '../hooks/useCollection';
const Home = () => {
  // const { document, error, isLoading } = useDocument("store-data", "information");
  const { documents } = useCollection("store-data")

  return <LoadingPage/>
  if(documents) return (
    <>
      <DocumentHead title="Downtown Suits Direct | Home"/>
      <Navbar/>
      <StoreInformation data={documents.find(item => item.id === "information")}/>
      <GalleryShowcase data={documents.find(item => item.id === "gallery")}/>
      <YelpReviews/>
    </>
  )
}

export default Home