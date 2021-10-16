const shorter = (title) =>{
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;

}

// mahsole morede nazar toye sabade kharid hast ya na
const isInCart = (state, id) => {
    const result = !!state.selectItems.find( item => item.id === id)
    return result;
}

//baraye shemordane tedade mahsolate daroon sabad kharid
 const quantityCount =(state ,id ) =>{
     
    const index = state.selectItems.findIndex(item => item.id === id)
   
    if(index === -1){      //yani kalaye morede nazar dar sabade kharid nist
        return false;
    }else{
        return state.selectItems[index].quantity;
    }
 }





export {shorter , isInCart , quantityCount};