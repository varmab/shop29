
import {
    GETITEMS_STARTED,
    GETITEMS_SUCCESS,
    GETITEMS_FAILED,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './actions'

let initialCatalogState={
    items:[],
    loading:false,
    error:false
}

export const catalog=(state=initialCatalogState,action)=>{
    switch(action.type){
        case GETITEMS_STARTED:
            return {
                items:[],
                loading:true,
                error:false
            }
        case GETITEMS_SUCCESS:
            return {
                items:action.items,
                loading:false,
                error:false
            }
        case GETITEMS_FAILED:
            return {
                items:[],
                loading:false,
                error:true
            }
        default:
            return state;
    }
}

let initialCartState={
    cartItems:[],
    orderTotal:0
}

export const shop=(state=initialCartState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            var isItemExist=state.cartItems.some((currentItem)=>{
                return currentItem.productid==action.item.productid;
            })

            if(isItemExist==true){ //existing item

                var existingItem=state.cartItems.find((currentItem)=>{
                    return currentItem.productid==action.item.productid;
                });

                var newExistingItem=Object.assign({},existingItem);
                newExistingItem.qty++;

                var cartItemsWithoutExistingItem=state.cartItems.filter((currentItem)=>{
                    return currentItem.productid!=existingItem.productid
                });

                return {
                    cartItems:[
                        ...cartItemsWithoutExistingItem,
                        newExistingItem
                    ],
                    orderTotal:state.cartItems.filter((currentItem)=>{
                                    return currentItem.productid!=existingItem.productid
                                }).reduce((total,item)=>{
                                        return total+item.min_list_price*item.qty
                                },0) + existingItem.min_list_price * existingItem.qty
                }
            }
            else //new item
            {
               action.item.qty=1;
                return {
                    cartItems:[
                        ...state.cartItems,
                        action.item
                    ],
                    orderTotal:state.cartItems.reduce((total,item)=>{
                            return total+item.min_list_price
                    },0) + action.item.min_list_price
                }
            }
        case REMOVE_FROM_CART:
            return {
                cartItems:state.cartItems.filter((currentItem)=>{
                                return currentItem.productid!==action.item.productid;
                            }),
                orderTotal:state.cartItems.reduce((total,item)=>{
                                        return total+item.min_list_price
                                },0) - action.item.min_list_price
            }
        default:
            return state;
    }
}