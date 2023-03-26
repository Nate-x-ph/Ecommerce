import React from 'react';
import { Box, Heading, Image, Text, View, VStack, Input, Button, Pressable } from 'native-base';
import Colors from './color/Color';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

function SignIn() {
  return (
    <Box flex={1} bg={Colors.black}>
        <Image flex={1} alt="Logo" 
        resizeMode='cover'
        size="lg"
        w="full"
        source={require("../../assets/cover2.jpg")}/>
        <Box 
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="5"
        justifyContent="center"
        >
        <Heading>LOGIN</Heading>
        <VStack space={8} pt="6">
        {/*Email*/}
            <Input 
            InputLeftElement={
            <MaterialIcons name="email" size={20} color="black" />
            }
            variant="underlined" 
            placeholder="user@gmail.com" 
            w="70%" 
            pl={2}
            color={Colors.black} 
            borderBottomColor={Colors.underline}/>
        {/*Password*/}
            <Input 
            InputLeftElement={
            <Entypo name="key" size={24} color="black" />
            }
            variant="underlined" 
            placeholder="password" 
            w="70%"
            type='password' 
            pl={2}
            color={Colors.black} 
            borderBottomColor={Colors.underline}/>
        </VStack>
        <Button
        _pressed={{
            bg: Colors.blue,
        }}
        my={30}
        w="40"
        rounded={50}
        bg={Colors.black}
        >
          LOGIN
        </Button>
        <Pressable mt={4}>
        <Text color={Colors.black}>SIGN UP</Text>
        </Pressable>
        </Box>
    </Box>
  )
}

export default SignIn;