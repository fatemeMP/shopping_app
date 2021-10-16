import {Route,Switch,Redirect} from 'react-router-dom';
//componenets
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
//context
import ProductContextProvider from './context/ProductContextProvider'
import CardContextProvider from './context/CardContextProvider';



const App = () => {
  return (
    <div>
      
        <ProductContextProvider>
           <CardContextProvider>
             <Navbar/>
              <Switch>
                <Route path="/products/:id" component={ProductsDetails}/>
                <Route path="/products" component={Store}/>
                <Route path="/cart" component={ShopCart}/>
                <Redirect to="/products"/>
              </Switch>
           </CardContextProvider>
        </ProductContextProvider> 
     
    </div>
  );
};

export default App;