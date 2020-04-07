
import {
    GETITEMS_STARTED,
    GETITEMS_SUCCESS,
    GETITEMS_FAILED
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