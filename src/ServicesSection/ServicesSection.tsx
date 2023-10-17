import React from 'react'
import './ServicesSection.css'

export const ServicesSection = () =>{
  const [isAcrylicSelected , setIsAcrylicSelected] = React.useState(false)
  const [isGelSelected , setIsGelSelected] = React.useState(false)
  const showGelPTag = () =>{
    setIsAcrylicSelected(false)
    setIsGelSelected(true)
  }
  const showAcrylPTag = () =>{
    setIsAcrylicSelected(true)
    setIsGelSelected(false)
  }
  return(
    
    <div className='service_section' id='services'>
      <h2>Services</h2>
      My salon offers two services gel nails and acrylic nails.
      my Gel Nail service is perfect for those who seek a long-lasting and elegant manicure
      and If you desire strength and flexibility in your nail enhancements,
       my Acrylic Nails are an ideal choice.

        <div className='holder'> 
        <div className='service_flashcard1' onClick={showAcrylPTag}>
          <h3>Acrylic</h3>
          <p>Price: R150</p>
        </div>
        {isAcrylicSelected && 
        <p className='acly_p'> My acrylic nails can be customized in various shapes and lengths,
            and they offer a polished and elegant look that lasts for weeks,
            making them a favorite choice for those seeking stylish and resilient nail
            enhancements.
</p>}
       
        <div className='service_flashcard2' onClick={showGelPTag}>
          <h3>Gels</h3>
          <p>Price: R150</p>
        </div> 
        {isGelSelected && 
        <p className='gel_p'> 
       My gels are strong, flexible, and provide a glossy finish with a natural appearance.
       I also offer a wide range of color and design options.
        </p>}
        </div>
    </div>
  )
}