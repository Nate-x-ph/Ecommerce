import React from 'react';
import { Box, Heading, Image, Text, View, VStack, Input, Button, Pressable } from 'native-base';
import Colors from './color/Color';
import { MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

function Register ()  {
  return (
      <Box flex={1} bg={Colors.black}>
          <Image flex={1} alt="Logo"
              resizeMode='cover'
              size="lg"
              w="full"
              source={require("../../assets/cover2.jpg")} />
          <Box
              w="full"
              h="full"
              position="absolute"
              top="0"
              px="5"
              justifyContent="center"
          >
              <Heading>SIGN UP</Heading>
              <VStack space={8} pt="6">
                  {/*Username*/}
                  <Input
                      InputLeftElement={
                          <FontAwesome name="user" size={20} color="black" />
                      }
                      variant="underlined"
                      placeholder="username"
                      w="70%"
                      pl={2}
                      color={Colors.black}
                      borderBottomColor={Colors.underline} />
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
                      borderBottomColor={Colors.underline} />
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
                      borderBottomColor={Colors.underline} />
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
                  SIGN UP
              </Button>
              <Pressable mt={4}>
                  <Text color={Colors.black}>LOG IN</Text>
              </Pressable>
          </Box>
      </Box>
  )
}

export default Register
