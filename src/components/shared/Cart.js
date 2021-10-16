import React,{useContext} from 'react';
//context
import { CardContext } from '../../context/CardContextProvider';
//functions
import { shorter } from '../../helper/function';
//icons
import trash from '../../assets/icons/trash.svg';
//css
import styles from './Card.module.css';

const Cart = (props) => {
    
  const {dispatch} = useContext(CardContext);
  const {image ,title ,price , quantity} = props.data;

    return (
        <div className={styles.container }>
            <img  className={styles.productImg} src={image} alt="product" />
            <div className={styles.data} >
                <h3>{shorter(title)}</h3>
                <p>{price} $</p>
                </div>
                <div>
                     <span className={styles.quantity} >{quantity}</span>
                </div>

                <div className={styles.btnContainer} >
                    { quantity >1 ? <button className={styles.btn} onClick={()=> dispatch({type :"DECREASE" , payload : props.data})}> - </button> :
                      <button  className={styles.btn} onClick={()=> dispatch({type :"REMOVE_ITEM" , payload : props.data})}><img src={trash} alt="remove" style={{width:"20px"}}/></button>
                    }
                    <button onClick={()=> dispatch({type: "INCREASE" ,payload :props.data})}> + </button>
                </div>

           
        </div>
    );
};

export default Cart;