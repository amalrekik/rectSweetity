import React from 'react'
import './Boutique.css'
 import {useNavigate} from 'react-router-dom'
 import FormCarrousselle from './CompStor/formCarousselle'
 import NotreBoutique from './CompStor/NotreBoutique'
 import Articles from './CompStor/Articles'
 import Footer from './CompStor/Footer'
 import Avis from './CompStor/Avis'
 import {FaCartArrowDown} from 'react-icons/fa';
 import { useSelector} from 'react-redux';
export default function Boutique() {
  const styleTitre={ textAlign: "center", padding: "1%", backgroundColor: "grey ", marginTop:'-53px'}
 const navigate = useNavigate();
 const art = useSelector((sta) => sta.commande);
 const total= art.reduce((a,v) => a = a + v.quantite , 0 );
  return (<>
  <FaCartArrowDown
   onClick={() =>{navigate(`/boutique/facture`)}}
  style={{color:(total==0)?'rgb(70, 42, 12)':'rgb(161, 1, 38)',fontSize:(total==0)?'2.3vw':'2.6vw',pading:'-10px',zIndex:'11', backgroundColor:'white', position:'fixed', marginLeft:'27%'}}/>
    <div className='boutique'>
      
   <FormCarrousselle/>
   <div style={styleTitre}>
   <NotreBoutique/>
   <Articles/>
   </div>
   <div style={styleTitre}>
    <Avis/>
    </div>
    <hr/>
     <Footer/>
    </div>
    </>
  )
}
