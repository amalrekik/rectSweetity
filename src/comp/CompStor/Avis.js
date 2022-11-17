import React from 'react'
import Form from 'react-bootstrap/Form';
export default function Avis() {
    const buttonStyle={textAlign:'center', 
    background:'rgb(176, 8, 47)', 
    border:'0', 
    color:'white', 
    fontSize:'2vw',
    borderRadius:'5px', 
    paddingLeft:'10vw',
    paddingRight:'10vw',
    paddingTop:'2px',
    paddingBottom:'2px'}
  return (

    <div style={{textAlign: "center", background:"rgb(248, 209, 216)",padding: "2vw"}}>
			<img src="./image/R.png" alt="logoamal" width="60px" height="60px" style={{paddingTop: '1vw'}}/> 
            <br/>
			<p style={{fontFamily: 'Lucida Sans Unicode', fontSize: '20px'}}>
			Pour assurer un service rapide et efficace ,<br/> 
			ça nous fait tellement plaisir de recevoir vos avis et vos remarques pertinentes <br/>
		    et de partager avec nous vos photos de nos articles , après la reception <br/>de vos commandes: 
		</p>
        <div style={{marginLeft:'10%', marginRight:'10%', textAlign:'left'}}>
            <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:'rgb(176, 8, 47)', fontSize:'2vw', paddingLeft:'2vw'}}>address mail</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{color:'rgb(176, 8, 47)', fontSize:'2vw', paddingLeft:'2vw'}}>Commentaire</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
        <Form.Group controlId="formFile" className="mb-3" >
        <Form.Label style={{color:'rgb(176, 8, 47)', fontSize:'2vw', paddingLeft:'2vw'}}>Vos photos</Form.Label>
        <Form.Control type="file" multiple />
      
        </Form.Group>
        </Form><div style={{textAlign:'center'}}>
        <button style={buttonStyle}>Envoyez vos avis</button></div>
        </div>
    </div>
  )
}
