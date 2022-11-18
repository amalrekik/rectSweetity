import React from 'react'
import { useState } from 'react'
export default function Imc() {
    const styleImc={background:'white', 
    textAlign: 'center',
    boxShadow: '3px 3px 5px white',
    border: 'solid 1px',
    borderColor: 'rgb(169, 168, 168)',
    paddingTop: '40px',
    paddingBottom:'2vw',
    background:'white', 
    marginLeft:'10%', 
    marginRight:'10%'}
    const styleForm={
        fontSize: '1.3vw',
        color:'rgb(63, 63, 63)',
        padding: '1vw',
        fontWeight: '400'
    }
    const buttonStyle={textAlign:'center', 
    background:'rgb(233, 16, 67)', 
    border:'0', 
    color:'white', 
    fontSize:'2vw',
    borderRadius:'5px', 
    paddingLeft:'10vw',
    paddingRight:'10vw',
    paddingTop:'2px',
    paddingBottom:'2px'}
    const[taille,  setTaille]=useState(0)
    const [poid, setPoid]=useState(0)
    const [appar, setAppar]=useState(false)
    const [Imc, setImc]=useState(0)
    const handleImc =()=>{
      setAppar(current => !current);
      setImc((parseInt(poid)/((parseInt(taille)/100)**2)).toFixed(2))}
   
 
 
    return (
    <div style={styleImc}>
        <h5  style={{color:'rgb(70, 42, 12)',textDecoration: 'none',fontSize:  '2.5vw',fontWeight: '500'}}>
			Votre 
			<a style={{color:'rgb(113, 178, 48)',fontSize:  '2.5vw',fontWeight: '500'}}>I</a>
			<a style={{color:'rgb(70, 42, 12)',fontSize:  '2.5vw',fontWeight: '500'}}>M</a>
			<a style={{color:'rgb(233, 16, 67)',fontSize:  '2.5vw',fontWeight: '500'}}>C</a> 
		</h5>
        <p style={{fontSize: '1.3vw',color:'rgb(72, 72, 72)',padding: '1vw',fontWeight:' 400'}}>
			L’indice de masse corporelle (IMC) permet d’évaluer rapidement votre corpulence 
			simplement avec votre poids et votre taille, quel que soit votre sexe. Calculez 
			rapidement votre IMC et découvrez dans quelle catégorie vous vous situez.<br/><br/>

L’indice de masse corporelle (IMC) est le seul indice validé par l’Organisation mondiale 
de la santé pour évaluer la corpulence d’un individu et donc les éventuels risques pour 
la santé. L’IMC permet de déterminer si l’on est situation de maigreur, de surpoids ou 
d’obésité par exemple.<br/><br/>

En anglais on parle de <b>BMI</b>  pour Body Mass Index.</p>


<form style={{paddingLeft:"15%", paddingRight:"15%", paddingBottom: "0.5vw"}}>
			<div >
			  <label >
                <a style={styleForm}>Votre taille</a></label><br/>
			  <input 
        type="number" 
        placeholder="en cm" 
        style={{width:'95%'}}
        onChange={(e) => setTaille(e.target.value)}/>
			</div>
			<br/>
			<div >
			  <label  >
                <a style={styleForm}>Votre poid</a></label><br/>
			  <input 
        type="number"  
        placeholder="en kg" 
        style={{width:'95%'}}
        onChange={(e) => setPoid(e.target.value)}/>
			</div>
			<br/>
		  </form>
          <button style={buttonStyle} onClick={handleImc}>Calculer votre IMC</button>
          {(appar==true || Imc>0)?(<div style={{paddingTop:'2vw'}}>
            <h5  style={{color:'rgb(70, 42, 12)',textDecoration: 'none',fontSize:  '2.5vw',fontWeight: '500'}}>
			Votre 
			<a style={{color:'rgb(113, 178, 48)',fontSize:  '2.5vw',fontWeight: '500'}}>I</a>
			<a style={{color:'rgb(70, 42, 12)',fontSize:  '2.5vw',fontWeight: '500'}}>M</a>
			<a style={{color:'rgb(233, 16, 67)',fontSize:  '2.5vw',fontWeight: '500'}}>C</a> 
		</h5>
    <h5>{Imc}</h5>
    <table style={{width:'80%', marginLeft:'10%', marginRight:'10%'}}>
      <thead>
        <tr style={{height:'4vw'}}>
    <th style={{color:'rgb(179, 4, 44)', width:'50%', background:'rgb(173, 171, 171)'}}>Indice de masse corporelle (IMC)</th>
    <th style={{color:"rgb(80, 142, 18)", width:'50%', background:'rgb(173, 171, 171)'}}>Interprétation (d'après l'OMS)</th>

        </tr>
      </thead>
      <tbody>
      <tr style={{background:(Imc<18.5)?'rgb(113, 113, 176)':'white'}}>
       <td>moins de 18,5</td>
       <td>Insuffisance pondérale (maigreur)</td>
      </tr>
      <tr style={{background:(Imc>=18.5 && Imc<=25)?'rgb(163, 217, 62)':'white'}}>
       <td>18,5 à 25</td>
       <td>Corpulence normale</td>
      </tr>
      <tr style={{background:(Imc>25 && Imc<=30)?'rgb(240, 240, 87)':'white'}}>
       <td>25 à 30</td>
       <td>Surpoids</td>
      </tr>
      <tr style={{background:(Imc>30 && Imc<=35)?'rgb(245, 135, 71)':'white'}}>
       <td>30 à 35</td>
       <td>Obésité modérée</td>
      </tr>
      <tr style={{background:(Imc>35 && Imc<=40)?'rgb(217, 62, 103)':'white'}}>
       <td>35 à 40</td>
       <td>Obésité sévère</td>
      </tr>
      <tr style={{background:(Imc>40)?'rgb(220, 19, 19)':'white'}}>
       <td>plus de 40</td>
       <td>Obésité morbide ou massive</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>

</tr>
      </tfoot>
    </table>
            </div>):(<div></div>)}
        </div>
  )
}
