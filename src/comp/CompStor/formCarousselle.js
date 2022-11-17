import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './Carousslle.css'
export default function FormCarousselle() {
    const styleH={textAlign: "left",  paddingLeft: "10vw",paddingTop: "15vw",fontSize:" 4vw", fontFamily: "Lucida Sans Unicode",color: "rgb(44, 26, 7)", marginTop:'42px', marginBottom:'0'}
    const styleDiv={textAlign: "left", paddingLeft: "10vw", fontSize:"1.5vw", fontFamily: "Lucida Sans Unicode", paddingBottom: "14vw", color: "rgb(31, 31, 31)"}
    return (
    <Carousel style={{marginBottom:'-30px'}}>
        <div className="arriereplan1" style={{backgroundImage:'url(/image/tURK.png)'}}>
						<h6 style={styleH}> <b>Nos <a style={{color:"rgb(76, 118, 34)"}}>b</a>elles <a style={{color: "rgb(233, 16, 67)"}}>t</a>raditions </b></h6>
						<div style={styleDiv} >ils sont basés sur des généreuses quantités <br/>
							de chocolat, de fruit sec, de fruit de sésant, <br/>
							  de divers styles de crèmes ,etc... </div>
		</div>
         <div className="arriereplan1"  style={{backgroundImage:'url(/image/helthy.png)'}}>
						<h6 style={styleH}> <b>Nos <a style={{color:"rgb(76, 118, 34)"}}>r</a>ecettes <a style={{color: "rgb(233, 16, 67)"}}>h</a>ealthy </b></h6>
						<div style={styleDiv}>
                        ils sont basés sur des généreuses quantités <br/>
	                de chocolat, de fruit sec, de fruit de sésant, <br/>
	                 de divers styles de crèmes ,etc... 
                        </div>
         </div>
         <div className="arriereplan1"  style={{backgroundImage:'url(/image/Sheese.png)'}}>
						<h6 style={styleH}> <b>Nos <a style={{color:"rgb(76, 118, 34)"}}>r</a>ecettes <a style={{color: "rgb(233, 16, 67)"}}>h</a>ealthy </b></h6>
						<div style={styleDiv}>
                        ils sont basés sur des ingrédients healthy <br/>
							telque les dattes, les fruits sec, des granulas, <br/>
							  du bssissa parfois, avec le min du sucre,etc...
                        </div>
		</div>
         <div className="arriereplan1"  style={{backgroundImage:'url(/image/GAT.png)'}}>
						<h6 style={styleH}> <b>Nos <a style={{color:"rgb(76, 118, 34)"}}>G</a>atteaux <a style={{color: "rgb(233, 16, 67)"}}>A</a>nniversaire </b></h6>
						<div style={styleDiv}>
                        la composition des génoises sont aux choix, mais généralement <br/>
							 notre produit est basé sur une génoise vanille ou chocolat <br/>
							 et génoise fruit sec, avec une créme chocolat ou noisette
                        </div>
					</div>
		
                       
    </Carousel>
  )
}
