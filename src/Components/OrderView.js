import React from 'react'
import arrayMove from "array-move"
import CardList from "./CardComponent/CardList";


function OrderView({files , handleFiles , removeOne}) {

   const  onSortEnd = ({ oldIndex , newIndex}) => {
    handleFiles(arrayMove(files , oldIndex , newIndex));
    }


    return (
        <CardList onSortEnd={onSortEnd} files ={files} axis="xy" removeOne={removeOne}/>
    )
}

export default OrderView
