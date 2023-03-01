import React from 'react'
import { ButtonIcon, Container } from '../../utils/Container'
import  IMG1  from "../../assets/div.svg";
import  IMG2  from "../../assets/div1.svg";
import  IMG4  from '../../assets/div2.svg';
import { AiOutlineArrowRight } from "react-icons/ai";
import  IMG5  from "../../assets/div.svg";
import "./Featured.scss"


const Featured = () => {
  return (
    <section>
        <Container>
            <div className="featured__wrapper d-flex ">
                <div className='featured__wrapper__info'>
                    <p>Featured</p>
                    <img src={IMG4} alt="k" />
                    <h4>Deals made easy all year long.</h4>
                    <p>Free shipping. Best prices.</p>
                    <ButtonIcon className="buttonicon featured__wrapper__info__button" title="Get your thing" icon={<AiOutlineArrowRight/>}/>
                </div>
                <div className='ms-auto'>
                <img src={IMG1} alt="k" />
                </div>
                <div className='ms-2'>
                <img src={IMG2} alt="k" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Featured