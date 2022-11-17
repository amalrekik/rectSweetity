import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RegimeItem from './RegimeItem';
import dat from './regime.json'
export default function Regime() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div style={{textAlign:'center'}}>
         <img src="./image/R.png" alt='LOGO' width="60px" style={{marginTop:'-80px'}}/>
         <div className='siteName'>
                    <div style={{ color: 'rgb(70, 42, 12)', textDecoration: 'none', fontSize: "38px", 
              fontFamily: "roboto", marginTop:'-30px'  }}><b>
                        Régimes alimentai
                        <a style={{ color: 'rgb(113, 178, 48)' }}>r</a>
                        <a style={{ color: 'rgb(70, 42, 12)' }}>e</a>
                        <a style={{ color: 'rgb(233, 16, 67)' }}>s</a></b>
                    </div>
                    
                </div>
        <Carousel activeIndex={index} onSelect={handleSelect} style={{background:'white',marginTop:'0px'}}>
      {dat.map((e,index)=>{return <Carousel.Item  key={index}> <RegimeItem  regime={e}/> </Carousel.Item>})}
    </Carousel>
    </div>
  )
}
