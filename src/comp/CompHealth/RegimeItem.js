import React from 'react'
import { useNavigate } from "react-router-dom";
export default function RegimeItem(props) {
    const navigate = useNavigate();
    const { regime } = props
    const styleCarousselle={marginRight:'10%', backgroundColor:'rgb(208, 206, 206)',marginLeft:'10%', marginTop:'2px', height:'350px'};
    const buttonStyle={textAlign:'center', 
    background:regime.color, 
    border:'0', 
    color:'white', 
    fontSize:'2vw',
    borderRadius:'5px', 
    paddingLeft:'10vw',
    paddingRight:'10vw',
    paddingTop:'2px',
    paddingBottom:'2px'}
    return (
    <div style={styleCarousselle}>
<img src={regime.image} alt={regime.name}  style={{marginTop:'0', width:'10vw', paddingTop:'20px'}}/>
<h1 style={{color:regime.color}}>{regime.name}</h1>
<p>{regime.description}</p>
<button style={buttonStyle}  onClick={() => navigate(`/healthy/${regime.titreRoute}`)}>Detail Régime</button>
    </div>
  )
}
