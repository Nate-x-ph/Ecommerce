import { Box, Center, Text } from 'native-base'
import React from 'react'
import Colors from '../screens/color/Color'
import {FontAwesome} from '@expo/vector-icons'
import Buttons from './Buttons'

const CartEmpty = () => {
  return (
    <Box flex={1} px={2}>
        <Center h="90%">
            <Center w={200} h={200} bg={Colors.white} rounded="full">
                <FontAwesome name="shopping-basket" size={64} color={Colors.blue} />
            </Center>
            <Text color={Colors.blue} bold mt={5}>CART IS EMPTY</Text>
        </Center>
        <Buttons bg={Colors.black} color={Colors.white}>
            START SHOPPING
        </Buttons>
    </Box>
  )
}

export default CartEmpty
