import { Box, CheckIcon, FormControl, Heading, Select, Text, TextArea, View, VStack } from 'native-base'
import React, {useState} from 'react'
import Colors from '../screens/color/Color'
import Buttons from './Buttons'
import Message from './notification/Message'
import Rating from './Rating'

const Review = () => {
    const [ratings, setRatings] = useState('');
  return (
    <Box my={9} >
        <Heading bold fontSize={15} mb={2}>
            Review
        </Heading>
        {/*If no review*/}
          {/*<Message color={Colors.black} bg={Colors.lightBlue} bold size={12} children={"NO REVIEW"} />
*/}
        {/*Review*/}
        <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
            <Heading fontSize={15} color={Colors.black}>
                User Nate
            </Heading>
            <Rating value={4} />
            <Text my={2} fontSize={11}>March 26, 2023</Text>
            <Message 
                color={Colors.black} 
                bg={Colors.white} 
                size={12} 
                children={
                    "NativeBase is a component library that enables devs to build universal design systems. It is built on top of React Native, allowing you to develop apps for Android, iOS, and the Web."
                    }/>
        </Box>
        {/* Write Review */}
        {/*<Box mt={6}>
            <Heading fontSize={15} bold mb={4}>
                REVIEW THIS PRODUCT
            </Heading>
            <VStack space={6}>
                <FormControl>
                    <FormControl.Label _text={{
                        fontSize:"12px",
                        fontWeight:"bold",
                    }}>
                        Rating
                    </FormControl.Label>
                    <Select bg={Colors.lightBlue} borderWidth={0} rounded={5} py={4} placeholder="Choose Rate"
                    _selectedItem={{
                        bg:Colors.lightBlue,
                        endIcon:<CheckIcon size={3}/>,
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                    selectedValue={ratings}
                    onValueChange={(e)=> setRatings(e)}
                    >
                        <Select.Item label="1- Poor" value="1"/>
                        <Select.Item label="2- Fair" value="2"/>
                        <Select.Item label="3- Good" value="3"/>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormControl.Label _text={{
                        fontSize:"12px",
                        fontWeight:"bold",
                    }}>
                        Comment
                    </FormControl.Label>
                    <TextArea 
                    h={24} 
                    w="full" 
                    placeholder="This product is good ....." 
                    borderWidth={0} 
                    bg={Colors.lightBlue}
                    py={4}
                    _focus={{
                        bg: Colors.lightBlue,
                    }}
                    />
                </FormControl>
                <Buttons 
                bg={Colors.blue} 
                color={Colors.white}
                >
                SUBMIT
                </Buttons>
                {/* If not login /}
                <Message 
                color={Colors.white} 
                bg={Colors.black} 
                size={12} 
                children={
                    "Please 'Login' to write a review"
                    }/>
            </VStack> 
        </Box> */}
    </Box>
  )
}

export default Review
