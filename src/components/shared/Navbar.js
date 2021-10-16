import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//contect
import { CardContext } from '../../context/CardContextProvider';
//icons
import basket from  '../../assets/icons/shop.svg'
//css
import styles from './Navbar.module.css'


const Navbar = () => {

    const {state} = useContext(CardContext);

return (
    
    <div className={styles.mainContainer}> 
        <div className={styles.container}>
            <Link className={styles.productLink} to="/products">Products</Link>
            <div className={styles.iconContainer}>
           <Link to ="/cart"> <img src={basket} alt="shop"/> </Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    </div> 
    );
};

export default Navbar;