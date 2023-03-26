import React from 'react';
import { Box, Button, Center, Image, VStack } from 'native-base';
import Colors from './color/Color';
import Buttons from '../components/Buttons';

const NotVerify = () => {
  return (
    <Box flex={1} bg={Colors.black} safeAreaTop>
        <Center w="full" h={250}>
            <Image
                source={require("../../assets/splash1.png")}
                alt="logo"
                size="lg"
            />
        </Center>
        <VStack space={6} px={5} alignItems="center">
            <Buttons bg={Colors.blue} color={Colors.white}>REGISTER</Buttons>
            <Buttons bg={Colors.white} color={Colors.black}>LOGIN</Buttons>
        </VStack>
    </Box>
  )
}

export default NotVerify
