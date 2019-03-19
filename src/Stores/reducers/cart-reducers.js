import Item1 from '../../assets/item1.jpg';
import Item2 from '../../assets/item2.jpg';
import Item3 from '../../assets/item3.jpg';
import Item4 from '../../assets/item4.jpg';
import Item5 from '../../assets/item5.jpg';
import Item6 from '../../assets/item6.jpg';

import * as actionTypes from '../actions/actiontypes';


const initialState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1100,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:800,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:1200,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:2600,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1600,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:900,img: Item6}
    ],
    addedItems:[],
    total: 0
}


const addToCart = (state, action)=> {
    let addedItem = state.items.find(item=> item.id === action.id)
    //check if the action id exists in the addedItems
   let existed_item= state.addedItems.find(item=> action.id === item.id)
   if(existed_item){
        addedItem.quantity += 1 
        return{...state,total: state.total + addedItem.price}
    }
    else{
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price 
        
        return{
            ...state,
            addedItems: [...state.addedItems, addedItem],
            total : newTotal
        }
        
    }
}

const cartReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
      case actionTypes.ADD_TO_CART: 
        return addToCart(state, action); 
      default:
        return state;
    }
  };


  export default cartReducer;