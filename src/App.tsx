import { useState } from 'react'
import {AboutSection} from './AboutSection/AboutSection.tsx'
import {ContactUsSection} from './ContactUsSection/ContactUsSection.tsx'
import {ServicesSection} from './ServicesSection/ServicesSection.tsx'
import './App.css'
import {Button, CssBaseline } from '@mui/material'

export const  App = () => {
  const [showAboutSection , setShowAboutSection] = useState<boolean>(true)
  const [showContactSection , setShowContactSection] = useState<boolean>(false)
  const [showServicesSection , setShowServicesSection] = useState<boolean>(false)
  
  const showAboutSec = () =>{
    setShowAboutSection(true)
    setShowContactSection(false)
    setShowServicesSection(false)
  }
  const showContactSec = () =>{
    setShowContactSection(true)
    setShowAboutSection(false)
    setShowServicesSection(false)
  }
  const showServicesSec = () =>{
    setShowServicesSection(true)
    setShowAboutSection(false)
    setShowContactSection(false)
    
  }
  
  
  return (
    <>
       <CssBaseline/>
       <header>
         <h1>Hair Dresser</h1>
         <div>
           <Button style={{color: 'white'}} onClick={showAboutSec}>About</Button>
           <Button style={{color: 'white'}} onClick={showServicesSec}>Services</Button>
           <Button style={{color: 'white'}} onClick={showContactSec}>Contact us</Button>
         </div>
       </header>
      {showAboutSection && <AboutSection/>}
      {showContactSection && <ContactUsSection/>}
      {showServicesSection && <ServicesSection/>}
       <footer>
       <div>
        Photo by <a href="https://unsplash.com/@albertobobbera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alberto Bobbera</a> on <a href="https://unsplash.com/photos/bHWit6pkuAk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
       </div>
       <div>
        Photo by <a href="https://unsplash.com/@tessawilson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tessa Wilson</a> on <a href="https://unsplash.com/photos/xkYJqEno62c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
       </div> 
       <p>Image by <a href="https://www.freepik.com/free-photo/professional-hair-supplies-flat-lay_6147348.htm#query=hair%20salon%20wallpaper&position=5&from_view=search&track=ais">Freepik</a></p>
       </footer>
    </>
  )
}


