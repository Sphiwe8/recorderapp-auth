
import { React, useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function Login({ navigation }) {
  const [text, onChangeText] = useState('');
  const [password, onChangePassword] = useState(null);

  const nextpage = () => {
    navigation.navigate('Sign up');
  };


  const recordingpage = () => {
    navigation.navigate('Recorder');
  };

 

  return (
    <View style={styles.container}>
    
    <Image style={styles.logo} source={require('../assets/logo22.png')} />

    <Text style={styles.header}>
      Log In
      </Text>

      <View>
        <View>
          <Text style={styles.user}>
          Email
          </Text>

          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <View style={styles.passwordInput}>
          <Text style={styles.user}>Password</Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            keyboardType="password"
          />
        </View>

         <View>
        <Text style={styles.signupText}>

        Create an Account?
         
            <TouchableOpacity onPress={nextpage}>
            <Text style={styles.signupLink}>
            Sign Up
            </Text>
            
            </TouchableOpacity>
          
        </Text>
      </View>

        </View>

         <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 70,
        }}>
        <TouchableOpacity onPress={recordingpage} style={styles.signupButton} >
        <Text style={styles.signuptext}>Log In</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  header: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '400',
    color: '#94c83d',
  },

  user: {
    fontSize: 17,
    fontWeight: '400',
    paddingLeft: 25,
  },

  passwordInput: {
    paddingTop: '8%',
  },

  signupLink: {
    color: '#277BC0',
    
    marginLeft:10,
  },

   signupButton:{
    width:140,
    height:60,
    backgroundColor:'#94c83d',
    justifyContent:'center',
    borderRadius:'10%',
  },

  signuptext:{
fontSize:18,
color:'#fff',
alignSelf:'center',
textAlign:'center',

  },

  signupText: {
    textAlign:'center',
    justifyContent: 'center',
    paddingTop: '10%',
    fontSize: 16,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 30,
    borderColor: '#8758FF',
  },

  logo: {
    alignSelf: 'center',
    height: 40,
    width: 100,
    paddingBottom: 50,
  },
});
