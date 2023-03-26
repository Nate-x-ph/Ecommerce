import { Box, Flex, Heading, Image, Pressable, ScrollView, Text } from 'native-base'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import products from '../data/Products'
import Rating from './Rating'

const Products = () => {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
        >
            {products.map((product)=>(
                <Pressable key={product._id} w="47%" bg={Colors.white} rounded="md" shadow={2} pt={0.3}
                my={3} pb={2} overflow="hidden">
                    <Image source={{ uri: product.image}} alt={product.name} w="full" h={24} resizeMode="contain"/>
                    <Box px={4} pt={1}>
                        <Heading size="sm" bold>
                            Php{product.price}
                        </Heading>
                        <Text fontSize={10} mt={1} isTruncated>{product.name}</Text>
                        <Text>{product.description}</Text>
                        <Rating value={product.rating}/>
                    </Box>
                </Pressable> 
            ))}
        </Flex>
    </ScrollView>
  )
}

export default Products
