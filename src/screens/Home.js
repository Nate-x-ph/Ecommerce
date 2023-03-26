import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';

const Home = () => {
  return (
      <View style={styles.container}>
      <View style={styles.Middle}>
          <Text style={styles.HomeText}>Home Page</Text>
      </View>
      </View>
  )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Home />
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff'
    },
    Middle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:300,
    },
    HomeText:{
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold'
    }
})