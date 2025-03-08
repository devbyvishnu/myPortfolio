import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/about/About'
import Skill from '../components/Skill/Skill'
import Services from '../components/Services/Services'
import Qualification from '../components/qualification/Qualification'
import Work from '../components/work/Work'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Scrollup from '../components/scrollup/Scrollup'

const Home = () => {
  return (
   <>
   <Navbar />

   <main className='main'>

    <Hero />
    <About />
    <Skill />
    <Services />
    <Qualification />
    <Work />
    <Testimonials />
    <Contact />

   </main>

   <Footer />
   <Scrollup />


   </>
  )
}

export default Home
