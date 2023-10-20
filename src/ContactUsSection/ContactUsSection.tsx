import './ContactUsSection.css'
import {Button} from '@mui/material'
export const ContactUsSection = () => {
    return (
       <div className='contact_section' id='contact'>
         <h2>Contact me</h2>
         To find out more about GlambyPetronella, please check out my <a href='https://www.facebook.com/profile.php?id=100092156778151'>Facebook</a> page. 
         To preorder, simply fill out the form below.
        <div className="contact_container">
           <p>Phone: +27 455 7775</p>
           <p>Facebook</p>
        </div>
        
        <div className="pre_order_form">
        
        <form action="https://formsubmit.co/jojobrhms@gmail.com" method="POST">
         
          
             <input type="text" name="FirstName"   pattern="[A-Za-z ]{3,}" required placeholder="FirstName" title="No numbers are allowed in your name"/>
             <input type="text" name="LastName"   pattern="[A-Za-z ]{3,}" required placeholder="LastName" title="No numbers are allowed in your name"/>
             <input type="email" name="Email"    required placeholder="Email" title="valid email required"/>
             <div>
               <h3>Reason for Contact</h3>
                <input type="radio" id="Acrylic" name="reason_for_contact" value="Acrylics" required />
                <label htmlFor="Acrylic">Acrylics</label>

                <input style={{marginLeft:'1rem'}}type="radio" id="Gels" name="reason_for_contact" value="Gels" required />
                <label htmlFor="Gels">Gels</label>
            </div>

            <div><Button type='submit'>Submit</Button></div>
          </form>
        </div>

       </div>
    )
}