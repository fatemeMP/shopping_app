import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//function
import { shorter } from '../../helper/function';
import { isInCart } from '../../helper/function';
import { quantityCount } from '../../helper/function';
//contexts
import { CardContext } from '../../context/CardContextProvider';
//icon
import trash from '../../assets/icons/trash.svg'
//css
import styles from './Product.module.css'



const Product = ({productData}) => {

    const {state ,dispatch} = useContext(CardContext);

    return (
        <div className ={styles.container}>
          <img className={styles.cardImg} src={productData.image} alt="img" style={{width:"200px"}}/>
              <h3>{shorter(productData.title)} </h3>
                 <p><span>price : </span>{productData.price} $</p>
                     <div className={styles.linkContainer}>
                         <Link to={`/products/${productData.id}`}>details</Link>
                     
 
    <div className={styles.Container}>
{quantityCount(state, productData.id) > 1 && <button className={styles.smallbutton} onClick ={() => dispatch({type : "DECREASE" , payload :productData})}> - </button>}
{quantityCount(state, productData.id) ===1 && <button className={styles.smallbutton} onClick ={() => dispatch({type : "REMOVE_ITEM" , payload :productData})}> <img src={trash} alt="remove" /></button>}
  
{quantityCount(state, productData.id) > 0 && <span>{quantityCount(state,productData.id)}</span>  }               

{ isInCart(state , productData.id) ? 
     <button className={styles.smallbutton} onClick = {() =>dispatch({type : "INCREASE" ,payload :productData}) }> + </button>:
     <div className={styles.buttonContainer}>
     <button onClick ={() => dispatch({type:"ADD_ITEM" , payload : productData})}>add to basket</button>
     </div>
} 
</div>
</div>
</div>             
      
    );
};

export default Product;