import React from 'react'
import data from './boutique.json'
import { useNavigate, useParams} from "react-router-dom";
export default function Detail() {
    const styleIngredient={
        textAlign:"left" ,
        fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
         fontSize: "1.7vw",
        paddingLeft:'10%'}
    const boutonStyle={
        fontSize: "2vw", 
        paddingLeft:"10vw",
        paddingRight:"10vw",
        paddingTop:'10px',
        paddingBottom:'10px'
    }
    const navigate = useNavigate();
    const {titreRouter} = useParams();
    const found=data.find(element => element.titreRouter==titreRouter)
  return (
    <div style={{backgroundColor:'rgb(218, 218, 218)'}}>
    <div style={{margin:'10%', marginTop:'80px', paddingBottom:'2%', marginBottom:'0'}}>
    
    <div style={{textAlign:'center'}}><img src={found.imgRouter} alt='img' width="80%" /></div>
    <div style={{fontSize:"50px", color:'rgb(53, 32, 9)'}}><b style={{color:'rgb(189, 11, 52)'}}>{found.titreDetail[0]}</b><b>{found.titreDetail.slice(1)}</b></div>
    <hr/>
    <p style={styleIngredient}> Notre <a style={{color:'rgb(189, 11, 52)'}}>{found.titreDetail}</a> est composé par:</p>
    <ul style={styleIngredient}>
        {found.ingredient.map((e,index)=>{return (<li key={index}>{e}</li>)})}
    </ul>
    <div style={{textAlign:'center'}}>
    <button onClick={() => navigate('/boutique')} style={{paddingLeft:'0px', paddingRight:'0',border: '0', backgroundColor:'rgb(218, 218, 218)'}}><a href='#articles' style={boutonStyle}>Revenir à la boutique</a></button></div></div>
  </div>)
}
