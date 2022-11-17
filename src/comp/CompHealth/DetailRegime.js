import React from 'react'
import dat from './regime.json'
import {useNavigate, useParams} from "react-router-dom";
export default function DetailRegime() {
    const {titreRoute} = useParams();
    const navigate = useNavigate();
    const found=dat.find(element => element.titreRoute==titreRoute)
    const buttonStyle={textAlign:'center', 
    background:found.color, 
    border:'0', 
    color:'white', 
    fontSize:'2vw',
    borderRadius:'5px', 
    paddingLeft:'10vw',
    paddingRight:'10vw',
    paddingTop:'2px',
    paddingBottom:'2px', 
    marginBottom:'20px',
    marginTop:'10px'}
    
  return (
    <div style={{marginTop:'80px', marginLeft:'10%', marginRight:'13%'}}>
        <h1 style={{background:found.color, color :'white'}}>{found.name}</h1>
        <div style={{paddingLeft:'5%'}}>
        <h3 style={{color:'rgb(70, 42, 12)'}}>Le petit déjeu<a style={{color:"rgb(80, 142, 18)"}}>n</a>e<a style={{color:'rgb(179, 4, 44)'}}>r</a></h3>
        <ul>
            {found.list1.map((e,index)=>{return <li key={index}>{e}</li>})
            }
        </ul>
        <h4 style={{color:'rgb(70, 42, 12)'}}>Le goû<a  style={{color:"rgb(80, 142, 18)"}}>t</a>e<a style={{color:'rgb(179, 4, 44)'}}>r</a></h4>
        <ul>
            {found.goute1.map((e,index)=>{return <li key={index}>{e}</li>})
            }
        </ul>
        <h3 style={{color:'rgb(70, 42, 12)'}}>Le déjeu<a style={{color:"rgb(80, 142, 18)"}}>n</a>e<a style={{color:'rgb(179, 4, 44)'}}>r</a></h3>
        <ul>
            {found.list2.map((e,index)=>{return <li key={index}>{e}</li>})
            }
        </ul>
        <h4 style={{color:'rgb(70, 42, 12)'}}>Le goû<a style={{color:"rgb(80, 142, 18)"}}>t</a>e<a style={{color:'rgb(179, 4, 44)'}}>r</a></h4>
        <ul>
            {found.goute2.map((e,index)=>{return <li key={index}>{e}</li>})
            }
        </ul>
        <h3 style={{color:'rgb(70, 42, 12)'}}>Le dî<a style={{color:"rgb(80, 142, 18)"}}>n</a>e<a style={{color:'rgb(179, 4, 44)'}}>r</a></h3>
        <ul>
            {found.list3.map((e,index)=>{return <li key={index}>{e}</li>})
            }
        </ul>
        </div>
        <div style={{textAlign:'center'}}>
            <h4 style={{color:'rgb(70, 42, 12)'}}>-De<a style={{color:"rgb(80, 142, 18)"}}>t</a>o<a style={{color:'rgb(179, 4, 44)'}}>x</a>-</h4>
        <table style={{width:'100%'}}>
        <thead>
<tr >
    <th style={{color:'rgb(179, 4, 44)', width:'50%', background:'rgb(173, 171, 171)'}}>Timing</th>
    <th style={{color:"rgb(80, 142, 18)", width:'50%', background:'rgb(173, 171, 171)'}}>Composition</th>
</tr>
        </thead>
        <tbody>

    {found.listDetox.map((e, index)=>{return <tr key={index}>
    <td>{e.timing}</td>
    <td>{e.titre}</td>
   </tr> })}

        </tbody>
        <tfoot>
<tr>
    <td></td>
    <td></td>
</tr>
        </tfoot>
        </table>
        <button  style={buttonStyle} onClick={() => navigate('/healthy')}>Liste Régime</button>
        </div>
    </div>
  )
}
