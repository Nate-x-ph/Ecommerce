import React from 'react';
import Colors from './color/Color';
import Search from '../components/Search'
import Products from '../components/Products';
import { Box } from 'native-base';


const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.lightBlue}>
        <Search/>
        <Products/>
    </Box>
  )
}

export default HomeScreen
