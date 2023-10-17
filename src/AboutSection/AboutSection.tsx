import './AboutSection.css'
import refOne from '../images/referenceOne.jpg';
import refTwo from '../images/referenceTwo.jpg';
import refThree from '../images/referenceThree.jpg';
import refFour from '../images/referenceFour.jpg';
/** about section the tells the reader about the business and its identity */
export const AboutSection  = () => {
    return (
     <div className='about_section'>
         <h2 id='about'>About</h2>
        
          
          Welcome to  GlambyPetronella, where beauty meets precision! I specialize in the art of nail 
      enhancement, offering a range of stunning options, including luxurious gel nails and 
      resilient acrylic nails. i Am  dedicated to delivering 
      the perfect, customized nail designs you've always dreamed of. I
      believe that every detail counts, and I take pride in creating nails
       that are not only strong and long-lasting but also exquisitely beautiful.
          
         
         <div className='grid'>
            
            <div className='grid-item'><img src={refOne}/></div>
            <div className='grid-item'><img src={refTwo} /></div> 
            <div className='grid-item'><img src={refThree}/></div>
            <div className='grid-item'><img src={refFour}/></div>
            
         </div>
     </div>
    )
}