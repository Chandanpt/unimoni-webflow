import React from 'react'
import Services from './services'
import Branches from './branches'
import Footer from '@/components/footer'
import Slogan from './slogan'
import Service from './service'

const Home = () => {
  return (
    <>
    <Service />
    {/* <Services /> */}
    <Branches />
    <Slogan />
    <Footer />
    </>
  )
}

export default Home