import React from 'react'
import { Container,Image } from 'react-bootstrap';
import nbalogo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container>

    <Image width="200px" src={nbalogo}/>
    <h1 className='display-4 fw-bold font-monospace my-2'>NBA Legends</h1>

    </Container>
  )
}

export default Header