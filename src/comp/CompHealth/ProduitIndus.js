import React from 'react'
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function ProduitIndus() {
    const navigate = useNavigate();
  return (
    <div style={{background:'grey'}}>
    <div className='flex-containerr1'>
       
        <div className='indus' >
            <div style={{paddingLeft:'2vw'}} >
        <div style={{ color: 'rgb(70, 42, 12)', textDecoration: 'none', fontSize: "3vw", 
              fontFamily: "roboto", background:'white'}}>
                        Produits industri
                        <a style={{ color: 'rgb(113, 178, 48)' }}>e</a>
                        <a style={{ color: 'rgb(70, 42, 12)' }}>l</a>
                        <a style={{ color: 'rgb(233, 16, 67)' }}>s</a>
                    </div>

    <p  style={{fontSize: '1.3vw', color:'rgb(63, 63, 63)',padding: '2.5px',fontWeight:'400' }}>
	De nombreux produits industriels sont élaborés à partir d'ingrédients néfastes pour la santé. Par exemple, il arrive souvent que ces produits soient riches en sucre. Le sucre sert en effet de conservateur et d'exhausteur de goût.<br/><br/>

	De plus, les graisses utilisées dans ces produits sont souvent de mauvaise qualité car peu chères (acides gras trans et saturés).<br/><br/>
	
	Enfin, on constate souvent que ces produits sont plus salés que les produits faits maison. Dans le cadre d'un régime alimentaire, il semble alors important de limiter la consommation des produits industriels.
	
	Quelques astuces pour limiter la nourriture industrielle :<br/><br/>
</p>

<ul style={{fontSize: "1.3vw",color:"rgb(63, 63, 63)",padding: '1vw',fontWeight: '400'}}>
		<li>faire ses biscuits et gâteaux maison ; oubien commander vos desserts home made de 
        <b  onClick={() => navigate('/boutique')} style={{color:"rgb(70, 42, 12)", fontSize: "1.5vw"}}>SweeT
        <a style={{color:"rgb(113, 178, 48)"}}>i</a>
        <a style={{color:"rgb(70, 42, 12)"}}>t</a>
        <a style={{color:"rgb(233, 16, 67)"}}>y</a>
         </b></li>
		<li>cuisiner en plus grosse quantité et conserver les restes au congélateur pour un repas pressé ;</li>
		<li>préparer soi-même son repas du midi ;</li>
		<li>bien lire les étiquettes des aliments ;</li>
		<li>cuisiner des plats simples à base d'aliments bruts (fruits et légumes, viandes maigres, etc.) ;</li>
	
	</ul>
                    </div>
        </div>
    <div className='pub'><div style={{background:'rgb(59, 111, 8)', marginRight:'10vw',borderRadius:'10px', height:'52vw'}}>
        <img src="./image/datefarce1.jpg" alt='DATE' width="100%"/> 
        <div style={{background:'white', textAlign:'center'}}>
         <img src="./image/R.png" alt='sweetity' width="10%" /> 
         <b style={{color:"rgb(70, 42, 12)", fontSize: "1.9vw",fontWeight: '400'}}>SweeT
         <a style={{color:"rgb(113, 178, 48)"}}>i</a>
         <a style={{color:"rgb(70, 42, 12)"}}>t</a>
         <a style={{color:"rgb(233, 16, 67)"}}>y</a>
         </b>   
        </div>
        <div className='flex-container5'>
            <div className='mail'>
            <img src="./image/MAIL.png" alt='mail' width="100%"/>   
            </div>
            <div className='ecrit'>
                <p style={{fontSize:'1.5vw', color:'white'}}>Bien manger c'est prendre soin de sa santé. 
                    Recevez nos offres de produits healthy ou 
                    gourmand sur vos mails</p>
            </div>
            
        </div>
        <hr style={{color:'white', marginTop:'0.5vw'}}/>
        <div style={{color:'white', fontSize:'1.5vw', textAlign:'center'}}>
        <Form >
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3" style={{marginBottom:'-10vw', paddingTop:'-15vw'}}>
          <Form.Check
            inline
            label="Healthy"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            style={{marginBottom:'-5vw'}}
          />
          <Form.Check
            inline
            label="Gourmand"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            style={{marginBottom:'-5vw'}}
          />
         
        </div>
      ))}
      <Row >
      <Col xs="auto" style={{margin:'1vw',marginRight:'-20px', marginTop:'-0.8vw'}}>
        <Form.Control type="email" placeholder="Enter email" style={{height:'2.4vw',fontSize:'1.2vw', borderRadius:'0', width:'21vw'}}/>
        </Col>
        <Col xs="auto" style={{marginTop:'-1vw'}}>
        <button style={{padding:'0.2vw', border:'0'}}>OK</button>
        </Col>
        </Row>
    </Form>

        </div>
        <p style={{fontSize:'1.2vw', color:'white', paddingLeft:'1vw'}}>Et visiter 
        <a   onClick={() => navigate('/boutique')}  style={{color:"rgb(70, 42, 12)", }}> Notre boutique </a> 
        pour découvrire tous nos produits 'home made'</p>
    </div>

            
            </div>

    </div>
    
    </div>
  )
}
