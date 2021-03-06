export const GETITEMS_STARTED='GETITEMS_STARTED'
export const GETITEMS_SUCCESS='GETITEMS_SUCCESS'
export const GETITEMS_FAILED='GETITEMS_FAILED'
export const ADD_TO_CART='ADD_TO_CART'
export const REMOVE_FROM_CART='REMOVE_FROM_CART'


export function getItemsStarted(){
    return {
        type:GETITEMS_STARTED
    }
}

export function getItemsSuccess(items){
    return {
        type:GETITEMS_SUCCESS,
        items
    }
}

export function getItemsFailed(error){
    return {
        type:GETITEMS_FAILED,
        error
    }
}

//getItems thunk function
export function getItems(){
    return function(dispatch){
        dispatch(getItemsStarted());
        fetch('http://api.jsoneditoronline.org/v1/docs/572180836c614dadb4b2eccdc3a33cbc/data?jsonp')
        .then(response=>response.json())
        .then(data=>{
            dispatch(getItemsSuccess(data.response.products))
        })
        .catch(err=>{
            dispatch(getItemsFailed(err))
        })
    }
}


export  function addToCart(item){
    return {
        type:ADD_TO_CART,
        item
    }
}

export function removeFromCart(item){
    return {
        type:REMOVE_FROM_CART,
        item
    }
}

