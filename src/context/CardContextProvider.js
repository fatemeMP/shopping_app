import React,{createContext, useReducer} from 'react';
 
const initialState = {
    selectItems : [],
    itemsCounter :0,  // majmo itemhaye entekhabi karbar
    total : 0,      //majmoe gheymat mahsolat
    checkout : false,
}

const sumItems = items =>{           // dar khate 30 be vorodimon ke hmon items hast maghadire daroon select itemso midim
   const itemsCounter = items.reduce ((total, product) => total + product.quantity , 0) ; //majmoe tamame mahsolat
    const total = items.reduce ((total ,product) => total + product.price * product.quantity , 0).toFixed(2);
    return {itemsCounter , total}
}

const cartReducer = (state, action) => { 
  switch(action.type){ 
 //وقتی سبد خرید خالی است
      case "ADD_ITEM" :
    if(!state.selectItems.find(item=> item.id === action.payload.id)){
        state.selectItems.push({
            ...action.payload,         //etelaat mahsoli ke karbar click karde rosh
            quantity :1
        })
    }
    
    return{
        ...state,
        selectItems : [...state.selectItems], //etelate state ghadimi hefz she va mahsole jadidi ke karbar click karde ezafe she
        ...sumItems(state.selectItems),
        checkout : false,
    }
    //وقتی میخواهیم ایتم را حذف کنیم 
        case "REMOVE_ITEM" :
            const newselectItems = state.selectItems.filter(item => item.id !== action.payload.id); //hameye item ha ro begir joz uni ke karbar click karde
            return{
                ...state,
                selectItems : [...newselectItems],
                ...sumItems(newselectItems)
            }
    //وقتی  میخوام یکی به ایتم اضافه کنیم 
        case "INCREASE":
            const indexI = state.selectItems.findIndex(item =>item.id === action.payload.id);
            state.selectItems[indexI].quantity++;
            return{
                ...state,
                ...sumItems(state.selectItems)
            }
    // وقتی میخوایم یکی از ایتم ها کم کنیم
        case "DECREASE":
            const indexD = state.selectItems.findIndex(item => item.id === action.payload.id);    
            state.selectItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectItems)
            }
    //وقتی سبد خرید را پرداخت کرده
        case "CHECKOUT" :
            return {
                selectItems : [],
                itemCounter :0,
                total : 0,
                checkout : true,
            }
    //وقتی میخواهیم ایتم های انتخاب شده پاک شوند
        case "CLEAR":
            return{
                selectItems : [],
                itemCounter :0,
                total : 0,
                checkout : false,
            }
        
        default:
            return state;
        }
}                                                         

export const CardContext = createContext(); 

const CardContextProvider = ({children}) => {

    const [state , dispatch] = useReducer (cartReducer, initialState);
   
    return (
        <CardContext.Provider value={{state , dispatch}}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;