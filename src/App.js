import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from './res/logo.png'
import logofooter from './res/logofooter.png'
function App() {
  return (<>
    <div style={{ backgroundColor: '#f8f9fadb' }}>
      <img style={{ width: '28%', marginLeft: '36%' }} src={logo} alt='logo' />
      < Form style={{ marginTop: '5%', marginRight: '20%', marginLeft: '20%' }}>
        <h1 style={{ textAlign: 'center' }}>Créez votre compte</h1>
        <Form.Group controlId="formBasicPassword">
          <Form.Label> Nom et prénom </Form.Label>
          <Form.Control type="text" placeholder='Entrez votre nom et prénom' />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>L'adresse E-mail</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre email" />
          <Form.Text className="text-muted">

            Nous ne partagerons jamais votre e-mail avec qui que ce soit.
      </Form.Text>
        </Form.Group>


        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Entrez votre Mot de passe" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirmer votre mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Entrez votre mot de passe" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Envoyez
  </Button>

      </Form >
      <img style={{ width: '98%' }} src={logofooter} alt='logofooter' />
      <p style={{ textAlign: 'center' }}>Copyright © 2020 - Tunisian Campers</p>
    </div>
  </>

  )
}

export default App;
