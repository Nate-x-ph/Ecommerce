import { Box, Center, ScrollView, Text } from 'native-base'
import React from 'react'
import CartEmpty from '../components/CartEmpty'
import CartItems from '../components/CartItems'
import Colors from './color/Color'

const CartScreen = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.lightBlue}>
        {/* Header */}
        <Center w="full" py={5}>
            <Text color={Colors.black} fontSize={20} bold>
                Cart
            </Text>
        </Center>
        {/* If cart is empty 
        <CartEmpty/>*/}
        {/* Cart Items */}
        <ScrollView showsVerticalScrollIndicator={false}>
            <CartItems/>
        </ScrollView>
    </Box>
  )
}

export default CartScreen
