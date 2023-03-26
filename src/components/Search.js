import { Box, HStack, Input, Pressable, Text } from 'native-base'
import React from 'react'
import Colors from '../screens/color/Color'
import {FontAwesome5} from '@expo/vector-icons'

const Search = () => {
    return (
        <HStack space={3} w="full" px={6} bg={Colors.blue} py={4} alignItems="center" safeAreaTop>
            <Input placeholder='Logitech, ACER ....' w="85%" bg={Colors.white} type="search" h={12} borderBottomWidth={0} 
                _focus={{
                    bg: Colors.white
                }}
            />
            <Pressable ml={3}>
                <FontAwesome5 name="shopping-basket" size={24} color={Colors.white}/>
                <Box px={1} rounded="full" position="absolute" top={-13} left={2} bg={Colors.red}
                _text={{
                    color: Colors.white, fontSize:'11px',
                }}
                >

                </Box>
            </Pressable> 
        </HStack>
    )
}

export default Search
