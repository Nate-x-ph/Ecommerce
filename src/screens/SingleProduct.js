import { Box, Heading, HStack, Image, ScrollView, Spacer, Text, View } from 'native-base'
import React, { useState } from 'react'
import Colors from './color/Color'
import Rating from '../components/Rating'
import NumericInput from 'react-native-numeric-input'
import Buttons from '../components/Buttons'
import Review from '../components/Review'

const SingleProduct = () => {
    const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
            <Image 
            source={require("../../assets/HEADSET.png")}
            alt="Image"
            w="full"
            h={300}
            resizeMode="contain"
            />
            <Heading fontSize={15} mb={12} lineHeight={22}>
            New Logitech Headset from Amazon Shop
            </Heading>
            <Rating value={4} />
            <HStack space={2} alignItems="center" my={5}>
                <NumericInput 
                    value={value}
                    totalWidth={140}
                    totalHeight={30}
                    iconSize={25}
                    step={1}
                    maxValue={15}
                    minValue={0}
                    borderColor={Colors.deepGray}
                    rounded
                    textColor={Colors.black}
                    iconStyle={{ color: Colors.white}}
                    rightButtonBackgroundColor={Colors.blue}
                    leftButtonBackgroundColor={Colors.blue}
                />
                <Spacer />
                <Heading bold color={Colors.black} fontSize={19}>Php200</Heading>
            </HStack>
            <Text lineHeight={24} fontSize={12}>
                  
                  NativeBase started out as an open source framework that enabled developers to build high-quality mobile apps using React Native. The first version included UITabBar on iOS and Drawer on Android. NativeBase v1 was very well-received by the dev community.
            </Text>
            <Buttons bg={Colors.blue} color={Colors.white} mt={10}>ADD TO CART</Buttons>
            {/*Review*/}
            <Review />
        </ScrollView>
    </Box>
  )
}

export default SingleProduct
