import { useState } from 'react'
import {AboutSection} from './AboutSection/AboutSection.tsx'
import {ContactUsSection} from './ContactUsSection/ContactUsSection.tsx'
import {ServicesSection} from './ServicesSection/ServicesSection.tsx'
import './App.css'
import {Button, CssBaseline, IconButton } from '@mui/material'
import {ArrowUpward} from '@mui/icons-material'

export const  App = () => {
  return (
    <>
       <CssBaseline/>
       <header id='head'>
         <h1>GlambyPetronella</h1>
         <div>
           <Button size='medium'style={{color: 'black'}}><a href="#about" style={{color: 'black', textDecoration:'none'}}>About</a></Button>
           <Button size='medium' style={{color: 'black'}}><a href="#services" style={{color: 'black', textDecoration:'none'}}>Services</a></Button>
           <Button size='medium' style={{color: 'black'}}><a href="#contact" style={{color: 'black', textDecoration:'none'}}>Contact Me</a></Button>
         </div>
       </header>
       <AboutSection/>
       <ServicesSection />
       <ContactUsSection/>
       
       <div className='backup'><IconButton><a href="#head"><ArrowUpward/></a></IconButton></div>
       <footer>
       <div>
       Photo by <a href="https://unsplash.com/@dancristianpaduret?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dan Cristian Pădureț</a> on <a href="https://unsplash.com/photos/2Zj3TlRCC6E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
       </div>
       
       <p>Image by <a href="https://www.freepik.com/free-photo/professional-hair-supplies-flat-lay_6147348.htm#query=hair%20salon%20wallpaper&position=5&from_view=search&track=ais">Freepik</a></p>
       </footer>
    </>
  )
}


