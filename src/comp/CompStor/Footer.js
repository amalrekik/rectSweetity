import React from 'react'
import { FaFacebookMessenger,FaFacebook, FaGithub , FaWhatsapp} from 'react-icons/fa';
export default function Footer() {
  return (
    <div style={{textAlign:'center', paddingTop:'10px'}}>
    
               
    <button style={{borderRadius:'21px', borderColor:'rgb(176, 8, 47)', marginRight:'3px'}}> <FaFacebookMessenger style={{color:'rgb(176, 8, 47)', fontSize:'2vw', paddingTop:'4px'}}/></button>
    <button style={{borderRadius:'21px', borderColor:'rgb(64, 116, 12)', marginRight:'3px'}}> <FaFacebook style={{color:'rgb(64, 116, 12)', fontSize:'2vw', paddingTop:'4px'}}/></button>    
    <button style={{borderRadius:'21px', borderColor:'rgb(176, 8, 47)', marginRight:'3px'}}> <FaGithub style={{color:'rgb(176, 8, 47)', fontSize:'2vw', paddingTop:'4px'}}/></button>
    <button style={{borderRadius:'21px', borderColor:'rgb(64, 116, 12)', marginRight:'3px'}}> <FaWhatsapp style={{color:'rgb(64, 116, 12)', fontSize:'2vw', paddingTop:'4px'}}/></button>    
  
    
    <p style={{color:'grey'}}>SweeTity © 2022 <br/> re.amal@yahoo.com</p>

    </div>
  )
}
