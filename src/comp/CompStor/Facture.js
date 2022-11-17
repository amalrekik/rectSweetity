import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { CleanAll, CleanAllFacture, deleteArticle } from '../redux'
import Formulaire from './Form'
import Footer from './Footer';

export default function Facture() {
  const art = useSelector((stat) => stat.commande);
  const dispatch = useDispatch();
  const ttc = (art.reduce((a, v) => a = a + v.prix, 0))
  const navigate = useNavigate();
  const ObjectStyle={ color:'white', fontSize:'2.2vw', border:'0',backgroundColor:'rgb(64, 116, 12)', borderRadius:'5px', paddingLeft:'10vw', paddingRight:'10vw', paddingTop:'0.2vw', paddingBottom:'0.2vw', marginBottom:'3px'}
  const ObjectStyl={ color:'white', fontSize:'2.2vw', border:'0',backgroundColor:'rgb(176, 8, 47)', borderRadius:'5px', paddingLeft:'10vw', paddingRight:'10vw', paddingTop:'0.2vw', paddingBottom:'0.2vw', marginBottom:'4px'}
  return (
  <>
    <div style={{ paddingTop: '80px', fontSize:'2vw' }}>
      <table style={{ marginLeft: '10%', marginRight: '13%', textAlign: 'center' }}>
        <thead style={{backgroundColor:'grey'}}>
          <tr >
            <th style={{ width: '10%' }}>quantité</th>
            <th>Nom de l'article</th>
            <th>Prix ttc</th>
          </tr>
        </thead>
        <tbody>
        {art.map((e, index) => {
          return <tr key={index}>
              <td><button style={{fontSize:'2.2vw',border:'0' ,color:'white',backgroundColor:(e.regime=="gourmand")?'rgb(176, 8, 47)':'rgb(64, 116, 12)'}} onClick={() => { dispatch(deleteArticle(index)) }}>x</button><a> </a>{(e.quantite == 0) ? 1 : e.quantite}</td>
              <td style={{textAlign:'left'}}><a >{e.titre} </a></td>
              <td><a> {e.prix}</a>dt </td>
            </tr> 
        })}
        </tbody>
        
        <tfoot>
          <tr >
            <td></td>
            <td></td>
            <td><hr/>{ttc} ttc<br/><button style={{fontSize:'1.2vw', border:'0'}} onClick={() => {navigate('/boutique')}}>Modifiez votre Panier</button></td>
          </tr>
        </tfoot>
      </table><hr/>
      
      <div style={{textAlign:'center', backgroundColor:'grey', marginLeft:'30%', marginRight:'30%'}}><a>+ frais de livraison 7dt </a></div>
      <br/>
      <div style={{textAlign:'right', marginRight:'25%' }}>
      <a style={{backgroundColor:'pink'}}>{ttc+7} ttc</a></div><hr/>
      <div  style={{textAlign:'center'}} >
        <Formulaire/>
      <button style={ObjectStyle}>Confirmer La commande</button><br/>
      <button style={ObjectStyl} onClick={() => {navigate('/boutique');dispatch(CleanAll());dispatch(CleanAllFacture()) }}>Annuler la commande</button></div>
      


    </div>
    <hr/>
    <Footer/>
    </>
  )
}
