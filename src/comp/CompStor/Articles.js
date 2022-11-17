import React, { useState } from 'react'
import ArticleItem from './articleItem'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { listeCommande} from '../redux'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import './Articles.css'
export default function Articles() {
  const dataa = useSelector((state) => state.boutique)
  const art = useSelector((sta) => sta.commande);
  const dispatch = useDispatch();
  const totalFacture= art.reduce((a,v) =>(v.quantite==0)?a=a : a = a + v.prix , 0 );
  const [isActive, setIsActive] = useState(false);
  const [isActiv, setIsActiv] = useState(false);
  const navigate = useNavigate();
  const handleColorGour = () => { setIsActiv(current => !current);setIsActive(false) };
  const handleColorHealth = () => { setIsActive(current => !current);setIsActiv(false) };
  const [serch, setsecrch]=useState("")
  
  const handleSerch=(e)=>{
    let value=e.target.value;
    value.length<2?(setsecrch("")):setsecrch(value)
};

  return (
    <div  style={{ backgroundColor: "white " }}>
      <div className='position'>
        
      <Form style={{marginLeft:'12%'}}>
        <Row>
        <Col xs="auto" style={{marginBottom:'3px', borderRadius:'3px',  width:'40px'}}>
      <Form.Label >
      <img src='./image/search.png' alt='recherch' width="35px" style={{marginLeft:'-8px'}} />
        </Form.Label></Col>
      <Col >
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                titre
              </Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="chercher l'article souhaité"
                onChange={handleSerch}
              />
              </Col>
              </Row>
            </Form>


        <button className='buttonH' style={{backgroundColor:isActive? 'grey':''}}  onClick={handleColorHealth}>Healthy</button>
        <button className='buttonG' style={{backgroundColor:isActiv? 'grey':''}}  onClick={handleColorGour}>gourmand</button>
      </div>
      <div className="flex-container7" id='articles'>
        {dataa.filter((y)=>{
    return y.titreDetail.toLowerCase().startsWith(serch.toLowerCase())

}).map((e, index) => {
          return (<div key={e.id} style={{baground:'white', opacity:(e.regime=="gourmand" && isActive) ? '0.2' : '1', border: " solid 1px" }}>
            <div style={{opacity:(e.regime=="healthy" && isActiv) ? '0.2' : '1'}}>
            <ArticleItem list={e} />
            <div style={{ marginTop: '-20px' }}>
              <button onClick={() => navigate(`/boutique/${e.titreRouter}`)} className='buttonCommander'> Detail</button>
              <button onClick={() => {dispatch(listeCommande({ id: e.id, prix: e.prix, titre: e.titre, quantite: e.quantite, regime:e.regime })) }} className='buttonDetail'><a> Commander</a></button>
            </div>
            </div>
          </div>)
        })}
      </div>
      <button onClick={() =>
        {navigate(`/boutique/facture`)
          }} className="buttonTotal">Total {totalFacture} dt/Ajouter au Panier</button>
    
    </div>
  )
}
