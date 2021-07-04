import React from 'react'
import { SortableElement } from 'react-sortable-hoc';
import { Box , Text , CloseButton , Stack , Tooltip } from "@chakra-ui/react"; 
const Card = SortableElement(props => {

    const remove = () => {
        props.removeOne(props.data.name);
    }
    return (
        <>
              <Tooltip
               hasArrow
          label={props.data.sizeReadable}
          aria-label="A tooltip"
          placement="top"
        >
            <Box  borderColor={"red"}  borderWidth="2px"   borderStyle="dashed" p={4} borderRadius="10px">
                <Stack align="flex-end"> 
            <CloseButton 
            color="black"
            onClick={remove}
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
            </Tooltip>
        </>
    );
});

export default Card  
