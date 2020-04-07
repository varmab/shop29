import React, {useState, useEffect, Fragment} from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import { getItems } from '../redux/actions'

const Catalog=(props)=>{
    let[items,setItems]=useState([]);
    let[loading,setLoading]=useState(false);
    let[error,setError]=useState(false);

    useEffect(()=>{
        props.getItems();
    },[])

    useEffect(()=>{
        setItems(props.items);
        setLoading(props.loading);
        setError(props.error)
    },[props])

    if(loading==true){
        return(
            <div>
                <p>Loading.. Please wait</p>
            </div>
        )
    }

    if(loading==true){
        return(
            <div>
                <p>Sorry.. Our server is down. Please try later.</p>
            </div>
        )
    }

    return(
        <div>
            {
                items.map((item)=>{
                    return <Item key={item.productid} item={item}/>
                })
            }
        </div>
    )
}

var mapStateToProps=(state)=>{
    return {
        items:state.catalog.items,
        loading:state.catalog.loading,
        error:state.catalog.error
    }
}

var mapDispatchToProps={
    getItems
}

export default connect(mapStateToProps,mapDispatchToProps)(Catalog);

