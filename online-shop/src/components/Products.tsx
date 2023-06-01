import React, {useState, useEffect} from "react";
import {Product as ProductType} from '../Product';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState<ProductType[]>([]);

    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1000);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:5000/products')
          const data = await response.json()
          setProducts(data);

        } catch (error) {
          console.log('Error fetching prodcuts: ', error)
        }
      }

      fetchProducts()
    }, [])

    useEffect(() => {
      const filterProducts = () => {
        const filtered = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
        setFilteredProducts(filtered);
      };

      filterProducts();
    }, [products, minPrice, maxPrice])

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value)
      setMinPrice(value);
    }

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value)
      setMaxPrice(value);
    }

    const handleMinPriceBlur = () => {
      if(!minPrice) setMinPrice(0)
      else if(minPrice > maxPrice) setMinPrice(maxPrice)
    }

    const handleMaxPriceBlur = () => {
      if(!maxPrice) setMaxPrice(1000)
    }

    return (
        <>
          <div className='main-container-products'>
            <div className='filter-container'>
              <div className='filter-container-item'>
                <p className='filter-title'><strong>Price</strong></p>
                <div className='filter-container-item-price-range'>
                   <div className='price-input-container'>
                     <span className='price-label'>From</span>
                     <span className='eur-label'>Eur</span>
                     <input type='number'
                            max={1000}
                            className='price-filter-input'
                            value={minPrice}
                            onChange={handleMinPriceChange}
                            onBlur={handleMinPriceBlur}
                      />
                   </div>
                   <div className='price-input-container'>
                     <span className='price-label'>To</span>
                     <span className='eur-label'>Eur</span>
                     <input type='number'
                            max={1000}
                            className='price-filter-input'
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                            onBlur={handleMaxPriceBlur}
                      />
                   </div>
                 </div>
              </div>

              <br/>

              <div className='filter-container-item'>
                <p className='filter-title'><strong>Brand</strong></p>
                <ul className='filter-container-item-brands'>
                  <li className='brand-value'>
                    Logitech
                  </li>
                  <li className='brand-value'>
                    Razer
                  </li>
                  <li className='brand-value'>
                    Corsair
                  </li>
                </ul>
              </div>

            </div>

            <div className='products-container'>
                {products.length > 0 ? (
                filteredProducts.map((product, index) => {
                  return <Product key={index} product={product}/>
                })
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </>
    );
}

export default Products;