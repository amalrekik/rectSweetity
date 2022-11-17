import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import gouv from './Gover.json'
export default function Formulaire() {
  return (
    <div style={{marginLeft:'30%', marginRight:'30%', fontSize:'1vw'}}>
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Entrer email" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="name" placeholder="Nom" />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="26 av Hedi Cheker" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Route Manzel cheker km 1.5" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Gouvernorat</Form.Label>
        <Form.Select defaultValue="Choisissez votre gouvernorat">
          <option>Gouvernorat</option>
          {gouv.map((e)=>{return <option key={e.id}>{e.Gov}</option>})}
          
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Code postale</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

  </Form>
  </div>
  )
}
