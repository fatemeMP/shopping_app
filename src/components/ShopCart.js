import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//context
import { CardContext } from '../context/CardContextProvider';
//components
import Cart from './shared/Cart';
//css
import styles from './ShopCart.module.css'

const ShopCart = () => {

    const{ state ,dispatch }= useContext(CardContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
               {state.selectItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
          
          
            {
             state.itemsCounter >1 && 
            <div className={styles.payments}> 
                <p><span>total items :</span> {state.itemsCounter }  </p>
                <p><span>total payment:</span> {state.total } $</p>

                <div className={styles.buttonContainer}>
                    <button className={styles.checkout} onClick={()=> dispatch({type:"CHECKOUT"})}> checkout</button>
                    <button className={styles.clear} onClick={()=> dispatch({type:"CLEAR"})}> clear </button>
                </div>
            </div>
            
            }   

            {
                state.checkout &&
                <div className={styles.complete}> 
                    <h3>checkout is successfuly ...</h3>
                    <Link to="/products"> BUY MORE?</Link>
                </div>
            }

            { 
                !state.checkout && state.itemsCounter === 0 &&
                <div className={styles.complete}> 
                    <h3>want to buy?</h3>
                    <Link to="/products">go to shop</Link>
                </div>
            }


        </div>
    );
};

export default ShopCart;