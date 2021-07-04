import React from 'react'
import { SortableElement } from 'react-sortable-hoc';
import { Box , Text , CloseButton , Stack , Tooltip , useColorModeValue } from "@chakra-ui/react"; 
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
            <Box  borderColor={useColorModeValue("red","white")}  borderWidth="2px"   borderStyle="dashed" p={4} borderRadius="10px"  
            bg={useColorModeValue("red.200", "red.500")}>
                <Stack align="flex-end"> 
            <CloseButton 
            color={useColorModeValue("black", "white")}
            size="sm"
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
