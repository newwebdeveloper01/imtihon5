import React from 'react'
import { NavLink } from 'react-router-dom';
import { shortenProductDescrption } from '../../helpers/product_content';
import {FiHeart} from "react-icons/fi";

const Product = ({product}) => {
    // console.log(product);
  return (
<article className='productt'>
   
                        <div className="productt__top">
                            <NavLink className="transarent__link" to={`/product/${product.id}`}>
                                { product.images.length>0 && product.images[0].startsWith("https://") ?
                                <img className='productt__top__images' src={product.images} alt="rasms" />
                                :
                                <img className='productt__top__images' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="rasm" />
                                }
                               
                            </NavLink>
                        </div>
                        <div className="productt__bottom">
                            <div className='productt__bottom__info'>
                            <p>{shortenProductDescrption("", 10, product.description)}</p>
                            <strong>${product.price} </strong>
                            </div>
                            <FiHeart/>
                        </div>
                    </article>
  )
}

export default Product