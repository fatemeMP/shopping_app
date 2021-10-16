import React from 'react';
import { Link } from 'react-router-dom';
//CONTEXT
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';

const ProductsDetails = (props) => {

  const id = props.match.params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1]; //data ma be sorat array abject ast va dar arayeha deta 1 index 0 darad,pas index =id -1
   
  const {image,price,description,category,title} = product;
  
  return (
        <div>
            <img src={image} alt="product"/>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p><span>category :</span> {category}</p>
                        <div>
                            <span> {price} $</span>
                            <Link to="/products"> back to store</Link>
                        </div>
                </div>
        </div>
    );
};

export default ProductsDetails;