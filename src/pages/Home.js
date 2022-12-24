import React from 'react'
import DocumentHead from "../components/DocumentHead"
import GalleryShowcase from '../components/GalleryShowcase';
import Navbar from "../components/Navbar"
import StoreInformation from '../components/StoreInformation'
import YelpReviews from '../components/YelpReviews';
import LoadingPage from '../components/LoadingPage';
import { useCollection } from '../hooks/useCollection';
const Home = () => {
  const { documents, isLoading } = useCollection("store-data")

  if(isLoading) return <LoadingPage/>
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