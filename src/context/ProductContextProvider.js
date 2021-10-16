import React , {useEffect,useState, createContext} from 'react';
//API
import { getProducts } from '../services/api';

export const ProductsContext = createContext();

 const ProductContextProvider = ({children}) => {

const[products, setProducts]=useState([]);

    useEffect( ()  => {
        const fetchAPI = async () => {     //chon functioni estfde shode dar func jadidmoon async ast fun jadidmom ham bayd async bashad.
            setProducts(await getProducts());
        }

        fetchAPI();
                     },[]);

    
   
    return (
        <div>
            <ProductsContext.Provider value={products}>
                {children}
            </ProductsContext.Provider>

        </div>
    );
};

export default ProductContextProvider;