import React from 'react'

export default props => {
    if(props.visible){
        return props.children
    }else{
        return false;
    }
}