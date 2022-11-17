import React from 'react'
import {useNavigate} from 'react-router-dom'
import Imc from './CompHealth/Imc';
import Introduction from './CompHealth/Introduction';
import ProduitIndus from './CompHealth/ProduitIndus';
import Regime from './CompHealth/Regime';
import Footer from './CompStor/Footer';


export default function Healthy() {
    const navigate = useNavigate();
  return (
    <div style={{paddingTop:'10px'}}>
    <Introduction/>
    <Regime/>
    <div  style={{background:'grey', paddingBottom:'1.5vw'}}>
    <ProduitIndus/>
    <Imc/></div>
    <Footer/>
    </div>
  )
}
