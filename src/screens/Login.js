import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession()

const Login = () => {
  const navigation = useNavigation();
  
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    webClientId: "297631711193-uqkovc9260jms2s3qklrg34g37cba6gb.apps.googleusercontent.com",
    iosClientId: "297631711193-6p9gnh45g6a16ntgqklc2qs7errsrg53.apps.googleusercontent.com",
    androidClientId: "297631711193-g8concpffohlglv1usus2u1uqfuom5k9.apps.googleusercontent.com"
  });

  React.useEffect(()=> {
    if(response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken])

  async function fetchUserInfo() {
    let response = await fetch('https://accounts.google.com/o/oauth2/v2/auth', {
      headers: { Authorization: `Bearer ${accessToken}`}
    });
    const useInfo = await response.json();
    setUser(useInfo);
  }

  const ShowUserInfo = () => {
    if(user) {
      return(
        
        <View style={styles.container}>
          <Text style={styles.userX}>Welcome</Text>
          <Image source={{ uri: user.picture }} style={styles.source}/>
          <Text style={styles.userN}>{user.name}</Text>
        </View>
        
      )
    }
  }

  return (
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Login</Text>
        </View>
        <View style={styles.text2}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
        {/* Username or Email Input Field */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color:'black',
                  }}
                  _dark={{
                    color:"gray.300"
                  }}
                />
              }
              variant = "outline"
              placeholder="Username or Email"
              _light={{
                placeholderTextColor: "blueGray.400"
              }}
              _dark={{
                placeholderTextColor: "blueGray.50"
              }}
            />
          </View>
        </View>

        {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: "gray.300"
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Username or Email"
            _light={{
              placeholderTextColor: "blueGray.400"
            }}
            _dark={{
              placeholderTextColor: "blueGray.50"
            }}
          />
          </View>
        </View>

            {/* Button */}

        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign}>
              LOGIN
          </Button>
        </View>

            {/* Line */}

        <View style={styles.lineStyle}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
              <Text style={{ width: 50, textAlign: 'center'}}>Or</Text>
            </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

            {/* Box */}
        
        <View style={styles.container}>
            {user && <ShowUserInfo />}
            {user === null &&
            <>
              <TouchableOpacity
                disabled={!request}
                onPress={()=> {
                  promptAsync();
                }}
              >
            <Image source={require("/signin.png")} style={styles.google} />
              </TouchableOpacity>
            </>
            }
        </View>
      </View>
  )
}

export default () => {
  return (
  <NativeBaseProvider>
    <Login/>
  </NativeBaseProvider>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  LoginText:{
    marginTop:100,
    fontSize:30,
    fontWeight:'bold'
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center'
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  signupText:{
    fontWeight:'bold'
  },
  emailInput:{
    marginTop:10,
    marginRight:5
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15
  },
  buttonStyleX:{
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15
  },
  buttonDesign:{
    backgroundColor:'#026efd'
  },
  lineStyle:{
    flexDirection:'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems:'center'
  },
  user: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center',
  },
  userX: {
  fontSize: 35, 
  fontWeight: 'bold', 
  marginBottom: 20
  },
  source: {
  width: 100, 
  height: 100, 
  borderRadius: 50
  },
  userN: {
  fontSize: 20, 
  fontWeight: 'bold'
  },
  google: {
  width: 300, 
  height: 40,
  marginLeft:40,
  }
}
)
