import React from 'react';
import {Product as ProductType} from '../Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

interface ProductProps {
    product: ProductType
}

const Product: React.FC<ProductProps> = ({product}) => {
    return (
        <>
          <div className='products-container-item'>
                <div className='image-container'>
                  <img src={product.img_url} alt={product.title} />
                  <a className='image-container-title'>{product.title}</a>
                </div>
                  
                <p className='products-container-item-price'>{`${product.price} €`}</p>
                <div className='cart-btn-container'>
                  <button className='add-to-cart-btn'>Add to cart</button>
                  <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/>
                </div>
            </div>
        </>
    );
}

export default Product;