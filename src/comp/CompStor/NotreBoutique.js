import React from 'react'

export default function NotreBoutique() {
    
    const titre= {marginTop: "5px", fontSize: "38px", fontFamily: "roboto",textDecoration: "none"  }
    const styleob1={color:"rgb(53, 32, 9)",textDecoration: "none" ,fontSize:  "50px"}
    const styleob2={color:"rgb(113, 178, 48)",fontSize:  "50px"}
    const styleob3={color:"rgb(53, 32, 9)",fontSize: " 50px"}
    const styleob4={color:"rgb(233, 16, 67)",fontSize:  "50px"}
    return (
    <div>
<div >
			<div style={{backgroundColor: "white "}}>
				<img src="./image/R.png" alt="logoamal" width="60px" height="60px" style={{paddingTop: "1vw"}}/> <br/>
		        <div style={titre}>
			     <a style={styleob1}>Notre Bouti<b 
                 style={styleob2}>q</b><b 
                 style={styleob3}>u</b><b 
                 style={styleob4}>e</b> </a></div>
		   </div>
		</div>

    </div>
  )
}
