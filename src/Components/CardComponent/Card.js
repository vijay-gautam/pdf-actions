import React from 'react'
import { SortableElement } from 'react-sortable-hoc';
import { Box , Text , CloseButton , Stack } from "@chakra-ui/react"; 
const Card = SortableElement(props => {
    return (
        <div>
            <Box  borderColor={"red"}  borderWidth="2px"   borderStyle="dashed" p={4} borderRadius="10px">
                <Stack align="flex-end"> 
            <CloseButton 
            color="black"
            onClick={props.removeOne(props.data)}
                />
                </Stack>
            <Text 
            as={"span"}
            fontWeight={600}
            fontSize={ [ 10 , 20 ]}
            fontFamily="Roboto Condensed"
            >
               
            {props.data.name}
            </Text>
            </Box>
        </div>
    );
});

export default Card  
