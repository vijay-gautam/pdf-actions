import React from 'react'
import { SortableContainer } from "react-sortable-hoc";
import Card from './Card';
import {SimpleGrid} from "@chakra-ui/react";

const  CardList = SortableContainer(({files , removeOne}) =>  {
    return (
        <div>
        <SimpleGrid columns={[1,null,3]} spacing={10} p={5}>
        {files.map((data,i) => (
            <Card 
            data= {data}
            index={i}
            key={data.id}
            id = {data.id} 
            removeOne={removeOne}/>
        ))}
        </SimpleGrid>
        </div>
    );
});

export default CardList
