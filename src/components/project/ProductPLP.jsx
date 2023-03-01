import React from 'react'
import { NavLink } from 'react-router-dom';
import { shortenProductDescrption } from '../../helpers/product_content';
import {FiHeart} from "react-icons/fi";
const ProductPLP = ({product}) => {
  return (
    <article className='product'>
    <div className="product__top">
        <NavLink className="transarent__link" to={`/product/${product.id}`}>
            { product.images.length>0 && product.images[0].startsWith("https://") ?
            <img className='product__top__images' src={product.images} alt="rasms" />
            :
            <img className='product__top__images' src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="rasm" />
            }
            <h3>{product.title}</h3>
        </NavLink>
    </div>
    <div className="product__bottom">
        <div className='product__bottom__info'>
        <p>{shortenProductDescrption("word", 5, product.description)}</p>
        <strong>${product.price} </strong>
        </div>
        <FiHeart/>
    </div>
</article>
  )
}

export default ProductPLP