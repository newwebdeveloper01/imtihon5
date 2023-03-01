import React from 'react'
import rasm from "../../assets/s-l1200.webp.svg";
import { Container } from '../../utils/Container';
import "./Baner.scss"
const Baner = () => {
  return (
    <div className='baner__wrapper'>
       <Container>
      <div className="baner">
      <h2>Featured Event</h2>
        <div className='baner__img'>
        <img src={rasm} alt="fvr"  />
        </div>
        <p>Up to 60% off Apple tech</p>
        
        <span>Save on AirPods, iPhones, and more.</span>
      </div>
       </Container>
    </div>
  )
}

export default Baner