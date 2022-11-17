import React from 'react'

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
			  <input type="number" placeholder="en cm" style={{width:'95%'}}/>
			</div>
			<br/>
			<div >
			  <label  >
                <a style={styleForm}>Votre poid</a></label><br/>
			  <input type="number"  placeholder="en kg" style={{width:'95%'}}/>
			</div>
			<br/>
		  </form>
          <button style={buttonStyle} >Calculer votre IMC</button>
          <a style={{visibility:'hidden'}}>hello</a>
        </div>
  )
}
