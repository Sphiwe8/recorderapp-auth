
import * as React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';



export default function Signup({navigation}) {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState(null);





  const audiopage = () => {
    navigation.navigate('Recorder');
  };
  

  return (
    <View style={styles.container}>
    
     
         <Image style={styles.logo} source={require('../assets/logo22.png')} />
     
     

      <Text style={styles.header}>
      Sign Up
      </Text>

      <Text style={styles.text}>
        Create an Account to start with voice recording
      </Text>

      <View style={styles.inputs}>
        <View style={styles.username}>
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
          <Text style={styles.user}>
          Create Password
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Enter Password"
            keyboardType="password"
          />
          
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 70,
        }}>
        <TouchableOpacity onPress={audiopage} style={styles.signupButton} >
        <Text style={styles.signupText}>Sign Up</Text>
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

  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
    color: '#000',
    justifyContent: 'center',
    padding: 23,
  },

  user: {
    fontSize: 17,
    fontWeight: '400',
    paddingLeft: 25,
    color: '#25316D',
  },

  signupButton:{
    width:140,
    height:60,
    backgroundColor:'#94c83d',
    justifyContent:'center',
    borderRadius:'10%',
  },

  signupText:{
fontSize:18,
color:'#fff',
alignSelf:'center',
textAlign:'center',

  },

  passwordInput: {
    paddingTop: '8%',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 30,
    borderColor: '#277BC0',
  },

  logo: {
    alignSelf: 'center',
    height: 40,
    width: 100,
    paddingBottom: 50,
  },
});